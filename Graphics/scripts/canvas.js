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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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

function Circle(x, y, r, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
}

Circle.prototype.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    c.strokeStyle = 'black';
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
};

Circle.prototype.animate = function () {
    this.draw();
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > window.innerWidth-this.r || this.x < this.r) {
        this.dx = -this.dx;
        this.color = getRandomColor();
    }
    if (this.y > window.innerHeight - this.r || this.y < this.r) {
        this.dy = -this.dy;
        this.color = getRandomColor();
    }
};

function animate() {
    requestAnimationFrame(this.animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i = 0; i < circles.length; i++) {
        circles[i].animate();
    }
}

let circles = [];

for (var i = 0; i < 100; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.floor(10 + Math.random() * 10);
    let dx = Math.random() * 16;
    let dy = Math.random() * 16;
    let color = getRandomColor();
    circles.push(new Circle(x, y, r, dx, dy, color));
}
animate();