// Form submission
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('.form__btn');
        
        // Phone validation
        const phone = form.querySelector('#phone');
        if (phone && !/^1[3-9]\d{9}$/.test(phone.value)) {
            alert('请输入正确的11位手机号码');
            phone.focus();
            return;
        }
        
        btn.textContent = '提交中...';
        btn.disabled = true;
        
        try {
            const fd = new FormData(form);
            const r = await fetch('/submit', {method:'POST', body:fd});
            const d = await r.json();
            if (d.success) {
                alert('预约提交成功！我们将尽快联系您！');
                form.reset();
            } else {
                throw (d.error || '提交失败');
            }
        } catch(err) {
            alert('感谢您的预约！\n\n也可直接联系我们：193 1539 3167\n我们将在24小时内联系您。');
        }
        
        btn.textContent = '提交预约';
        btn.disabled = false;
    });
}

// Mobile nav
const ham = document.querySelector('.nav__hamburger');
if (ham) {
    ham.addEventListener('click', () => {
        document.querySelector('.nav__links').classList.toggle('nav__links--open');
    });
}

// Smooth anchor
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) t.scrollIntoView({behavior:'smooth', block:'start'});
    });
});
