window.sr = ScrollReveal({ reset:true});

sr.reveal('.main', {duration: 1500});
sr.reveal('nav', {duration: 2000});
sr.reveal('.skill', {
    distance: '-20px',
    duration: 1000
});
sr.reveal('.sociais-main', {
    distance: '10px',
    duration: 1000
});

    function typeWrite(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(function() {
                elemento.innerHTML += letra;
            }, 75 * i)
        });
    }
    
    const titulo = document.querySelector('.about-me');
    typeWrite(titulo);