# خطوات رفع التطبيق إلى GitHub Pages

## 1. فك الضغط
فك ضغط ملف المشروع، ثم افتح مجلد `mohamed_gym_tracker`. الملفات التي يجب رفعها هي الملفات الموجودة داخل هذا المجلد، مثل:
`index.html` و`app.js` و`styles.css` و`manifest.webmanifest` و`service-worker.js` ومجلد `icons`.

## 2. إنشاء مستودع
من GitHub اختر **New repository**، واكتب اسمًا مثل:
`mohamed-gym-tracker`

يمكن اختيار Public لسهولة GitHub Pages. لا تضف ملفات تلقائية إذا كنت سترفع ملفات المشروع الجاهزة.

## 3. رفع الملفات
افتح المستودع ثم اختر:
**Add file > Upload files**

اسحب جميع محتويات مجلد المشروع إلى صفحة الرفع، ثم اضغط:
**Commit changes**

تأكد أن `index.html` موجود في الصفحة الرئيسية للمستودع، وليس داخل مجلد إضافي.

## 4. تفعيل GitHub Pages
من المستودع افتح:
**Settings > Pages**

ضمن **Build and deployment**:
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

ثم اضغط **Save**.

## 5. فتح التطبيق
بعد اكتمال النشر سيظهر رابط الموقع في صفحة Pages. افتحه من هاتفك.

## 6. تثبيت التطبيق
على Android/Chrome:
- افتح قائمة المتصفح
- اختر `Install app` أو `Add to Home screen`

على iPhone/Safari:
- اضغط زر المشاركة
- اختر `Add to Home Screen`

## تنبيه
البيانات محفوظة محليًا على نفس الجهاز والمتصفح. استخدم زر **تصدير نسخة احتياطية** من الإعدادات بشكل دوري.
