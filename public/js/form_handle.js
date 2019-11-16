// mail handler
function sendMail() {
    // to make sure spammers leave you alone
    let email_recipient = "TritonaTrio^gmail.com".replace('^','@');
    let subject = $('#subject')[0].value;
    let body = $('#message')[0].value;
    location.href = 'mailto:' + email_recipient
        + '?subject=' + subject
        + '&body=' + body
}