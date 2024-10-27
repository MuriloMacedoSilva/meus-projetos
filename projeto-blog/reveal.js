window.revelar = ScrollReveal({reset:true})

// TOPO DO SITE

revelar.reveal('.efeito-main-topo',
{
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.efeito-img-topo',
{
    duration: 2000,
    distance: '90px',
    delay: 500
})

// containers

revelar.reveal('.experiencia-container1',
{
    duration: 2000,
    distance: '90px',
})

revelar.reveal('.experiencia-container2',
{
    duration: 2000,
    distance: '90px',
    delay: 250
})

revelar.reveal('.experiencia-container3',
{
    duration: 2000,
    distance: '90px',
    delay: 500
})

window.addEventListener("scroll", function() {
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 100)
})