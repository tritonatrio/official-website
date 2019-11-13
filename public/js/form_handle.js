$(document).ready(function () {
    $('#contact').on('click', '.btn-start-order', (e) => {
        e.preventDefault();
        let email_recipient = "olli^ozemail.com.au".replace('^','@');
        // mail to to
        window.open("mailto:" + email_recipient + "?subject=" + $('#subject').value + "&body=" + $('#message').value)+"&name="+$('#name').value+"&mailfrom="+$('#email').value;
    });

});