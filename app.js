const SCHEDULE = [
  {
    key: "saturday-upper-a",
    dayIndex: 6,
    arDay: "السبت",
    title: "علوي A",
    enTitle: "Upper A",
    exercises: [
      { id: "machine-chest-press", ar: "ضغط الصدر على الجهاز", en: "Machine Chest Press", sets: 3, reps: "8–12" },
      { id: "lat-pulldown", ar: "السحب العلوي", en: "Lat Pulldown", sets: 3, reps: "8–12", hint: "قبضة محايدة أو مريحة للكتف" },
      { id: "seated-row", ar: "التجديف جالسًا", en: "Seated Row", sets: 3, reps: "8–12" },
      { id: "incline-chest-press", ar: "ضغط الصدر المائل على الجهاز", en: "Incline Machine Chest Press", sets: 2, reps: "8–12" },
      { id: "machine-lateral-raise-a", ar: "الرفرفة الجانبية على الجهاز", en: "Machine Lateral Raise", sets: 2, reps: "12–15" },
      { id: "machine-triceps-a", ar: "تمرين الترايسبس على الجهاز", en: "Machine Triceps Extension", sets: 2, reps: "10–15" },
      { id: "machine-biceps-a", ar: "تمرين البايسبس على الجهاز", en: "Machine Biceps Curl", sets: 2, reps: "10–15" },
      { id: "face-pull", ar: "سحب الوجه بالكيبل", en: "Cable Face Pull", sets: 2, reps: "12–15" }
    ]
  },
  {
    key: "sunday-lower-a",
    dayIndex: 0,
    arDay: "الأحد",
    title: "سفلي A",
    enTitle: "Lower A",
    exercises: [
      { id: "leg-press-a", ar: "ضغط الرجلين", en: "Leg Press", sets: 3, reps: "8–12" },
      { id: "goblet-squat", ar: "سكوات بالدامبل", en: "Dumbbell Goblet Squat", sets: 3, reps: "8–12" },
      { id: "leg-curl-a", ar: "ثني الرجلين للخلف", en: "Leg Curl", sets: 3, reps: "10–15" },
      { id: "leg-extension-a", ar: "مد الرجلين للأمام", en: "Leg Extension", sets: 2, reps: "12–15" },
      { id: "glute-drive-a", ar: "دفع الحوض على الجهاز", en: "Machine Glute Drive", sets: 3, reps: "10–15" },
      { id: "front-plank", ar: "بلانك أمامي", en: "Front Plank", sets: 3, reps: "20–30 ثانية", timeBased: true }
    ]
  },
  {
    key: "monday-rest",
    dayIndex: 1,
    arDay: "الاثنين",
    title: "راحة",
    enTitle: "Rest",
    exercises: []
  },
  {
    key: "tuesday-upper-b",
    dayIndex: 2,
    arDay: "الثلاثاء",
    title: "علوي B",
    enTitle: "Upper B",
    exercises: [
      { id: "neutral-lat-pulldown", ar: "السحب العلوي بقبضة محايدة", en: "Neutral-Grip Lat Pulldown", sets: 3, reps: "8–12" },
      { id: "chest-supported-row", ar: "تجديف مع دعم الصدر", en: "Chest-Supported Row", sets: 3, reps: "8–12" },
      { id: "machine-chest-press-b", ar: "ضغط الصدر على الجهاز", en: "Machine Chest Press", sets: 3, reps: "8–12" },
      { id: "machine-shoulder-press", ar: "ضغط الأكتاف على الجهاز", en: "Machine Shoulder Press", sets: 2, reps: "8–12", hint: "قبضة محايدة وعمق مريح" },
      { id: "reverse-pec-deck", ar: "الكتف الخلفي على الجهاز", en: "Reverse Pec Deck", sets: 2, reps: "12–15" },
      { id: "machine-lateral-raise-b", ar: "الرفرفة الجانبية على الجهاز", en: "Machine Lateral Raise", sets: 2, reps: "12–15" },
      { id: "machine-triceps-b", ar: "تمرين الترايسبس على الجهاز", en: "Machine Triceps Extension", sets: 2, reps: "10–15" },
      { id: "machine-biceps-b", ar: "تمرين البايسبس على الجهاز", en: "Machine Biceps Curl", sets: 2, reps: "10–15" },
      { id: "cable-forearm", ar: "تمرين السواعد بالكيبل", en: "Cable Forearm Curl", sets: 2, reps: "12–20" }
    ]
  },
  {
    key: "wednesday-rest",
    dayIndex: 3,
    arDay: "الأربعاء",
    title: "راحة",
    enTitle: "Rest",
    exercises: []
  },
  {
    key: "thursday-lower-b",
    dayIndex: 4,
    arDay: "الخميس",
    title: "سفلي B",
    enTitle: "Lower B",
    exercises: [
      { id: "hack-or-leg-press", ar: "هاك سكوات أو ضغط الرجلين", en: "Hack Squat or Leg Press", sets: 3, reps: "10–12" },
      { id: "leg-curl-b", ar: "ثني الرجلين للخلف", en: "Leg Curl", sets: 4, reps: "8–12" },
      { id: "glute-drive-b", ar: "دفع الحوض على الجهاز", en: "Machine Glute Drive", sets: 3, reps: "8–12" },
      { id: "leg-extension-b", ar: "مد الرجلين للأمام", en: "Leg Extension", sets: 2, reps: "12–15" },
      { id: "hip-abductor", ar: "فتح الفخذ على الجهاز", en: "Hip Abductor Machine", sets: 2, reps: "12–20" },
      { id: "hip-adductor", ar: "ضم الفخذ على الجهاز", en: "Hip Adductor Machine", sets: 2, reps: "12–15" },
      { id: "back-extension", ar: "تمديد أسفل الظهر على الجهاز", en: "Machine Back Extension", sets: 2, reps: "12–15", hint: "مدى مريح فقط" },
      { id: "side-plank", ar: "بلانك جانبي", en: "Side Plank", sets: 2, reps: "15–25 ثانية لكل جهة", timeBased: true }
    ]
  },
  {
    key: "friday-rest",
    dayIndex: 5,
    arDay: "الجمعة",
    title: "راحة",
    enTitle: "Rest",
    exercises: []
  }
];

