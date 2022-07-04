// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 9.076479, lng: 7.398574 };
    // Centered map on loca tion
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    // The Marker, positioned at Location
    const marker = newgoogle.maps.Marker({position: loc, map:
    map }); 
}

// Sticky Menu background
window.addEventListener('scroll', function() {
    if(this.window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});
    
// Smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
}); 