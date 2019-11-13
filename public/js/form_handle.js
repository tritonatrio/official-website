$(document).ready(function () {
    $('.btn-start-order').on('click', (e) => {
        // extract data
        let subject = $('#subject').value;
        let body = $('#message').value;
        console.log(body);
        e.preventDefault();
        let email_recipient = "olli^ozemail.com.au".replace('^','@');
        // mail to
        window.open("mailto:" + email_recipient + "?subject=" + $('#subject').value + "&body=" + $('#message').value);
    });

});