const STORAGE_KEY = "mohamedGymTracker.v1";
const state = loadState();
let deferredInstallPrompt = null;
let timerSeconds = Number(state.settings.defaultTimer || 90);
let timerRemaining = timerSeconds;
let timerInterval = null;

function defaultState() {
  return {
    sessions: {},
    body: [],
    customLinks: {},
    settings: { dark: false, defaultTimer: 90 }
  };
}

function loadState() {
  try {
    return { ...defaultState(), ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isoDate(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatArabicDate(date = new Date()) {
  return new Intl.DateTimeFormat("ar-SA", { weekday: "long", day: "numeric", month: "long" }).format(date);
}

function getWorkoutByJsDay(jsDay) {
  return SCHEDULE.find(d => d.dayIndex === jsDay);
}

function youtubeSearchUrl(exercise) {
  const query = encodeURIComponent(`${exercise.en} exercise form`);
  return `https://www.youtube.com/results?search_query=${query}`;
}

function sessionKey(dateStr, workoutKey) {
  return `${dateStr}__${workoutKey}`;
}

function ensureSession(dateStr, workout) {
  const key = sessionKey(dateStr, workout.key);
  if (!state.sessions[key]) {
    state.sessions[key] = {
      date: dateStr,
      workoutKey: workout.key,
      title: `${workout.arDay} - ${workout.title}`,
      exercises: {}
    };
  }
  return state.sessions[key];
}

function findPreviousExercise(exerciseId, beforeDate) {
  return Object.values(state.sessions)
    .filter(s => s.date < beforeDate && s.exercises && s.exercises[exerciseId])
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(s => ({ date: s.date, data: s.exercises[exerciseId] }))[0] || null;
}

function renderToday() {
  const now = new Date();
  const dateStr = isoDate(now);
  const workout = getWorkoutByJsDay(now.getDay());

  document.getElementById("todayLabel").textContent = formatArabicDate(now);
  document.getElementById("todayDayBadge").textContent = workout.arDay;
  document.getElementById("todayWorkoutTitle").textContent = `${workout.title} · ${workout.enTitle}`;
  document.getElementById("todayWorkoutSubtitle").textContent = workout.exercises.length
    ? `${workout.exercises.length} تمارين — الحفظ تلقائي`
    : "استشفاء، مشي خفيف حسب الراحة، ونوم جيد.";

  const container = document.getElementById("todayWorkout");
  container.innerHTML = "";

  if (!workout.exercises.length) {
    container.innerHTML = `<div class="card rest-card"><h3>يوم راحة</h3><p>لا تحتاج تعويض الحصة. التزم بجدول اليوم التالي.</p></div>`;
    return;
  }

  const session = ensureSession(dateStr, workout);
  const template = document.getElementById("exerciseTemplate");

  workout.exercises.forEach((exercise) => {
    if (!session.exercises[exercise.id]) {
      session.exercises[exercise.id] = { sets: Array.from({ length: exercise.sets }, () => ({ weight: "", reps: "", done: false })), note: "" };
    }
    const exerciseData = session.exercises[exercise.id];
    while (exerciseData.sets.length < exercise.sets) exerciseData.sets.push({ weight: "", reps: "", done: false });

    const node = template.content.cloneNode(true);
    node.querySelector(".exercise-name").textContent = `${exercise.ar} · ${exercise.en}`;
    node.querySelector(".exercise-target").textContent = `${exercise.sets} جولات × ${exercise.reps}${exercise.hint ? ` — ${exercise.hint}` : ""}`;

    const link = node.querySelector(".youtube-link");
    link.href = state.customLinks[exercise.id] || youtubeSearchUrl(exercise);

    node.querySelector(".edit-link").addEventListener("click", () => {
      const current = state.customLinks[exercise.id] || "";
      const value = prompt("ضع رابط فيديو يوتيوب محدد، أو اتركه فارغًا للعودة إلى البحث التلقائي:", current);
      if (value === null) return;
      const trimmed = value.trim();
      if (trimmed && !/^https?:\/\//i.test(trimmed)) {
        alert("الرابط يجب أن يبدأ بـ http:// أو https://");
        return;
      }
      if (trimmed) state.customLinks[exercise.id] = trimmed;
      else delete state.customLinks[exercise.id];
      saveState();
      renderToday();
    });

    const previous = findPreviousExercise(exercise.id, dateStr);
    const previousBox = node.querySelector(".previous-result");
    if (previous) {
      const completed = previous.data.sets
        .filter(s => s.weight || s.reps)
        .map((s, idx) => `ج${idx + 1}: ${s.weight || "—"} كغ × ${s.reps || "—"}`)
        .join(" | ");
      previousBox.textContent = completed ? `آخر مرة ${previous.date}: ${completed}` : "لا توجد أرقام سابقة مكتملة.";
    } else {
      previousBox.textContent = "أول تسجيل لهذا التمرين.";
    }

    const rows = node.querySelector(".set-rows");
    exerciseData.sets.slice(0, exercise.sets).forEach((set, index) => {
      const row = document.createElement("div");
      row.className = `set-row ${set.done ? "completed" : ""}`;
      row.innerHTML = `
        <strong>${index + 1}</strong>
        <input class="set-weight" type="number" min="0" step="0.5" inputmode="decimal" placeholder="${exercise.timeBased ? "—" : "كغ"}" value="${set.weight ?? ""}" ${exercise.timeBased ? "disabled" : ""} />
        <input class="set-reps" type="number" min="0" step="1" inputmode="numeric" placeholder="${exercise.timeBased ? "ثانية" : "عدة"}" value="${set.reps ?? ""}" />
        <input class="set-done" type="checkbox" ${set.done ? "checked" : ""} aria-label="تمت الجولة ${index + 1}" />
      `;
      const weightInput = row.querySelector(".set-weight");
      const repsInput = row.querySelector(".set-reps");
      const doneInput = row.querySelector(".set-done");

      const persist = () => {
        set.weight = exercise.timeBased ? "" : weightInput.value;
        set.reps = repsInput.value;
        set.done = doneInput.checked;
        row.classList.toggle("completed", set.done);
        saveState();
        renderHistory();
      };

      weightInput.addEventListener("change", persist);
      repsInput.addEventListener("change", persist);
      doneInput.addEventListener("change", persist);
      rows.appendChild(row);
    });

    const note = node.querySelector(".exercise-note");
    note.value = exerciseData.note || "";
    note.addEventListener("change", () => {
      exerciseData.note = note.value;
      saveState();
    });

    container.appendChild(node);
  });

  saveState();
}

function renderWeek() {
  const nowDay = new Date().getDay();
  const grid = document.getElementById("weekGrid");
  grid.innerHTML = "";
  SCHEDULE.forEach(day => {
    const el = document.createElement("article");
    el.className = `day-card ${day.dayIndex === nowDay ? "today" : ""}`;
    el.innerHTML = `
      <strong>${day.arDay}</strong>
      <div>
        <strong>${day.title} · ${day.enTitle}</strong>
        <p>${day.exercises.length ? `${day.exercises.length} تمارين` : "استشفاء"}</p>
      </div>
      <span class="day-type">${day.exercises.length ? "تمرين" : "راحة"}</span>
    `;
    grid.appendChild(el);
  });
}

function renderHistory() {
  const list = document.getElementById("historyList");
  const sessions = Object.values(state.sessions)
    .filter(s => Object.values(s.exercises || {}).some(ex => ex.sets?.some(set => set.weight || set.reps || set.done)))
    .sort((a, b) => b.date.localeCompare(a.date));

  if (!sessions.length) {
    list.innerHTML = `<div class="card"><p>لا توجد حصص مسجلة بعد.</p></div>`;
    return;
  }

  list.innerHTML = "";
  sessions.slice(0, 30).forEach(session => {
    const card = document.createElement("article");
    card.className = "card history-card";
    const workout = SCHEDULE.find(w => w.key === session.workoutKey);
    const completedSets = Object.values(session.exercises || {}).reduce((n, ex) => n + (ex.sets || []).filter(s => s.done).length, 0);
    card.innerHTML = `<h3>${session.title}</h3><div class="history-meta">${session.date} · ${completedSets} جولات مكتملة</div>`;

    if (workout) {
      workout.exercises.forEach(exercise => {
        const data = session.exercises[exercise.id];
        if (!data || !(data.sets || []).some(s => s.weight || s.reps || s.done)) return;
        const detail = data.sets
          .filter(s => s.weight || s.reps || s.done)
          .map((s, i) => `ج${i + 1}: ${exercise.timeBased ? `${s.reps || "—"} ثانية` : `${s.weight || "—"} كغ × ${s.reps || "—"}`}`)
          .join(" | ");
        const item = document.createElement("div");
        item.className = "history-exercise";
        item.innerHTML = `<strong>${exercise.ar}</strong><span>${detail}</span>`;
        card.appendChild(item);
      });
    }

    list.appendChild(card);
  });
}

function renderBody() {
  const container = document.getElementById("bodyHistory");
  const items = [...state.body].sort((a, b) => b.date.localeCompare(a.date));
  if (!items.length) {
    container.innerHTML = `<div class="card"><p>لا توجد قياسات مسجلة بعد.</p></div>`;
    return;
  }
  const card = document.createElement("div");
  card.className = "card";
  items.slice(0, 30).forEach(item => {
    const row = document.createElement("div");
    row.className = "body-row";
    row.innerHTML = `
      <strong>${item.date}</strong>
      <span>${item.weight ? `${item.weight} كغ` : "—"}</span>
      <span>${item.waist ? `${item.waist} سم` : "—"}</span>
      ${item.note ? `<small>${escapeHtml(item.note)}</small>` : ""}
    `;
    card.appendChild(row);
  });
  container.innerHTML = "";
  container.appendChild(card);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
}


let reportMode = "daily";
let lastReportText = "";

function parseLocalDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, amount) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  copy.setDate(copy.getDate() + amount);
  return copy;
}

function startOfSaturdayWeek(date) {
  const difference = (date.getDay() + 1) % 7;
  return addDays(date, -difference);
}

function endOfSaturdayWeek(date) {
  return addDays(startOfSaturdayWeek(date), 6);
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("ar-SA", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function formatNumber(value, maximumFractionDigits = 0) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return new Intl.NumberFormat("ar-SA", { maximumFractionDigits }).format(Number(value));
}

function getWorkoutForDate(dateStr) {
  return getWorkoutByJsDay(parseLocalDate(dateStr).getDay());
}

function setHasData(set) {
  return Boolean(set && (set.done || set.weight !== "" && set.weight !== null && set.weight !== undefined || set.reps !== "" && set.reps !== null && set.reps !== undefined));
}

function sessionHasData(session) {
  return Boolean(session && Object.values(session.exercises || {}).some(exercise => (exercise.sets || []).some(setHasData)));
}

function getSessionForDate(dateStr) {
  return Object.values(state.sessions).find(session => session.date === dateStr && sessionHasData(session)) || null;
}

function summarizeSession(session) {
  if (!session) {
    return {
      plannedSets: 0, performedSets: 0, checkedSets: 0, totalReps: 0,
      holdSeconds: 0, volume: 0, maxWeight: 0, exerciseCount: 0,
      completionPercent: 0, workout: null, exerciseDetails: []
    };
  }

  const workout = SCHEDULE.find(item => item.key === session.workoutKey) || getWorkoutForDate(session.date);
  let plannedSets = 0;
  let performedSets = 0;
  let checkedSets = 0;
  let totalReps = 0;
  let holdSeconds = 0;
  let volume = 0;
  let maxWeight = 0;
  let exerciseCount = 0;
  const exerciseDetails = [];

  (workout?.exercises || []).forEach(exercise => {
    plannedSets += exercise.sets;
    const data = session.exercises?.[exercise.id];
    if (!data) return;

    const usedSets = (data.sets || []).slice(0, exercise.sets).filter(setHasData);
    if (!usedSets.length) return;

    exerciseCount += 1;
    performedSets += usedSets.length;
    checkedSets += usedSets.filter(set => set.done).length;

    let exerciseVolume = 0;
    let exerciseReps = 0;
    let exerciseSeconds = 0;
    let exerciseMax = 0;

    usedSets.forEach(set => {
      const reps = Number(set.reps) || 0;
      const weight = Number(set.weight) || 0;
      if (exercise.timeBased) {
        exerciseSeconds += reps;
        holdSeconds += reps;
      } else {
        exerciseReps += reps;
        totalReps += reps;
        exerciseVolume += weight * reps;
        volume += weight * reps;
        exerciseMax = Math.max(exerciseMax, weight);
        maxWeight = Math.max(maxWeight, weight);
      }
    });

    exerciseDetails.push({
      name: `${exercise.ar} · ${exercise.en}`,
      sets: usedSets.length,
      reps: exerciseReps,
      seconds: exerciseSeconds,
      volume: exerciseVolume,
      maxWeight: exerciseMax,
      note: data.note || ""
    });
  });

  const completionPercent = plannedSets ? Math.min(100, Math.round(performedSets / plannedSets * 100)) : 0;
  return {
    plannedSets, performedSets, checkedSets, totalReps, holdSeconds, volume,
    maxWeight, exerciseCount, completionPercent, workout, exerciseDetails
  };
}

function dateStringsInRange(start, end) {
  const result = [];
  let cursor = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  while (cursor <= end) {
    result.push(isoDate(cursor));
    cursor = addDays(cursor, 1);
  }
  return result;
}

function sessionsInRange(start, end) {
  const startStr = isoDate(start);
  const endStr = isoDate(end);
  return Object.values(state.sessions)
    .filter(session => session.date >= startStr && session.date <= endStr && sessionHasData(session))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function bodySummary(start, end) {
  const startStr = isoDate(start);
  const endStr = isoDate(end);
  const items = [...state.body]
    .filter(item => item.date >= startStr && item.date <= endStr)
    .sort((a, b) => a.date.localeCompare(b.date));

  function summarizeField(field) {
    const values = items
      .filter(item => item[field] !== "" && item[field] !== null && item[field] !== undefined)
      .map(item => ({ date: item.date, value: Number(item[field]) }))
      .filter(item => !Number.isNaN(item.value));

    if (!values.length) return { latest: null, change: null, count: 0 };
    return {
      latest: values.at(-1).value,
      change: values.length > 1 ? values.at(-1).value - values[0].value : null,
      count: values.length
    };
  }

  return {
    weight: summarizeField("weight"),
    waist: summarizeField("waist"),
    items
  };
}

function summarizeRange(start, end) {
  const sessionList = sessionsInRange(start, end);
  const summaries = sessionList.map(session => ({ session, summary: summarizeSession(session) }));
  const dates = dateStringsInRange(start, end);
  const todayStr = isoDate();

  const plannedTrainingDates = dates.filter(dateStr => {
    if (dateStr > todayStr) return false;
    return getWorkoutForDate(dateStr)?.exercises.length;
  });

  const completedDates = new Set(sessionList.map(session => session.date));
  const trainingDays = completedDates.size;
  const plannedWorkouts = plannedTrainingDates.length;
  const plannedSets = plannedTrainingDates.reduce((sum, dateStr) => {
    const workout = getWorkoutForDate(dateStr);
    return sum + (workout?.exercises || []).reduce((n, exercise) => n + exercise.sets, 0);
  }, 0);

  const totals = summaries.reduce((acc, item) => {
    acc.performedSets += item.summary.performedSets;
    acc.totalReps += item.summary.totalReps;
    acc.holdSeconds += item.summary.holdSeconds;
    acc.volume += item.summary.volume;
    acc.exerciseCount += item.summary.exerciseCount;
    return acc;
  }, { performedSets: 0, totalReps: 0, holdSeconds: 0, volume: 0, exerciseCount: 0 });

  return {
    ...totals,
    trainingDays,
    plannedWorkouts,
    plannedSets,
    adherence: plannedWorkouts ? Math.min(100, Math.round(trainingDays / plannedWorkouts * 100)) : 0,
    setCompletion: plannedSets ? Math.min(100, Math.round(totals.performedSets / plannedSets * 100)) : 0,
    body: bodySummary(start, end),
    sessions: summaries,
    dates
  };
}

function signed(value, digits = 0, suffix = "") {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "غير متوفر";
  const number = Number(value);
  const sign = number > 0 ? "+" : "";
  return `${sign}${formatNumber(number, digits)}${suffix}`;
}

function metricHtml(value, label) {
  return `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`;
}

function progressHtml(title, percent, rightLabel) {
  return `
    <div class="card progress-card">
      <h3>${title}</h3>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.max(0, Math.min(100, percent))}%"></div></div>
      <div class="progress-label"><span>${formatNumber(percent)}%</span><span>${rightLabel}</span></div>
    </div>
  `;
}

function measurementHtml(body) {
  const weightChange = body.weight.change === null ? "يحتاج قياسين للمقارنة" : signed(body.weight.change, 1, " كغ");
  const waistChange = body.waist.change === null ? "يحتاج قياسين للمقارنة" : signed(body.waist.change, 1, " سم");
  return `
    <div class="card report-card">
      <h3>الوزن والخصر</h3>
      <div class="report-list">
        <div class="report-row"><strong>آخر وزن</strong><small>${body.weight.latest !== null ? `${formatNumber(body.weight.latest, 1)} كغ` : "لا يوجد قياس"}</small><span>${weightChange}</span></div>
        <div class="report-row"><strong>آخر خصر</strong><small>${body.waist.latest !== null ? `${formatNumber(body.waist.latest, 1)} سم` : "لا يوجد قياس"}</small><span>${waistChange}</span></div>
      </div>
    </div>
  `;
}

function previousSessionSameWorkout(session) {
  if (!session) return null;
  return Object.values(state.sessions)
    .filter(item => item.workoutKey === session.workoutKey && item.date < session.date && sessionHasData(item))
    .sort((a, b) => b.date.localeCompare(a.date))[0] || null;
}

function dailyReport(dateStr) {
  const date = parseLocalDate(dateStr);
  const workout = getWorkoutForDate(dateStr);
  const session = getSessionForDate(dateStr);
  const summary = summarizeSession(session);
  const body = bodySummary(date, date);
  const previousSession = previousSessionSameWorkout(session);
  const previous = previousSession ? summarizeSession(previousSession) : null;

  const workoutName = `${workout.arDay} — ${workout.title} · ${workout.enTitle}`;
  const status = workout.exercises.length
    ? (summary.performedSets ? `${summary.performedSets} من ${summary.plannedSets} جولة` : "لم تُسجل الحصة")
    : "يوم راحة";

  let details = "";
  if (summary.exerciseDetails.length) {
    details = `
      <div class="card report-card">
        <h3>تفاصيل التمارين</h3>
        ${summary.exerciseDetails.map(item => `
          <div class="exercise-report">
            <strong>${escapeHtml(item.name)}</strong>
            <span>${item.sets} جولات · ${item.seconds ? `${formatNumber(item.seconds)} ثانية تثبيت` : `${formatNumber(item.reps)} عدة`} · الحجم ${formatNumber(item.volume)}${item.note ? ` · ${escapeHtml(item.note)}` : ""}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  let comparison = "";
  if (previous) {
    const volumeDelta = summary.volume - previous.volume;
    const setsDelta = summary.performedSets - previous.performedSets;
    comparison = `
      <div class="card report-card">
        <h3>مقارنة بآخر حصة مماثلة</h3>
        <div class="report-list">
          <div class="report-row"><strong>التاريخ السابق</strong><small>${previousSession.date}</small><span>نفس نوع الحصة</span></div>
          <div class="report-row"><strong>الجولات</strong><small>${formatNumber(previous.performedSets)} سابقًا</small><span>${signed(setsDelta)}</span></div>
          <div class="report-row"><strong>حجم التدريب</strong><small>${formatNumber(previous.volume)} سابقًا</small><span>${signed(volumeDelta)}</span></div>
        </div>
      </div>
    `;
  }

  const html = `
    <div class="card report-heading">
      <h3>${workoutName}</h3>
      <p>${formatShortDate(date)} · ${status}</p>
    </div>
    <div class="metric-grid">
      ${metricHtml(formatNumber(summary.performedSets), "جولات منفذة")}
      ${metricHtml(formatNumber(summary.totalReps), "عدات مسجلة")}
      ${metricHtml(formatNumber(summary.volume), "حجم التدريب")}
      ${metricHtml(formatNumber(summary.exerciseCount), "تمارين منفذة")}
    </div>
    ${workout.exercises.length ? progressHtml("اكتمال الحصة", summary.completionPercent, `${summary.performedSets}/${summary.plannedSets} جولة`) : ""}
    ${measurementHtml(body)}
    ${details}
    ${comparison}
  `;

  const text = [
    `التقرير اليومي — ${dateStr}`,
    workoutName,
    `الحالة: ${status}`,
    `الجولات: ${summary.performedSets}/${summary.plannedSets}`,
    `العدات: ${summary.totalReps}`,
    `حجم التدريب: ${Math.round(summary.volume)}`,
    `الوزن: ${body.weight.latest ?? "غير مسجل"} كغ`,
    `الخصر: ${body.waist.latest ?? "غير مسجل"} سم`
  ].join("\n");

  return { html, text };
}

function statusForDate(dateStr) {
  const workout = getWorkoutForDate(dateStr);
  if (!workout.exercises.length) return { label: "راحة", className: "rest", detail: "يوم راحة" };
  const session = getSessionForDate(dateStr);
  const summary = summarizeSession(session);
  if (!summary.performedSets) return { label: "غير مسجل", className: "missed", detail: workout.title };
  if (summary.completionPercent >= 80) return { label: "مكتمل", className: "done", detail: `${summary.performedSets}/${summary.plannedSets} جولة` };
  return { label: "جزئي", className: "partial", detail: `${summary.performedSets}/${summary.plannedSets} جولة` };
}

function comparisonHtml(current, previous, label) {
  const workoutDelta = current.trainingDays - previous.trainingDays;
  const setsDelta = current.performedSets - previous.performedSets;
  const volumeDelta = current.volume - previous.volume;
  return `
    <div class="card report-card">
      <h3>مقارنة بـ${label}</h3>
      <div class="report-list">
        <div class="report-row"><strong>الحصص</strong><small>${formatNumber(previous.trainingDays)} في الفترة السابقة</small><span>${signed(workoutDelta)}</span></div>
        <div class="report-row"><strong>الجولات</strong><small>${formatNumber(previous.performedSets)} في الفترة السابقة</small><span>${signed(setsDelta)}</span></div>
        <div class="report-row"><strong>حجم التدريب</strong><small>${formatNumber(previous.volume)} في الفترة السابقة</small><span>${signed(volumeDelta)}</span></div>
      </div>
    </div>
  `;
}

function weeklyReport(selectedDateStr) {
  const selectedDate = parseLocalDate(selectedDateStr);
  const start = startOfSaturdayWeek(selectedDate);
  const end = endOfSaturdayWeek(selectedDate);
  const current = summarizeRange(start, end);
  const previousStart = addDays(start, -7);
  const previousEnd = addDays(end, -7);
  const previous = summarizeRange(previousStart, previousEnd);

  const dayRows = current.dates.map(dateStr => {
    const status = statusForDate(dateStr);
    const workout = getWorkoutForDate(dateStr);
    return `
      <div class="report-row">
        <strong>${workout.arDay}</strong>
        <small>${workout.title} · ${status.detail}</small>
        <span class="status ${status.className}">${status.label}</span>
      </div>
    `;
  }).join("");

  const html = `
    <div class="card report-heading">
      <h3>التقرير الأسبوعي</h3>
      <p>من ${formatShortDate(start)} إلى ${formatShortDate(end)}</p>
    </div>
    <div class="metric-grid">
      ${metricHtml(`${current.trainingDays}/${current.plannedWorkouts}`, "حصص منفذة")}
      ${metricHtml(formatNumber(current.performedSets), "جولات منفذة")}
      ${metricHtml(formatNumber(current.totalReps), "عدات مسجلة")}
      ${metricHtml(formatNumber(current.volume), "حجم التدريب")}
    </div>
    ${progressHtml("الالتزام بالحصص", current.adherence, `${current.trainingDays}/${current.plannedWorkouts} حصص`)}
    ${progressHtml("اكتمال الجولات", current.setCompletion, `${current.performedSets}/${current.plannedSets} جولة`)}
    ${measurementHtml(current.body)}
    <div class="card report-card">
      <h3>تفصيل أيام الأسبوع</h3>
      <div class="report-list">${dayRows}</div>
    </div>
    ${comparisonHtml(current, previous, "الأسبوع السابق")}
  `;

  const text = [
    `التقرير الأسبوعي: ${isoDate(start)} إلى ${isoDate(end)}`,
    `الحصص: ${current.trainingDays}/${current.plannedWorkouts}`,
    `الالتزام: ${current.adherence}%`,
    `الجولات: ${current.performedSets}/${current.plannedSets}`,
    `العدات: ${current.totalReps}`,
    `حجم التدريب: ${Math.round(current.volume)}`,
    `تغير الوزن: ${current.body.weight.change ?? "غير متوفر"} كغ`,
    `تغير الخصر: ${current.body.waist.change ?? "غير متوفر"} سم`
  ].join("\n");

  return { html, text };
}

function monthBounds(monthStr) {
  const [year, month] = monthStr.split("-").map(Number);
  const start = new Date(year, month - 1, 1);
  const naturalEnd = new Date(year, month, 0);
  const today = parseLocalDate(isoDate());
  const end = start <= today && naturalEnd >= today ? today : naturalEnd;
  return { start, end, naturalEnd };
}

function monthlyReport(monthStr) {
  const { start, end, naturalEnd } = monthBounds(monthStr);
  const current = summarizeRange(start, end);
  const previousStart = new Date(start.getFullYear(), start.getMonth() - 1, 1);
  const previousEnd = new Date(start.getFullYear(), start.getMonth(), 0);
  const previous = summarizeRange(previousStart, previousEnd);

  const weeks = [];
  let cursor = startOfSaturdayWeek(start);
  while (cursor <= end) {
    const weekEnd = addDays(cursor, 6);
    const clippedStart = cursor < start ? start : cursor;
    const clippedEnd = weekEnd > end ? end : weekEnd;
    const summary = summarizeRange(clippedStart, clippedEnd);
    weeks.push({ start: clippedStart, end: clippedEnd, summary });
    cursor = addDays(cursor, 7);
  }

  const weekRows = weeks.map((week, index) => `
    <div class="report-row">
      <strong>الأسبوع ${index + 1}</strong>
      <small>${formatShortDate(week.start)}–${formatShortDate(week.end)}</small>
      <span>${week.summary.trainingDays}/${week.summary.plannedWorkouts} حصص</span>
    </div>
  `).join("");

  const periodNote = end < naturalEnd ? "حتى تاريخ اليوم" : "الشهر كامل";
  const html = `
    <div class="card report-heading">
      <h3>التقرير الشهري</h3>
      <p>${new Intl.DateTimeFormat("ar-SA", { month: "long", year: "numeric" }).format(start)} · ${periodNote}</p>
    </div>
    <div class="metric-grid">
      ${metricHtml(`${current.trainingDays}/${current.plannedWorkouts}`, "حصص منفذة")}
      ${metricHtml(formatNumber(current.performedSets), "جولات منفذة")}
      ${metricHtml(formatNumber(current.totalReps), "عدات مسجلة")}
      ${metricHtml(formatNumber(current.volume), "حجم التدريب")}
    </div>
    ${progressHtml("الالتزام الشهري", current.adherence, `${current.trainingDays}/${current.plannedWorkouts} حصص`)}
    ${progressHtml("اكتمال الجولات", current.setCompletion, `${current.performedSets}/${current.plannedSets} جولة`)}
    ${measurementHtml(current.body)}
    <div class="card report-card">
      <h3>توزيع الحصص على الأسابيع</h3>
      <div class="report-list">${weekRows}</div>
    </div>
    ${comparisonHtml(current, previous, "الشهر السابق")}
  `;

  const text = [
    `التقرير الشهري — ${monthStr}`,
    `الحصص: ${current.trainingDays}/${current.plannedWorkouts}`,
    `الالتزام: ${current.adherence}%`,
    `الجولات: ${current.performedSets}/${current.plannedSets}`,
    `العدات: ${current.totalReps}`,
    `حجم التدريب: ${Math.round(current.volume)}`,
    `تغير الوزن: ${current.body.weight.change ?? "غير متوفر"} كغ`,
    `تغير الخصر: ${current.body.waist.change ?? "غير متوفر"} سم`
  ].join("\n");

  return { html, text };
}

function renderReports() {
  const input = document.getElementById("reportPeriodInput");
  const output = document.getElementById("reportOutput");
  if (!input || !output || !input.value) return;

  let report;
  if (reportMode === "weekly") report = weeklyReport(input.value);
  else if (reportMode === "monthly") report = monthlyReport(input.value);
  else report = dailyReport(input.value);

  output.innerHTML = report.html;
  lastReportText = report.text;
}

function setReportMode(mode) {
  reportMode = mode;
  document.querySelectorAll(".report-mode").forEach(button => {
    button.classList.toggle("active", button.dataset.reportMode === mode);
  });

  const input = document.getElementById("reportPeriodInput");
  const label = document.getElementById("reportPeriodLabel");

  if (mode === "monthly") {
    input.type = "month";
    input.value = isoDate().slice(0, 7);
    label.childNodes[0].nodeValue = "الشهر ";
  } else {
    input.type = "date";
    input.value = isoDate();
    label.childNodes[0].nodeValue = mode === "weekly" ? "اختر أي يوم من الأسبوع " : "التاريخ ";
  }

  renderReports();
}

async function copyReportText() {
  if (!lastReportText) return;
  try {
    await navigator.clipboard.writeText(lastReportText);
    const button = document.getElementById("copyReportBtn");
    const original = button.textContent;
    button.textContent = "تم النسخ";
    setTimeout(() => button.textContent = original, 1400);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = lastReportText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
}

function switchView(viewName) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === `view-${viewName}`));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view === viewName));
  if (viewName === "reports") renderReports();
  if (viewName === "history") renderHistory();
  if (viewName === "body") renderBody();
}

document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));

