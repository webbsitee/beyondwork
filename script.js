(()=>{'use strict';const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#primary-nav');if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('is-open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('is-open')}))}const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const counters=document.querySelectorAll('.count');if(!reduce&&'IntersectionObserver'in window){let started=false;const observer=new IntersectionObserver(entries=>{if(started||!entries.some(e=>e.isIntersecting))return;started=true;observer.disconnect();const start=performance.now(),duration=950;function frame(now){const t=Math.min((now-start)/duration,1),ease=1-Math.pow(1-t,3);counters.forEach(el=>{el.textContent=String(Math.round(Number(el.dataset.target)*ease))});if(t<1)requestAnimationFrame(frame)}requestAnimationFrame(frame)},{threshold:.3});observer.observe(document.querySelector('.demo'))}})();// Typewriter animation for the reply quote
(() => {
    const quote = document.querySelector('.quote.typewriter');

    if (!quote) return;

    const text = quote.dataset.text;
    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    let started = false;

    function startTyping() {
        if (started) return;
        started = true;

        quote.classList.add('is-visible');

        if (reduceMotion) {
            quote.textContent = text;
            return;
        }

        quote.classList.add('is-typing');

        let index = 0;

        function typeNext() {
            if (index < text.length) {
                quote.textContent += text.charAt(index);
                index++;

                setTimeout(typeNext, 40);
            } else {
                quote.classList.remove('is-typing');
            }
        }

        // Wait for the previous steps to finish
        setTimeout(typeNext, 1900);
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                startTyping();
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        observer.observe(quote);
    } else {
        startTyping();
    }
})();
