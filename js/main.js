// InsideChina - main.js
function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
document.addEventListener('click',function(e){var n=document.getElementById('navLinks'),t=document.querySelector('.mobile-toggle');if(n&&t&&n.classList.contains('open')){if(!n.contains(e.target)&&!t.contains(e.target)){n.classList.remove('open')}}}});
function handleNewsletter(e){e.preventDefault();var f=e.target,em=f.querySelector('input[type=email]').value,s=f.parentElement.querySelector('#formSuccess'),b=f.querySelector('button[type=submit]');if(b){b.textContent='Subscribing...';b.disabled=true}console.log('Newsletter signup:',em);setTimeout(function(){f.style.display='none';if(s)s.style.display='block'},800)}
function filterArticles(cat,btn){if(btn){document.querySelectorAll('.filter-btn').forEach(function(b){b.classList.remove('active')});btn.classList.add('active')}document.querySelectorAll('.article-card').forEach(function(c){c.style.display=(cat==='all'||(c.getAttribute('data-category')||'').includes(cat))?'':'none'})}
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(this.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}})});
(function(){var cur=(window.location.pathname.split('/').pop()||'index.html');document.querySelectorAll('.nav-links a').forEach(function(l){var h=l.getAttribute('href');if(h===cur||(cur===''&&h==='index.html')){l.classList.add('active')}})})();
console.log('InsideChina site loaded.');
