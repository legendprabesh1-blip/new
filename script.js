// Page Navigation
function nextPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + num).classList.add('active');
    
    if(num === 2) startTypewriter();
}

// Sparkle Effect on Touch/Click
document.addEventListener('click', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.transition = '2s';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.style.transform = 'translateY(-100px) scale(0)';
        sparkle.style.opacity = '0';
    }, 50);
    setTimeout(() => sparkle.remove(), 2000);
});

// Love Calculator Logic
function calculateLove() {
    const fill = document.getElementById('meter-fill');
    const display = document.getElementById('percent-display');
    const btn = document.getElementById('final-link');
    
    let percent = 0;
    fill.style.width = '100%';
    
    const interval = setInterval(() => {
        percent += 1;
        display.innerText = percent + '%';
        if (percent >= 100) {
            clearInterval(interval);
            display.innerText = "999,999% (Infinite!)";
            btn.style.display = 'block';
        }
    }, 20);
}

// Typewriter
const text = "They say home is a place, but for me, home is a person. It's the way you laugh, the way you listen, and the way you make everything better just by being there...";
let i = 0;
function startTypewriter() {
    const el = document.getElementById('typewriter');
    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(startTypewriter, 50);
    }
}

// Floating hearts generator
setInterval(() => {
    const heart = document.createElement('div');
    heart.innerHTML = '🌸';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-5vh';
    heart.style.opacity = '0.6';
    heart.style.transition = '6s linear';
    heart.style.zIndex = '0';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
    }, 100);
    setTimeout(() => heart.remove(), 7000);
}, 500);