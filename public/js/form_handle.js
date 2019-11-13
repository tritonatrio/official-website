// mail handler
function sendMail() {
    // to make sure spammers leave you alone
    let email_recipient = "Tr%ton$Tr%o^gm$%l.com"
    .replace('^','@')
    .replace('%','i')
    .replace('$','a');
    let email = $('#email')[0].value;
    let subject = $('#subject')[0].value;
    let body = $('#message')[0].value;
    location.href = 'mailto:' + email_recipient
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body)
        + '$cc='+encodeURIComponent(email);
}