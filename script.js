const linksExternos = document.querySelectorAll('a');

function lidarComLink(evento) {
    evento.preventDefault()
    window.open(evento.currentTarget)

}

linksExternos.forEach((link) => {
    link.addEventListener('click', lidarComLink)
})