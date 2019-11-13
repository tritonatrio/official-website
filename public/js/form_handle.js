$(document).ready(function () {
    
    $('.btn-start-order').on('click', (e) => {
        // extract data
        
        let body = JSON.stringify($('#message')[0].value);
        // let email = JSON.Stringify($('#email')[0].value);
        let email_recipient = "olli^ozemail.com.au".replace('^','@');
        // mailto:olli@ozemail.com.au?subject=trio_info&body=My%20name%20is%20Olli
        window.open("mailto:" + email_recipient + "?subject=" + subject + "&body=" + body);
    });

});

function sendMail() {
    let email_recipient = "olli^ozemail.com.au".replace('^','@');
    let email = $('#email')[0].value;
    let subject = $('#subject')[0].value;
    let body = 'My name is : ' + total;
    location.href = 'mailto:' + email_recipient
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body)
        + '$cc='+encodeURIComponent(email);
}