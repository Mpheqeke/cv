const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggleId && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

linkAction = () => {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

function shake(time){
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate;
    if (navigator.vibrate) {
        document.button.addEventListener('click', function(ev){
            console.log('CV download');
            navigator.vibrate(time);

        });
    }

}

function share(){
    const shareButton = document.querySelector('button');
    const title= window.document.title;
    const url = window.document.location.href;
    const shareModal = document.querySelector('.share')

    shareButton.addEventListener('click',()=>{
    if(navigator.share){
        navigator.share({
        title : '${title}',
        url: '${url}'
        }).then(()=>{
            console.log('Sharing CV now');
        }).catch(console.error);
    }    else{
        confirmation.classList.add('share-now');
        shareModal.classList.add('share-now');
    }
    })
    confirmation.addEventListener('click',()=>{
        confirmation.classList.remove('share-now');
    })
}
function Fullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
}  

}