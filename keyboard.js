/*let keyboard = [];
document.onkeydown = function (event) {
    keyboard.push(event.key);
    console.log(event);
}*/

const keyboard = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ArrowUp", "Shift", "Control", "Meta", "Alt", " ", "Alt", "Control", "ArrowLeft", "ArrowDown", "ArrowRight"];

function init() {
    let out = '';
    for (let i=0; i<keyboard.length; i++) {
        if (i == 14 || i == 29 || i == 42 || i == 56) {
            out += '<div class="nextrow"></div>'
        }
        out += '<div class="keys" data="'+keyboard[i]+'">'+keyboard[i]+'</div>';
    }
    document.querySelector('body').innerHTML = '<textarea id="textarea"></textarea>' + out;
}
init();

document.onkeydown = function (event) {
    document.querySelectorAll('body .keys').forEach(function(el){
        el.classList.remove('active');
    });
    document.querySelector('body .keys[data = "'+event.key+'"]').classList.add('active');
    if (event.key == "Tab") document.getElementById('textarea').value += "    ";
    /*if (event.key == "ArrowLeft") document.getElementById('textarea').setSelectionRange(0, 0);*/

    document.getElementById('textarea').value += event.key;
}

document.querySelectorAll('body .keys').forEach(function(elem){
    elem.onclick = function(event) {
        document.querySelectorAll('body .keys').forEach(function(el){
            el.classList.remove('active');
        });
        this.classList.add('active');
        document.getElementById('textarea').value += elem.key;
    };
})

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        el.onclick = function(event) {
            document.querySelectorAll('body .keys').forEach(function(el){
                el.classList.remove('active');
            });
            this.classList.add('active');
        };
    }
});


/*
document.onkeydown = function (event) {
    console.log(event);
}*/
