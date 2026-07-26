// Five-day schedule: Upper, Lower, Rest, Push, Pull, Legs, Rest.
(() => {
  const FIVE_DAY_SCHEDULE = [
    {
      key: "saturday-upper-a",
      dayIndex: 6,
      arDay: "السبت",
      title: "علوي",
      enTitle: "Upper",
      exercises: [
        { id: "machine-chest-press", ar: "ضغط الصدر على الجهاز", en: "Machine Chest Press", sets: 3, reps: "8–12" },
        { id: "lat-pulldown", ar: "السحب العلوي", en: "Lat Pulldown", sets: 3, reps: "8–12", hint: "قبضة مريحة للكتف" },
        { id: "seated-row", ar: "التجديف جالسًا", en: "Seated Row", sets: 3, reps: "8–12" },
        { id: "incline-chest-press", ar: "ضغط الصدر العلوي على الجهاز", en: "Incline Machine Chest Press", sets: 2, reps: "8–12" },
        { id: "machine-lateral-raise-a", ar: "الرفرفة الجانبية على الجهاز", en: "Machine Lateral Raise", sets: 2, reps: "12–15" },
        { id: "machine-triceps-a", ar: "تمرين الترايسبس على الجهاز", en: "Machine Triceps Extension", sets: 2, reps: "10–15" },
        { id: "machine-biceps-a", ar: "تمرين البايسبس على الجهاز", en: "Machine Biceps Curl", sets: 2, reps: "10–15" },
        { id: "face-pull-upper", ar: "سحب الوجه بالكيبل", en: "Cable Face Pull", sets: 2, reps: "12–15" }
      ]
    },
    {
      key: "sunday-lower-a",
      dayIndex: 0,
      arDay: "الأحد",
      title: "سفلي",
      enTitle: "Lower",
      exercises: [
        { id: "leg-press-a", ar: "ضغط الرجلين", en: "Leg Press", sets: 3, reps: "8–12" },
        { id: "goblet-squat", ar: "سكوات بالدامبل", en: "Dumbbell Goblet Squat", sets: 3, reps: "8–12" },
        { id: "leg-curl-a", ar: "ثني الرجلين للخلف", en: "Leg Curl", sets: 3, reps: "10–15" },
        { id: "leg-extension-a", ar: "مد الرجلين للأمام", en: "Leg Extension", sets: 2, reps: "12–15" },
        { id: "glute-drive-a", ar: "دفع الحوض على الجهاز", en: "Machine Glute Drive", sets: 2, reps: "10–15" },
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
      key: "tuesday-push",
      dayIndex: 2,
      arDay: "الثلاثاء",
      title: "دفع",
      enTitle: "Push",
      exercises: [
        { id: "push-flat-chest", ar: "ضغط صدر مستوي على الجهاز", en: "Machine Flat Chest Press", sets: 3, reps: "8–12" },
        { id: "push-incline-chest", ar: "ضغط صدر علوي على الجهاز", en: "Machine Incline Chest Press", sets: 3, reps: "8–12" },
        { id: "push-pec-deck", ar: "فراشة تفتيح الصدر", en: "Pec Deck Fly", sets: 2, reps: "12–15" },
        { id: "push-shoulder-press", ar: "ضغط الكتف على الجهاز", en: "Machine Shoulder Press", sets: 2, reps: "8–12", hint: "مدى مريح للكتف" },
        { id: "push-lateral-raise", ar: "الرفرفة الجانبية على الجهاز", en: "Machine Lateral Raise", sets: 3, reps: "12–15" },
        { id: "push-triceps", ar: "تمرين الترايسبس على الجهاز", en: "Machine Triceps Extension", sets: 3, reps: "10–15" }
      ]
    },
    {
      key: "wednesday-pull",
      dayIndex: 3,
      arDay: "الأربعاء",
      title: "سحب",
      enTitle: "Pull",
      exercises: [
        { id: "pull-lat-pulldown", ar: "السحب العلوي", en: "Lat Pulldown", sets: 3, reps: "8–12" },
        { id: "pull-chest-supported-row", ar: "تجديف على كرسي بمسند للصدر", en: "Chest-Supported Row", sets: 3, reps: "8–12" },
        { id: "pull-seated-cable-row", ar: "سحب كيبل أمامي جالس", en: "Seated Cable Row", sets: 3, reps: "8–12" },
        { id: "pull-reverse-pec-deck", ar: "فراشة عكسية للكتف الخلفي", en: "Reverse Pec Deck", sets: 2, reps: "12–15" },
        { id: "pull-face-pull", ar: "سحب الوجه بالكيبل", en: "Cable Face Pull", sets: 2, reps: "12–15" },
        { id: "pull-biceps", ar: "تمرين البايسبس على الجهاز", en: "Machine Biceps Curl", sets: 3, reps: "10–15" }
      ]
    },
    {
      key: "thursday-legs",
      dayIndex: 4,
      arDay: "الخميس",
      title: "رجلين",
      enTitle: "Legs",
      exercises: [
        { id: "legs-leg-extension", ar: "رفرفة الرجلين للأعلى", en: "Leg Extension", sets: 3, reps: "10–15" },
        { id: "legs-leg-curl", ar: "ضغط الرجلين للأسفل", en: "Leg Curl", sets: 3, reps: "10–15" },
        { id: "legs-leg-press", ar: "ضغط الرجلين", en: "Leg Press", sets: 3, reps: "8–12" },
        { id: "legs-goblet-squat", ar: "سكوات بالدامبل", en: "Dumbbell Goblet Squat", sets: 3, reps: "8–12" },
        { id: "legs-back-extension", ar: "تمديد أسفل الظهر على الجهاز", en: "Machine Back Extension", sets: 2, reps: "12–15", hint: "مدى مريح فقط" },
        { id: "legs-calf-raise", ar: "تمرين بطات الرجل", en: "Calf Raise Machine", sets: 3, reps: "12–20", hint: "نفّذه فقط بدون ألم" },
        { id: "legs-adductor", ar: "ضم الفخذ الداخلي على الجهاز", en: "Hip Adductor Machine", sets: 2, reps: "12–15" },
        { id: "legs-abductor", ar: "فتح الفخذ الجانبي على الجهاز", en: "Hip Abductor Machine", sets: 2, reps: "12–20" }
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

  SCHEDULE.splice(0, SCHEDULE.length, ...FIVE_DAY_SCHEDULE);

  // Re-render the base app before optional enhancement scripts wrap the renderers.
  renderToday();
  renderWeek();
  renderHistory();
  renderReports();
})();