document.querySelectorAll(".report-mode").forEach(button => button.addEventListener("click", () => setReportMode(button.dataset.reportMode)));
document.getElementById("reportPeriodInput").value = isoDate();
document.getElementById("reportPeriodInput").addEventListener("change", renderReports);
document.getElementById("copyReportBtn").addEventListener("click", copyReportText);

document.getElementById("bodyDate").value = isoDate();
document.getElementById("bodyForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const date = document.getElementById("bodyDate").value;
  const weight = document.getElementById("bodyWeight").value;
  const waist = document.getElementById("bodyWaist").value;
  const note = document.getElementById("bodyNote").value.trim();
  if (!weight && !waist) {
    alert("أدخل الوزن أو محيط الخصر على الأقل.");
    return;
  }
  state.body = state.body.filter(i => i.date !== date);
  state.body.push({ date, weight, waist, note });
  saveState();
  event.target.reset();
  document.getElementById("bodyDate").value = isoDate();
  renderBody();
  alert("تم حفظ القياس.");
});

const darkToggle = document.getElementById("darkModeToggle");
darkToggle.checked = Boolean(state.settings.dark);
document.documentElement.classList.toggle("dark", Boolean(state.settings.dark));
darkToggle.addEventListener("change", () => {
  state.settings.dark = darkToggle.checked;
  document.documentElement.classList.toggle("dark", darkToggle.checked);
  saveState();
});

