// https://p5js.org/reference/

//dont touch


let arr = []

for (let i = 0; i < 8; i++) {
    arr.push([])
}
for (let o = 0; o < arr.length; o++) {
    for (let j = 0; j < arr.length; j++) {
        arr[j].push(0)
    }
}


var screen = 600
var fps = 60
var side = screen / arr.length

function setup() {
    createCanvas(screen,screen);
    frameRate(fps)
}

arr[0][5] = 1
function draw() {
    background(80,80,80);
    for (let i = 0; i < arr.length; i++) {
        stroke(1)
        fill(255,0,0)
        line(i*side,0,i*side,600)
        line(0,i*side,600,i*side)
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            switch (arr[i][j]){
                case 0:
                    fill(80,80,80)
                    rect(side*i,side*j,side*(i+1),side*(j+1))
                    break
                case 1:
                    fill(250,0,0)
                    rect(side*i,side*j,side*(i+1),side*(j+1))
                    break
            }
        }
    }
}
function mouseClicked(){

}