// 1. Падающий код Матрицы
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍﾗﾄﾏｹﾓｴｶｷﾑﾕﾗｾﾈｽﾀ';
const alphabet = letters.split('');

const fontSize = 14;
let columns = canvas.width / fontSize;

const rainDrops = [];
for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff33';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 30);


// 2. Логика переключения страниц
function switchPage(pageId) {
    // Скрываем все страницы
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    // Снимаем активный класс со всех кнопок
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Показываем нужную страницу и делаем кнопку активной
    document.getElementById(`page-${pageId}`).classList.add('active');
    
    // Ищем кнопку, которая вызвала функцию, и подсвечиваем её
    const eventTarget = window.event.target;
    if(eventTarget) {
        eventTarget.classList.add('active');
    }
}
