setInterval(function () {
    let a = new Date().toTimeString();
    let h = a.slice(0, 2);
    let m = a.slice(3, 5);
    let s = a.slice(6, 8);
    document.getElementById('hour').innerHTML = '<p>' + h + '</p>';
    document.getElementById('minute').innerHTML = '<p>' + m + '</p>';
    document.getElementById('second').innerHTML = '<p id="s">' + s + '</p>';
    if (h >= 12) {
        document.getElementById('d').innerHTML = '<p id="x">PM</p>';
    }
    else {
        document.getElementById('d').innerHTML = '<p id="x">AM</p>';
    }
}, 1000)