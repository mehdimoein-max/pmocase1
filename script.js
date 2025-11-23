// Initial Data Source
const defaultData = {
    intro: `شرکت سیمرغ صنعت یک سازمان تولیدی با ساختار ماتریسی ضعیف (Weak Matrix) است.
واحدهای اصلی شامل: تولید، برنامه‌ریزی، تدارکات، مهندسی، کنترل کیفیت، IT، مالی، منابع انسانی، فروش و PMO هستند.
در حال حاضر ۱۵ پروژه فعال در شرکت وجود دارد که شامل پروژه‌های توسعه محصول، بهبود فرآیند، نصب تجهیزات و پروژه‌های نرم‌افزاری است.
با توجه به رشد تعداد پروژه‌ها، مدیران احساس کرده‌اند هماهنگی بین واحدها و روش‌های برنامه‌ریزی یکپارچه نیست و لازم است چارچوب بومی مدیریت پروژه تعریف شود.`,

    dialogue: [
        { speaker: "احمدی (مدیر پروژه)", text: "بسیار خب دوستان، هدف جلسه امروز اینه که درباره روش مناسب برنامه‌ریزی پروژه‌هامون به توافق برسیم. الان هر پروژه یه جور جلو می‌ره و این باعث شده هماهنگی بین واحدها سخت بشه. نظرتون چیه؟" },
        { speaker: "رضایی (مدیر برنامه‌ریزی تولید)", text: "به‌نظر من هر پروژه باید از ابتدا ساختار خاص خودش رو داشته باشه. پروژه‌ها با هم فرق دارن، پس نمی‌شه یه قالب مشترک برای همه پیدا کرد. باید تیم و برنامه مخصوص خودشون رو داشته باشن. اخه پروژه ها همانطور که تو پمباک گفته یونیک هستند." },
        { speaker: "موسوی (کارشناس ارشد PMO)", text: "من مخالف نیستم، ولی اگه این‌طوری پیش بریم، توی سازمان ماتریسی عملاً هر پروژه تبدیل به جزیره جدا می‌شه. من می‌گم بیایم پروژه‌ها رو دسته‌بندی کنیم؛ مثلاً پروژه‌های توسعه محصول یه گروه باشن، پروژه‌های بهبود فرایند یه گروه دیگه. برای هر گروه یه الگوی برنامه‌ریزی مشابه طراحی کنیم. این‌جوری هم استاندارد داریم، هم انعطاف." },
        { speaker: "کریمی (مدیر اجرایی)", text: "ببینید، من از زاویه عملیات نگاه می‌کنم. ما باید از روش‌های اجرایی داخل سازمان استفاده کنیم. اگه یه متد بیرونی مثل PMBOK یا PRINCE2 بیاریم ولی با فرایند تولید ما نخونه، فقط کاغذبازی زیاد می‌شه. بهتره از تجربه‌های خودمون در اجرای پروژه‌ها استفاده کنیم و روش کار خودمون رو مستند کنیم." },
        { speaker: "احمدی", text: "درسته، اما تجربه داخلی به‌تنهایی کافی نیست. ما باید بتونیم با زبان بین‌المللی برنامه‌ریزی کنیم تا وقتی پروژه مشترک یا صادراتی داریم، سردرگم نشیم." },
        { speaker: "موسوی", text: "یه نکته دیگه هم هست؛ ما اگه همه چیز رو از صفر برای هر پروژه طراحی کنیم، ظرفیت تیم برنامه‌ریزی جواب نمی‌ده. یه چارچوب پایه لازمه." },
        { speaker: "رضایی", text: "خب این حرف یعنی استانداردسازی، درسته؟ ولی اگه زیادی استاندارد کنیم، خلاقیت تیم‌ها از بین میره." },
        { speaker: "کریمی", text: "خلاقیت خوبه، اما ما باید خروجی بدیم، نه شعر بگیم فقط. من بیشتر با دید اجرایی موافقم که از روش‌های داخلی استفاده بشه." },
        { speaker: "موسوی", text: "یه پیشنهاد دارم. چرا فکر نکنیم به ترکیب روش‌ها؟ مثلاً چارچوب کلی استاندارد باشه، ولی در اجرا از متدهای درون‌سازمانی استفاده کنیم." },
        { speaker: "احمدی", text: "جالبه، من میگم که باید کاملاً چابک بشیم. یعنی ساختار و برنامه رو تا این حد هم قفل نکنیم." },
        { speaker: "رضایی", text: "آها، همون موج جدید 'باید اجایل بشیم'! (همه می‌خندند) سوسول بازی راه بندازیم فقط ولی واقعاً اجایل به درد پروژه‌های تولیدی ما می‌خوره؟ وقتی خط تولید و زمان‌بندی مواد اولیه داریم؟" },
        { speaker: "موسوی", text: "می‌شه اجایل رو تطبیق داد. مثلاً در بخش طراحی یا نمونه‌سازی از اسپرینت های کوتاه تری استفاده کنیم، ولی تولید رو همچنان برنامه‌محور نگه داریم." }
    ],

    summary: `موضوع جلسه: انتخاب رویکرد مناسب برای برنامه‌ریزی و اجرای پروژه‌ها
نتیجه کلی: اختلاف دیدگاه‌ها نشان داد که سازمان در مرحله‌ای است که برای تعریف مدل بومی مدیریت پروژه و هماهنگی بین نقش‌ها، نیاز به حضور یک تیم مشاور تخصصی در حوزه PMO و مدیریت پروژه دارد تا ساختار، فرآیند و روش کار را به‌صورت نظام‌مند طراحی کند.`,

    questions: [
        { id: 1, title: "تعریف برنامه‌ریزی پروژه", text: "تعریف برنامه‌ریزی پروژه در سازمان ما چیست؟ آیا منظور فقط زمان‌بندی است؟ یا شامل محدوده، منابع، ریسک، هزینه و کنترل تغییرات هم می‌شود؟" },
        { id: 2, title: "تفکیک نقش‌ها", text: "تفکیک نقش‌ها چگونه باید باشد؟ مرز وظایف مدیر پروژه‌ها با مدیران عملیات و دفتر مدیریت پروژه (PMO) چیست؟" },
        { id: 3, title: "رویکرد تیلورینگ (Tailoring)", text: "رویکرد تیلورینگ چطور انجام می‌شود؟ چگونه استانداردها را با شرایط خاص پروژه‌ها و ساختار ماتریسی تطبیق دهیم؟" },
        { id: 4, title: "انتخاب استاندارد مرجع", text: "کدام استاندارد مرجع انتخاب شود؟ (PMBOK, PRINCE2, یا مدل‌های ترکیبی)" },
        { id: 5, title: "جایگاه متدهای چابک (Agile)", text: "جایگاه متدهای چابک یا ترکیبی چیست؟ در کدام بخش‌ها می‌توان از Agile استفاده کرد؟" }
    ]
};

