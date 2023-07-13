document.addEventListener('DOMContentLoaded', function () {
    const seletorElemento = document.getElementById('seletor-do-elemento');
    let mouseX = 0;
    let mouseY = 0;
    let isMobile = false;

    function checkMobile() {
        const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        isMobile = mobileRegex.test(navigator.userAgent);
    }

    function atualizarPosicao() {
        if (!isMobile) {
            seletorElemento.style.left = mouseX + 'px';
            seletorElemento.style.top = mouseY + 'px';
        }
    }

    function exibirBolinha() {
        if (!isMobile) {
            seletorElemento.style.visibility = 'visible';
            seletorElemento.style.opacity = '1';
        }
    }

    function ocultarBolinha() {
        if (!isMobile) {
            seletorElemento.style.visibility = 'hidden';
            seletorElemento.style.opacity = '0';
        }
    }

    function onMouseMove(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        atualizarPosicao();
    }

    function onMobile() {
        seletorElemento.style.display = 'none';
        document.body.style.cursor = 'default';
    }

    checkMobile();

    if (isMobile) {
        onMobile();
    } else {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', exibirBolinha);
        document.addEventListener('mouseout', ocultarBolinha);
    }

    document.addEventListener('touchstart', function (event) {
        event.preventDefault();
    });
});

const videoElement = document.getElementById('video');

const isMobilee = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobilee) {
    videoElement.removeAttribute('autoplay');
}

if (!isMobilee) {
    videoElement.play();
}