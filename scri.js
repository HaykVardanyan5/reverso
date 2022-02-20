// https://p5js.org/reference/

let arr = []

for (let i = 0; i < 8; i++) {
    arr.push([])
}
for (let o = 0; o < arr.length; o++) {
    for (let j = 0; j < arr.length; j++) {
        arr[j].push([])
    }
}
console.log(arr);


var screen = 600
var fps = 60
var x = 20
var y = 20


function setup() {
    createCanvas(screen,screen);
    frameRate(fps)
}

function draw() {
    background(80,80,80);
    fill(255,0,0)
    rect(x,y,20,20)
    for (let i = 0; i < arr.length; i++) {  
        line(0,0,screen,screen)
    }
}