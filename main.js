//問題1
const sampleBase = document.querySelector('label');
const sampleButton1 = document.querySelector('#change-text1');
const sampleButton2 = document.querySelector('#change-text2');
const sampleButton3 = document.querySelector('#change-text3');

sampleButton1.addEventListener('click',event => {
    sampleBase.textContent = 'リンゴ'
})

sampleButton2.addEventListener('click',event => {
    sampleBase.textContent = 'バナナ'
})

sampleButton3.addEventListener('click',event => {
    sampleBase.textContent = 'みかん'
})

//問題2
const btnFirst = document.querySelector('#btn-first');
const btnSecond = document.querySelector('#btn-second');
const btnThird = document.querySelector('#btn-third');

btnFirst.addEventListener('click',event => {
    btnFirst.classList.remove('btn-color-default');
    btnFirst.classList.add('btn-color-active');

    btnSecond.classList.add('btn-color-default');
    btnSecond.classList.remove('btn-color-active');

    btnThird.classList.add('btn-color-default');
    btnThird.classList.remove('btn-color-active');
})


btnSecond.addEventListener('click',event => {
    btnFirst.classList.add('btn-color-default');
    btnFirst.classList.remove('btn-color-active');   

    btnSecond.classList.remove('btn-color-default');
    btnSecond.classList.add('btn-color-active');

    btnThird.classList.add('btn-color-default');
    btnThird.classList.remove('btn-color-active');
})

btnThird.addEventListener('click',event => {
    btnFirst.classList.add('btn-color-default');
    btnFirst.classList.remove('btn-color-active');   

    btnSecond.classList.add('btn-color-default');
    btnSecond.classList.remove('btn-color-active');

    btnThird.classList.remove('btn-color-default');
    btnThird.classList.add('btn-color-active');
})