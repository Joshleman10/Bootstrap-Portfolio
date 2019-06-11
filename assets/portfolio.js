function sendMail() {
    var link = "mailto:Eshlemanjosh@gmail.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('message').value)
    ;

    window.location.href = link;
}