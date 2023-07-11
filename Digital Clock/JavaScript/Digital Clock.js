setInterval(function () {
    let a = new Date().toTimeString();
    let t = a.slice(0, 8);
    document.getElementById('clock').innerHTML = '<p>' + t + '</p>';
}, 1000);