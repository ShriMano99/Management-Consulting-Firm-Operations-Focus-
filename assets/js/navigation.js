/* Independent navigation state: each page declares its active section. */
'use strict';
(() => {
 const nav=document.getElementById('navigation');if(!nav)return;
 const paint=()=>{
 const page=document.body.dataset.navPage;
 const faq=page==='services.html'&&location.hash==='#faqs';
 nav.querySelectorAll('a').forEach(a=>{const u=new URL(a.href,location.href);const file=u.pathname.split('/').pop();const active=file===page&&(faq?u.hash==='#faqs':!u.hash);a.classList.toggle('is-active',active);a.removeAttribute('aria-current');if(active)a.setAttribute('aria-current',faq?'location':'page');});
 const home=nav.querySelector('.home-toggle');const activeHome=page==='index.html'||page==='home-2.html';home.classList.toggle('is-active',activeHome);home.dataset.current=String(activeHome);
 };
 paint();window.addEventListener('hashchange',paint);window.addEventListener('pageshow',paint);
 document.querySelectorAll('a.btn,button.btn,.header-login').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.cta-selected').forEach(b=>b.classList.remove('cta-selected'));button.classList.add('cta-selected');}));
})();
