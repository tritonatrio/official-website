$(document).ready(function () {
    $('.btn-start-order').on('click', (e) => {
        // extract data
        let subject = $('#subject')[0].value;
        let body = $('#message')[0].value;
        let email = $('#email')[0].value;
        e.preventDefault();
        let email_recipient = "olli^ozemail.com.au".replace('^','@');
        // mail to
        window.open("mailto:" + email_recipient + "?subject=" + subject + "&body=" + body);
    });

});