const timerSelect = document.getElementById("defaultTimer");
timerSelect.value = String(state.settings.defaultTimer || 90);
timerSelect.addEventListener("change", () => {
  state.settings.defaultTimer = Number(timerSelect.value);
  timerSeconds = state.settings.defaultTimer;
  timerRemaining = timerSeconds;
  updateTimerDisplay();
  saveState();
});

const timerDialog = document.getElementById("timerDialog");
const timerDisplay = document.getElementById("timerDisplay");

function updateTimerDisplay() {
  const mins = Math.floor(timerRemaining / 60).toString().padStart(2, "0");
  const secs = (timerRemaining % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${mins}:${secs}`;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function startTimer() {
  stopTimer();
  if (timerRemaining <= 0) timerRemaining = timerSeconds;
  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    updateTimerDisplay();
    if (timerRemaining <= 0) {
      stopTimer();
      navigator.vibrate?.([250, 120, 250]);
      timerDisplay.textContent = "انتهت الراحة";
    }
  }, 1000);
}

document.getElementById("startTimerBtn").addEventListener("click", () => {
  timerSeconds = Number(state.settings.defaultTimer || 90);
  timerRemaining = timerSeconds;
  updateTimerDisplay();
  timerDialog.showModal();
});

document.querySelectorAll(".timer-presets button").forEach(btn => btn.addEventListener("click", () => {
  timerSeconds = Number(btn.dataset.seconds);
  timerRemaining = timerSeconds;
  stopTimer();
  updateTimerDisplay();
}));

document.getElementById("timerStart").addEventListener("click", startTimer);
document.getElementById("timerReset").addEventListener("click", () => {
  stopTimer();
  timerRemaining = timerSeconds;
  updateTimerDisplay();
});
document.getElementById("timerClose").addEventListener("click", () => {
  stopTimer();
  timerDialog.close();
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mohamed-gym-backup-${isoDate()}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("importInput").addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!imported.sessions || !imported.settings) throw new Error("invalid");
    Object.assign(state, imported);
    saveState();
    location.reload();
  } catch {
    alert("ملف النسخة الاحتياطية غير صالح.");
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  if (!confirm("هل أنت متأكد من مسح كل التمارين والقياسات؟")) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.getElementById("installBtn").classList.remove("hidden");
});

document.getElementById("installBtn").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.getElementById("installBtn").classList.add("hidden");
});

window.addEventListener("appinstalled", () => {
  document.getElementById("installBtn").classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}

renderToday();
renderWeek();
renderHistory();
renderBody();
setReportMode("daily");
updateTimerDisplay();
