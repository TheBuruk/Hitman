/* Toggler for show/hide buttons on the main page. */

function toggleSection() {
    var div = document.getElementById('changelog');
    var button = document.getElementById('logbutton');

    div.classList.toggle("open");

    if (div.classList.contains("open")) {
        button.innerHTML = "Hide";
    } else {
        button.innerHTML = "Show";
    }
}

function showLog() {
    var div = document.getElementById('planlog');
    var button = document.getElementById('planbutton');

    div.classList.toggle("open");

    if (div.classList.contains("open")) {
        button.innerHTML = "Hide";
    } else {
        button.innerHTML = "Show";
    }
}

