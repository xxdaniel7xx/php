//Variables

let inpInd = 0;
let numInp = document.getElementById('numInp');
let inpBtn = document.getElementById('inpBtn');
let orderNumField = document.getElementById('orderNumField')
let minValue = 0;
let maxValue = 0;
let orderNum = 0;
let answerField = document.getElementById('answerField');
let answerNumber = 0;

let gameRun = true;

document.getElementById('btnForm').style.display = 'none';

//Input min value function

function min_value() {

    if (numInp.value == 0) {
        minValue = 0;
    } else {
        minValue = numInp.value * 1  < -999 ? -999: numInp.value * 1;
        minValue = numInp.value * 1  > 999 ? 999: numInp.value * 1;
        numInp.value = null;
    }


}

//Input max value function

function max_value() {

    if (numInp.value == 0) {
        maxValue = 100;
    } else {
        maxValue = numInp.value * 1  < -999 ? -999: numInp.value * 1;
        maxValue = numInp.value * 1  > 999 ? 999: numInp.value * 1;
        numInp.value = null;
    }
}

//game start function

function game_start() {
    document.getElementById('inputForm').style.display = 'none';
    document.getElementById('btnForm').style.display = 'flex';
    answerNumber  = Math.round((minValue + maxValue) / 2);
    answer_phrase();

}

//Input one button function - to initiate input of numbers by only one button and one input window

inpBtn.addEventListener('click', function one_button() {
    if (inpInd == 0) {
        min_value();
        inpInd++;
        answerField.innerText = 'Введите число ДО которого я буду угадывать.';
        numInp.placeholder = '100'

    } else if (inpInd == 1) {
        max_value();
        game_start();
        inpInd--;
    }
})

//answer number function

function answer_number() {
    let units = [];
    units.push("ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять",
        "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать");
    let dozens = [];
    dozens.push("двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто");

    let hundreds = [];
    hundreds.push("сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот");

    let textConstruct = [];
    let check = false;

    if (answerNumber < 0) {
        textConstruct.push('минус');
    }

    //I tried to find more beautiful solution instead of this, but I am still noob. Sorry.

    units.forEach((value, index) => {
        if (index == answerNumber){
            check = true;
        }})

    if (check == true){
        textConstruct.push(units[answerNumber]);
    } else if (Math.abs(answerNumber)/10 < 10 && Math.abs(answerNumber)/10 > 1.9) {
        textConstruct.push(dozens[Math.floor(Math.abs(answerNumber)/10)-2]);
        if (Math.abs(answerNumber)%10 > 0) {
            textConstruct.push(units[Math.abs(answerNumber)%10]);
        }
    } else if (Math.abs(answerNumber)/100 < 10 && Math.abs(answerNumber)/10 > 0.99){
        textConstruct.push(hundreds[Math.floor(Math.abs(answerNumber)/100)-1]);
        let remain = Math.abs(answerNumber)%100;
        if (remain/10 < 10 && remain/10 > 1.9) {
            textConstruct.push(dozens[Math.floor(remain / 10) - 2]);
            if (remain % 10 > 0) {
                textConstruct.push(units[remain % 10]);
            }
        }
    }

    textConstruct = textConstruct.join(' ');
    console.log(textConstruct);
    if (textConstruct.length < 20) {
        answerNumber = textConstruct;
    }

}

//Supply functions - this functions are to reduce amount of similar code.

function fail_phrase() {
    const phraseRandom = Math.round( Math.random());
    let answerPhrase = (phraseRandom === 1) ?
        `Вы загадали неправильное число!\n\u{1F914}` :
        `Я сдаюсь..\n\u{1F92F}`;

    answerField.innerText = answerPhrase;
    gameRun = false;
}

function answer_phrase() {
    orderNum++;
    orderNumField.innerText = orderNum;
    const answerPhraseRandom = Math.round(Math.random() * 2);
    let answerPhrase = [];
    answerPhrase.push('Готов поспорить Вы загадили число ', 'Может быть это число ', 'Уверен, что это число ')
    answer_number()
    answerPhrase.forEach((value) => {
        answerField.innerText = `${answerPhrase[answerPhraseRandom]} ${answerNumber}?`;
    })
    answerNumber = Math.round((minValue + maxValue) / 2);
}

//button Over

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || Math.abs(maxValue-minValue)== 1){
            fail_phrase();

        } else {
            minValue = answerNumber  + 1;
            answerNumber = Math.round((minValue + maxValue) / 2);
            answer_phrase();
        }
    }
})

//button under

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            fail_phrase();

        } else {
            maxValue = answerNumber  - 1;
            answerNumber = Math.round((minValue + maxValue) / 2);
            answer_phrase();
        }
    }
})

//button equal

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerPhraseRandom = Math.round(Math.random() * 2);
        let answerPhrase = [];
        answerPhrase.push(`Так и знал\n\u{1F973}`, `Я всегда угадываю\n\u{1F60E}`, `Ха! Кто молодец?! Я молодец!\n\u{1F9D0}`);
        answerPhrase.forEach((value) => {
            answerField.innerText = `${answerPhrase[answerPhraseRandom]}`;
        })
        gameRun = false;
    }
})

//button retry

document.getElementById('btnRetry').addEventListener('click', function() {
    document.getElementById('btnForm').style.display = 'none'
    document.getElementById('inputForm').style.display = 'flex'
    answerField.innerText = 'Введите число ОТ которого я буду угадывать.';
    answerNumber = 0;
    orderNum = 0;
    orderNumField.innerText = '';
    gameRun = true;
    minValue = 0;
    maxValue = 0;
    numInp.placeholder = '0'
})



