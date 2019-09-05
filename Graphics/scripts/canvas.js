var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//c.fillStyle = 'teal';
//c.fillRect(50, 50, 250, 250);


//c.beginPath();
//c.moveTo(150, 150);
//c.lineTo(500, 150);
//c.lineTo(500, 500);
//c.lineTo(150, 500);
//c.closePath();
//c.strokeStyle = 'red';
//c.lineWidth = 10;
//c.stroke();

//c.beginPath();
//c.arc(100, 100, 50, 0, Math.PI, true);
//c.strokeStyle = 'red';
//c.lineWidth = 10;
//c.stroke();


//c.lineWidth = 2;

//function getRandomColor() {
//    var letters = '0123456789ABCDEF';
//    var color = '#';
//    for (var i = 0; i < 6; i++) {
//        color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//}

//for (var i = 0; i < 50; i++) {
//    let x = Math.random() * innerWidth;
//    let y = Math.random() * innerHeight;
//    let r = 10 + Math.random() * 40;
//    c.beginPath();
//    c.strokeStyle = getRandomColor();
//    c.arc(x, y, r, 0, 2 * Math.PI);
//    c.stroke();
//}

//let x = 30;
//let y = 30;
//let r = 25;
//c.strokeStyle = 'black';
//c.lineWidth = 2;

//let dx = 6;
//let dy = 9;

//function animate() {
//    requestAnimationFrame(animate);
//    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
//    c.beginPath();
//    c.arc(x, y, r, 0, 2 * Math.PI, false);
//    c.stroke();
//    x += dx;
//    y += dy;
//    if (x > window.innerWidth-r || x < r) {
//        dx = -dx;
//        c.strokeStyle = getRandomColor();
//    }
//    if (y > window.innerHeight - r || y < r) {
//        dy = -dy;
//        c.strokeStyle = getRandomColor();
//    }

//}

//animate();

function getRandomColor() {
    let colorValue = function () {
        return Math.floor(Math.random(256));
    };

    return `rgb(${colorValue},${colorValue},${colorValue})`;
}

function Circle(x, y, r, dx, dy) {

}