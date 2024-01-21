const menu = document.getElementById('menu');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// function toggleAnswer(answerId) {
//     let answer = document.getElementById('answerId');
//     if (answer.style.display === 'none') {
//         answer.style.display = 'block';
//     } else {
//         answer.style.display = 'none';
//     }
// }


const goalAmount = 100000;
        const amountRaised = 70000;
        const progress = (amountRaised / goalAmount) * 100;
        document.getElementById('progress').style.width = progress + '%';






