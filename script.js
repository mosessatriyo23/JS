function addDisplay(nilai) {
    display.value += nilai;
}

document.getElementById("1").addEventListener('click', () => addDisplay('1'));
document.getElementById("2").addEventListener('click', () => addDisplay('2'));
document.getElementById("3").addEventListener('click', () => addDisplay('3'));
document.getElementById("4").addEventListener('click', () => addDisplay('4'));
document.getElementById("5").addEventListener('click', () => addDisplay('5'));
document.getElementById("6").addEventListener('click', () => addDisplay('6'));
document.getElementById("7").addEventListener('click', () => addDisplay('7'));
document.getElementById("8").addEventListener('click', () => addDisplay('8'));
document.getElementById("9").addEventListener('click', () => addDisplay('9'));
document.getElementById("tambah").addEventListener('click', () => addDisplay('+'));
document.getElementById("bagi").addEventListener('click', () => addDisplay('/'));
document.getElementById("kurang").addEventListener('click', () => addDisplay('-'));
document.getElementById("kali").addEventListener('click', () => addDisplay('*'));

const tombolEqual = document.getElementById("equal");

tombolEqual.addEventListener('click', function() {
    try {
        let ekspresi = display.value;
        let hasil = eval(ekspresi);
        display.value = hasil;
    } catch (error) {
        display.value = 'Error';
    }
});

const tombolClear = document.getElementById("clear")

tombolClear.addEventListener('click', function(){
    display.value = ''
})
