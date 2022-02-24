// https://p5js.org/reference/

//dont touch


let arr = []
var map_size = 8

for (let i = 0; i < map_size; i++) {
    arr.push([])
}
for (let o = 0; o < arr.length; o++) {
    for (let j = 0; j < arr.length; j++) {
        arr[j].push(0)
    }
}

arr[3][3] = 1
arr[4][4] = 1
arr[3][4] = 2
arr[4][3] = 2


var screen = 600
var fps = 60
var side = screen / arr.length

function setup() {
    createCanvas(screen,screen);
    frameRate(fps)
}

function draw() {
    background(80,80,80);
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            stroke(50)
            switch (arr[i][j]){
                case 0:
                    fill(80,80,80)
                    rect(side*i,side*j,side*(i+1),side*(j+1))
                    break
                case 1:
                    fill(255,255,255)
                    circle(side * i + side/2, side * j + side/2, side-10);
                    break
                case 2:
                    fill(0,0,0)
                    circle(side*i+side/2,side*j+side/2,side-10);
                    break
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        stroke(1)
        fill(255,0,0)
        line(i*side,0,i*side,600)
        line(0,i*side,600,i*side)
    }
}

var cur = 2
let pl_name = document.getElementById("pl")


function mouseClicked(){
    var will_turning = []
    var x = Math.floor(mouseX/side);
    var y = Math.floor(mouseY/side);
    
    if((x < map_size && y < map_size && x > 0 && y > 0) && arr[x][y] == 0){
        if(cur == 1){cur = 2 ; pl_name.innerText = "white turn"}
        else {cur = 1 ; pl_name.innerText = "black turn"}

        arr[x][y] = cur
        for (let i = x+1; i < arr.length; i++) {
            // sev
            if(cur == 2){
                if (arr[i][y] == 1){
                    will_turning.push([i,y,arr[i][y]])
                }
                else if(arr[i][y] == 2){
                    will_turning.push([i,y,arr[i][y]])
                    continue
                }
                else{break}
            }
            // spitak
            if(cur == 1){
                if (arr[i][y] == 2){
                    will_turning.push([i,y,arr[i][y]])
                }
                else if(arr[i][y] == 1){
                    will_turning.push([i,y,arr[i][y]])
                    continue
                }
                else{break}
            }
        }
        for (let i = x-1; i > 0; i--) {
            // sev
            if (arr[i][y] == 1){
                will_turning.push([i,y,arr[i][y]])
            }
            else if(arr[i][y] == 2){
                will_turning.push([i,y,arr[i][y]])
                continue
            }
            else{break}
            // spitak
            if(cur == 1){
                if (arr[i][y] == 2){
                    will_turning.push([i,y,arr[i][y]])
                }
                else if(arr[i][y] == 1){
                    will_turning.push([i,y,arr[i][y]])
                    continue
                }
                else{break}
            }
        }
        for (let i = 0; i < will_turning.length; i++) {
            var x1 = will_turning[i][0];
            var y1 = will_turning[i][1];
            if(cur == 1){
                if(will_turning[i][2] == 1){
                    break
                }else{
                    arr[x1][y1] = 1
                }
            }
            else if(cur == 2){
                if(will_turning[i][2] == 2){
                    break
                }else{
                    arr[x1][y1] = 2
                }
            }
        }
    }
}
//                   !- vr 1
// if(cur == 2){
//     if(arr[i][y] == 2){
//         continue
//     }
//     else{
//         arr[i][y] = 2
//         if(arr[i][y] == 2){
//             break
//         }
//         continue
//     }
// }