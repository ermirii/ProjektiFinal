$(document).ready(function() {
    $('a[href="#body-section"]').click(function(event) {
        event.preventDefault();
        var headerHeight = $('.navbar').outerHeight(); // Adjust this selector to match your header
        $('html, body').animate({
            scrollTop: $('#body-section').offset().top - headerHeight
        }, 1000); // Adjust the duration as needed
    });
});

