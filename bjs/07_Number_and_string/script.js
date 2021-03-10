let lastOperand = 0;
let operation = null;
let result = 0
let historyArr = [];
const resultWindow = document.getElementById('resultWindow')
let inputWindow = document.getElementById('inputWindow');

//Clear button

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
    resultWindow.value = '';
})

//1 button

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

//2 button

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

//3 button

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

//4 button

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

//5 button

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

//6 button

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})

//7 button

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})

//8 button

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

//9 button

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})

//0 button

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

//Sum button

document.getElementById('btn_sum').addEventListener('click', function () {
    inputWindow.value += '+';
})

//Minus button

document.getElementById('btn_diff').addEventListener('click', function () {
    inputWindow.value += '-';
})

//Multiply button

document.getElementById('btn_multi').addEventListener('click', function () {
    inputWindow.value += '*';
})

//Division button

document.getElementById('btn_div').addEventListener('click', function () {
    inputWindow.value += '/';
})

//Exponentiation button

document.getElementById('btn_exp').addEventListener('click', function () {
    inputWindow.value += '^';
})

//Sqrt button

document.getElementById('btn_sqrt').addEventListener('click', function () {
    inputWindow.value += '\u221A' + '(';
})

//Left bracket button

document.getElementById('btn_l-br').addEventListener('click', function () {
    inputWindow.value += '(';
})

//Right bracket button

document.getElementById('btn_r-br').addEventListener('click', function () {
    inputWindow.value += ')';
})

//Flow button

document.getElementById('btn_flow').addEventListener('click', function () {
    inputWindow.value += '.';
})

//Back Space button

document.getElementById('btn_back-space').addEventListener('click', function () {
    inputWindow.value = inputWindow.value.slice(0, -1);
})

//History Box

let historyExp1 = document.getElementById('history_exp-1');
let historyExp2 = document.getElementById('history_exp-2');
let historyExp3 = document.getElementById('history_exp-3');
let historyExp4 = document.getElementById('history_exp-4');
let historyExp5 = document.getElementById('history_exp-5');
let historyExp6 = document.getElementById('history_exp-6');
let historyExp7 = document.getElementById('history_exp-7');
let historyExp8 = document.getElementById('history_exp-8');
let historyExp9 = document.getElementById('history_exp-9');

let historyParagraph = [historyExp1, historyExp2, historyExp3, historyExp4, historyExp5, historyExp6, historyExp7,historyExp8, historyExp9];



//Expression button

document.getElementById('btn_eql').addEventListener('click', function () {
    result = inputWindow.value.replace('^', '**').replace('\u221A', 'Math.sqrt')
    resultWindow.value = eval(`${result}`);

    historyArr.push(inputWindow.value);
    if (historyArr.length > 9) {
        historyArr.shift();
    }

    let i = 0;

    historyParagraph.forEach(element => {
        element.innerHTML =`${historyArr[i]}`;
        if (historyArr[i] == undefined) {
            element.innerHTML =` `;
        }
        i++

    })

    inputWindow.value = "";

})

//history event

    historyParagraph.forEach(element => {

        element.addEventListener('click', function () {
            inputWindow.value = element.textContent;
            resultWindow.value = '';
        })
})