//загадываю случайное число при загрузке и вывожу его
var prNum, tempOut;//prMun - число которое загадалf программа, tempOut - временный результат

prNum = math.floor((math.random() * 10) + 1);//генерирую случайное число
tempOut = document.getElementById('temp-out');//получаю временный параграф
tempOut.innerHTML = prNum;//вывожу в этот параграф сгенерированное число


function f1() {
    var num, out;


    num = document.getElementById('mynum').value;//получаю число которое ввел пользователь
    out = document.getElementById('out'); получаю результат

    if (num == prNum) {
        out.innerHTML = 'Вы угадали';
    }
    else if (num > prNum) {
        out.innerHTML = 'Вы ввели число больше чем нужно';
    }
    else {
        out.innerHTML = 'Вы ввели число меньше чем нужно';
        }
}