const app = {
    data: null,
    userAnswers: {},

    init: function () {
        // Load data from LocalStorage or use default
        const storedData = localStorage.getItem('simorghData');
        if (storedData) {
            this.data = JSON.parse(storedData);
        } else {
            this.data = defaultData;
            this.saveData();
        }

        // Load user answers
        const storedAnswers = localStorage.getItem('simorghAnswers');
        if (storedAnswers) {
            this.userAnswers = JSON.parse(storedAnswers);
        }

        // Render everything if elements exist
        if (document.getElementById('intro-content')) {
            this.renderHome();
        }

        if (document.getElementById('questions-container')) {
            this.renderQuestions();
        }

        if (document.getElementById('admin-pass')) {
            // Admin page logic
        }
    },

    saveData: function () {
        localStorage.setItem('simorghData', JSON.stringify(this.data));
    },

    saveAnswers: function () {
        localStorage.setItem('simorghAnswers', JSON.stringify(this.userAnswers));
    },

    renderHome: function () {
        const introEl = document.getElementById('intro-content');
        if (introEl) introEl.innerText = this.data.intro;

        const summaryEl = document.getElementById('summary-content');
        if (summaryEl) summaryEl.innerText = this.data.summary;

        const chatContainer = document.getElementById('dialogue-container');
        if (chatContainer) {
            chatContainer.innerHTML = '';
            this.data.dialogue.forEach((msg, index) => {
                const bubble = document.createElement('div');
                const side = index % 2 === 0 ? 'right' : 'left';
                bubble.className = `chat-bubble ${side}`;
                bubble.innerHTML = `<span class="speaker-name">${msg.speaker}</span>${msg.text}`;
                chatContainer.appendChild(bubble);
            });
        }
    },

    renderQuestions: function () {
        const container = document.getElementById('questions-container');
        if (!container) return;

        container.innerHTML = '';

        this.data.questions.forEach(q => {
            const item = document.createElement('div');
            item.className = 'question-item';

            const savedAnswer = this.userAnswers[q.id] || '';

            item.innerHTML = `
                <h3>${q.id}. ${q.title}</h3>
                <p>${q.text}</p>
                <textarea 
                    placeholder="پاسخ خود را اینجا بنویسید..." 
                    oninput="app.updateAnswer(${q.id}, this.value)"
                >${savedAnswer}</textarea>
            `;
            container.appendChild(item);
        });
    },

    updateAnswer: function (id, value) {
        this.userAnswers[id] = value;
        this.saveAnswers();
    },

    // Admin Logic
    login: function () {
        const pass = document.getElementById('admin-pass').value;
        if (pass === 'admin') {
            document.getElementById('login-panel').classList.add('hidden');
            document.getElementById('admin-panel').classList.remove('hidden');
            this.loadAdminData();
        } else {
            alert('رمز عبور اشتباه است');
        }
    },

    logout: function () {
        // Reload to reset state
        window.location.reload();
    },

    loadAdminData: function () {
        const intro = document.getElementById('edit-intro');
        if (intro) intro.value = this.data.intro;

        const summary = document.getElementById('edit-summary');
        if (summary) summary.value = this.data.summary;

        const questions = document.getElementById('edit-questions');
        if (questions) questions.value = JSON.stringify(this.data.questions, null, 2);
    },

    saveContent: function () {
        try {
            this.data.intro = document.getElementById('edit-intro').value;
            this.data.summary = document.getElementById('edit-summary').value;
            this.data.questions = JSON.parse(document.getElementById('edit-questions').value);

            this.saveData();
            alert('تغییرات با موفقیت ذخیره شد');
        } catch (e) {
            alert('خطا در فرمت JSON سوالات: ' + e.message);
        }
    },

    parseDocx: function (input) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const arrayBuffer = event.target.result;
            mammoth.extractRawText({ arrayBuffer: arrayBuffer })
                .then(function (result) {
                    document.getElementById('docx-output').value = result.value;
                })
                .catch(function (err) {
                    console.log(err);
                    alert('خطا در خواندن فایل');
                });
        };
        reader.readAsArrayBuffer(file);
    },

    exportAnswers: function (type) {
        const element = document.getElementById('questions-section');
        const btns = element.querySelector('.actions');

        // Hide buttons temporarily
        if (btns) btns.style.display = 'none';

        if (type === 'pdf') {
            if (typeof html2pdf === 'undefined') {
                alert('کتابخانه PDF بارگذاری نشده است.');
                if (btns) btns.style.display = 'flex';
                return;
            }

            const opt = {
                margin: [10, 10, 10, 10],
                filename: 'simorgh-analysis.pdf',
                image: { type: 'jpeg', quality: 0.95 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(element).save()
                .then(() => {
                    if (btns) btns.style.display = 'flex';
                })
                .catch(err => {
                    console.error(err);
                    alert('خطا در PDF: ' + err.message);
                    if (btns) btns.style.display = 'flex';
                });

        } else if (type === 'image') {
            if (typeof html2canvas === 'undefined') {
                alert('کتابخانه تصویر بارگذاری نشده است.');
                if (btns) btns.style.display = 'flex';
                return;
            }

            html2canvas(element, { scale: 2, useCORS: true }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'simorgh-analysis.jpg';
                link.href = canvas.toDataURL('image/jpeg', 0.9);
                link.click();
                if (btns) btns.style.display = 'flex';
            }).catch(err => {
                console.error(err);
                alert('خطا در ذخیره تصویر: ' + err.message);
                if (btns) btns.style.display = 'flex';
            });
        }
    }
};

// Expose app to global scope
window.app = app;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
