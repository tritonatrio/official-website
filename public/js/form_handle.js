$(document).ready(function () {
    $('.btn-start-order').on('click', (e) => {
        e.preventDefault();
        let email_recipient = "olli^ozemail.com.au".replace('^','@');
        // mail to
        window.open("mailto:" + email_recipient + "?subject=" + $('#subject').value + "&body=" + "Hi my name is "+$("#name").value +', '+ $('#message').value);
    });

});