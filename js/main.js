// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('is-visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// Form
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('.form-btn');
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
            const r = await fetch('https://formspree.io/f/xaqajybe', {method:'POST', body:fd, headers:{'Accept':'application/json'}});
            if (r.ok) {
                alert('预约提交成功！我们将尽快联系您！');
                form.reset();
            } else throw 1;
        } catch {
            alert('感谢您的预约！\n\n也可直接联系我们：193 1539 3167');
        }
        btn.textContent = '提交预约';
        btn.disabled = false;
    });
}

// Mobile nav
const ham = document.querySelector('.nav__hamburger');
if (ham) {
    ham.addEventListener('click', () => {
        const links = document.querySelector('.nav__links');
        links.classList.toggle('nav__links--open');
    });
}

// Smooth anchor
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) t.scrollIntoView({behavior:'smooth', block:'start'});
        const links = document.querySelector('.nav__links');
        if (links) links.classList.remove('nav__links--open');
    });
});
