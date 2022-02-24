// https://p5js.org/reference/

let arr = []
let map_size = 8
for (let i = 0; i < map_size; i++) {
    arr.push([])
}
for (let o = 0; o < arr.length; o++) {
    for (let j = 0; j < arr.length; j++) {
        arr[j].push(0)
    }
}

//                                                                          DASHT CENTER
arr[3][3] = 1
arr[4][4] = 1
arr[3][4] = 2
arr[4][3] = 2
//

const screen = 600
const fps = 60

const side = screen/arr.length

function setup() {
    createCanvas(screen,screen);
    frameRate(fps)
}

function draw() {
    background(80,80,80);
    fill(255,0,0)
    for (let x = 0; x < arr.length; x++) {
        stroke(50)
        for (let y = 0; y < arr.length; y++) {
            switch (arr[x][y]){
                case 0:
                    fill(80,80,80)
                    rect(side*x,side*y,side*(x+1),side*(y+1))
                    break;
                case 1:
                    fill(255,255,255)
                    circle(side*x+side/2,side*y+side/2,side-15)
                    break;
                case 2:
                    fill(0,0,0)
                    circle(side*x+side/2,side*y+side/2,side-15)
                    break;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {  
        stroke(1)
        line(side*i, 0, side*i, 600)
        line(0, side*i, 600, side*i)
        if (arr.length%2==0 || arr.length%2==1){
            fill(0,0,0,0)
            rect(side)
        }
    }
}


//                                                                          PLAYER CONTROL
let cur = 2
let pl_name = document.getElementById("pl")

function mouseClicked(){
    let x = Math.floor(mouseX/side)
    let y = Math.floor(mouseY/side)
    if ((x < map_size && y < map_size && x >= 0 && y >= 0) && arr[x][y] == 0) {
        if (cur == 1) {cur = 2  ;  pl_name.innerText = "white turn"
        }else {cur = 1  ;  pl_name.innerText = "black turn"}

        arr[x][y] = cur
    }
    for (let i = x; i < arr.length; i) {
        console.log(i);
        if (arr[i][y] == 2) {
            console.log(arr[i][y]);
            continue
        }
        else if (arr[i][y] == 1) {
            arr[i][y] = 1
            break
        }
    }
}
console.log(arr);






