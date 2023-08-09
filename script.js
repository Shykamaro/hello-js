let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

function initMap() {
    const map = new google.maps.Map(document.getElementById('contacts_map'), {
      center: { lat: 51.5074, lng: -0.1278 }, 
      zoom: 14 
    })
}