// Version 3 enhancements: daily steps, automatic set completion, and workout closing.
(() => {
  if (!state.dailyMetrics) state.dailyMetrics = {};

  function getDailyMetric(dateStr) {
    if (!state.dailyMetrics[dateStr]) state.dailyMetrics[dateStr] = { steps: "" };
    return state.dailyMetrics[dateStr];
  }

  function hasCompleteSetInput(set, exercise) {
    if (exercise.timeBased) return String(set.reps ?? "").trim() !== "";
    return String(set.weight ?? "").trim() !== "" && String(set.reps ?? "").trim() !== "";
  }

  function stepsInRange(start, end) {
    const dates = dateStringsInRange(start, end);
    const values = dates
      .map(date => Number(state.dailyMetrics?.[date]?.steps))
      .filter(value => Number.isFinite(value) && value > 0);
    const total = values.reduce((sum, value) => sum + value, 0);
    return {
      total,
      average: values.length ? Math.round(total / values.length) : 0,
      days: values.length
    };
  }

  function ensureTodayEnhancementMarkup() {
    const todayView = document.getElementById("view-today");
    const hero = todayView?.querySelector(".hero");
    if (!todayView || !hero) return;

    if (!document.getElementById("todaySteps")) {
      const activity = document.createElement("div");
      activity.className = "card daily-activity-card";
      activity.innerHTML = `
        <div>
          <h3>نشاط اليوم</h3>
          <p>سجل عدد خطواتك ليدخل في التقارير اليومية والأسبوعية والشهرية.</p>
        </div>
        <div class="steps-entry">
          <label>خطوات اليوم
            <input id="todaySteps" type="number" min="0" max="100000" step="1" inputmode="numeric" placeholder="مثال: 10000" />
          </label>
          <button id="saveTodayStepsBtn" class="secondary" type="button">حفظ الخطوات</button>
        </div>
        <span id="stepsSaveStatus" class="save-status" aria-live="polite"></span>`;
      hero.insertAdjacentElement("afterend", activity);
    }

    if (!document.getElementById("finishWorkoutArea")) {
      const finishArea = document.createElement("div");
      finishArea.id = "finishWorkoutArea";
      document.getElementById("todayWorkout")?.insertAdjacentElement("afterend", finishArea);
    }
  }

  ensureTodayEnhancementMarkup();

  const baseRenderToday = renderToday;
  renderToday = function enhancedRenderToday() {
    ensureTodayEnhancementMarkup();
    baseRenderToday();

    const now = new Date();
    const dateStr = isoDate(now);
    const workout = getWorkoutByJsDay(now.getDay());
    const metric = getDailyMetric(dateStr);
    const stepsInput = document.getElementById("todaySteps");
    const stepsStatus = document.getElementById("stepsSaveStatus");
    const saveStepsButton = document.getElementById("saveTodayStepsBtn");
    const finishArea = document.getElementById("finishWorkoutArea");
    const container = document.getElementById("todayWorkout");

    if (stepsInput) stepsInput.value = metric.steps ?? "";
    if (saveStepsButton) {
      saveStepsButton.onclick = () => {
        const raw = stepsInput.value.trim();
        if (raw !== "" && (!Number.isFinite(Number(raw)) || Number(raw) < 0)) {
          alert("أدخل عدد خطوات صحيحًا.");
          return;
        }
        metric.steps = raw;
        saveState();
        if (stepsStatus) {
          stepsStatus.textContent = raw
            ? `تم حفظ ${Number(raw).toLocaleString("ar-SA")} خطوة`
            : "تم مسح خطوات اليوم";
          setTimeout(() => { stepsStatus.textContent = ""; }, 1800);
        }
        renderReports();
      };
    }

    if (!finishArea) return;
    finishArea.innerHTML = "";

    if (!workout.exercises.length) return;

    const session = ensureSession(dateStr, workout);

    if (session.finished) {
      const summary = summarizeSession(session);
      const finishedTime = session.finishedAt
        ? new Intl.DateTimeFormat("ar-SA", { hour: "numeric", minute: "2-digit" }).format(new Date(session.finishedAt))
        : "";

      container.innerHTML = `
        <div class="card workout-closed-card">
          <div class="workout-closed-icon">✓</div>
          <h3>تم إنهاء الحصة</h3>
          <p>${summary.performedSets} جولة مسجلة${finishedTime ? ` · انتهت الساعة ${finishedTime}` : ""}</p>
          <div class="workout-closed-actions">
            <button id="openTodayReportBtn" class="secondary" type="button">عرض تقرير اليوم</button>
            <button id="reopenWorkoutBtn" class="ghost" type="button">إعادة فتح التمرين</button>
          </div>
        </div>`;

      document.getElementById("openTodayReportBtn").onclick = () => {
        switchView("reports");
        setReportMode("daily");
      };

      document.getElementById("reopenWorkoutBtn").onclick = () => {
        if (!confirm("إعادة فتح حصة اليوم للتعديل؟")) return;
        session.finished = false;
        session.finishedAt = null;
        saveState();
        renderToday();
        renderHistory();
        renderReports();
      };
      return;
    }

    const exerciseCards = [...container.querySelectorAll(".exercise-card")];
    exerciseCards.forEach((card, exerciseIndex) => {
      const exercise = workout.exercises[exerciseIndex];
      const exerciseData = session.exercises?.[exercise.id];
      if (!exercise || !exerciseData) return;

      const setRows = [...card.querySelectorAll(".set-rows .set-row")];
      setRows.forEach((row, setIndex) => {
        const set = exerciseData.sets?.[setIndex];
        if (!set) return;

        const weightInput = row.querySelector(".set-weight");
        const repsInput = row.querySelector(".set-reps");
        const doneInput = row.querySelector(".set-done");

        const autoComplete = () => {
          set.weight = exercise.timeBased ? "" : weightInput.value;
          set.reps = repsInput.value;
          doneInput.checked = hasCompleteSetInput(set, exercise);
          set.done = doneInput.checked;
          row.classList.toggle("completed", set.done);
          saveState();
          updateFinishProgress();
          renderHistory();
        };

        weightInput?.addEventListener("input", autoComplete);
        repsInput?.addEventListener("input", autoComplete);
      });
    });

    finishArea.innerHTML = `
      <div class="card finish-workout-card">
        <h3>إنهاء حصة اليوم</h3>
        <p class="finish-progress"></p>
        <button id="finishWorkoutBtn" class="primary" type="button">إنهاء وإغلاق التمرين</button>
      </div>`;

    function updateFinishProgress() {
      const summary = summarizeSession(session);
      const progress = finishArea.querySelector(".finish-progress");
      if (progress) progress.textContent = `${summary.performedSets} من ${summary.plannedSets} جولة مسجلة`;
    }

    updateFinishProgress();

    document.getElementById("finishWorkoutBtn").onclick = () => {
      const summary = summarizeSession(session);
      if (!summary.performedSets) {
        alert("سجل جولة واحدة على الأقل قبل إنهاء الحصة.");
        return;
      }
      if (!confirm(`إنهاء الحصة وإغلاقها؟ تم تسجيل ${summary.performedSets} من ${summary.plannedSets} جولة.`)) return;
      session.finished = true;
      session.finishedAt = new Date().toISOString();
      saveState();
      renderToday();
      renderHistory();
      renderReports();
    };
  };

  const baseStatusForDate = statusForDate;
  statusForDate = function enhancedStatusForDate(dateStr) {
    const session = getSessionForDate(dateStr);
    if (session?.finished) {
      const summary = summarizeSession(session);
      return { label: "منتهي", className: "done", detail: `${summary.performedSets}/${summary.plannedSets} جولة` };
    }
    return baseStatusForDate(dateStr);
  };

  const baseRenderReports = renderReports;
  renderReports = function enhancedRenderReports() {
    baseRenderReports();

    const input = document.getElementById("reportPeriodInput");
    const output = document.getElementById("reportOutput");
    if (!input?.value || !output) return;

    let title = "خطوات اليوم";
    let primary = "—";
    let secondary = "لم تُسجل خطوات";
    let reportLine = "الخطوات: غير مسجلة";

    if (reportMode === "daily") {
      const steps = Number(state.dailyMetrics?.[input.value]?.steps) || 0;
      if (steps) {
        primary = formatNumber(steps);
        secondary = "خطوة";
        reportLine = `الخطوات: ${steps}`;
      }
    } else {
      let start;
      let end;
      if (reportMode === "weekly") {
        const selected = parseLocalDate(input.value);
        start = startOfSaturdayWeek(selected);
        end = endOfSaturdayWeek(selected);
        title = "خطوات الأسبوع";
      } else {
        const bounds = monthBounds(input.value);
        start = bounds.start;
        end = bounds.end;
        title = "خطوات الشهر";
      }

      const summary = stepsInRange(start, end);
      if (summary.total) {
        primary = formatNumber(summary.total);
        secondary = `متوسط ${formatNumber(summary.average)} يوميًا · ${summary.days} أيام مسجلة`;
        reportLine = `إجمالي الخطوات: ${summary.total}\nمتوسط الخطوات: ${summary.average}`;
      }
    }

    output.insertAdjacentHTML("beforeend", `
      <div class="card steps-report-card">
        <h3>${title}</h3>
        <strong>${primary}</strong>
        <p>${secondary}</p>
      </div>`);

    if (!lastReportText.includes("الخطوات:" ) && !lastReportText.includes("إجمالي الخطوات:")) {
      lastReportText += `\n${reportLine}`;
    }
  };

  const baseRenderHistory = renderHistory;
  renderHistory = function enhancedRenderHistory() {
    baseRenderHistory();
    const sessions = Object.values(state.sessions)
      .filter(session => sessionHasData(session))
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 30);
    const cards = [...document.querySelectorAll("#historyList .history-card")];
    cards.forEach((card, index) => {
      const session = sessions[index];
      if (!session) return;
      const heading = card.querySelector("h3");
      const meta = card.querySelector(".history-meta");
      if (session.finished && heading && !heading.querySelector(".history-finished")) {
        heading.insertAdjacentHTML("beforeend", '<span class="history-finished">منتهية</span>');
      }
      const steps = state.dailyMetrics?.[session.date]?.steps;
      if (steps && meta && !meta.textContent.includes("خطوة")) {
        meta.textContent += ` · ${Number(steps).toLocaleString("ar-SA")} خطوة`;
      }
    });
  };

  saveState();
  renderToday();
  renderHistory();
  renderReports();
})();
