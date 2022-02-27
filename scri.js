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
// arr[3][5] = 1

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
                    rect(side*j,side*i,side*(j+1),side*(i+1))
                    break
                case 1:
                    fill(255,255,255)
                    circle(side * j + side/2, side * i + side/2, side-10);
                    break
                case 2:
                    fill(0,0,0)
                    circle(side * j + side/2, side * i + side/2, side-10);
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

//                                      !controll

var cur = 1
let pl_name = document.getElementById("pl")

function chng() {
    if(cur == 1){cur = 2 ; pl_name.innerText = "black turn"}
    else {cur = 1 ; pl_name.innerText = "white turn"}
}


function mouseClicked() {
    var left_turning = []
    var right_turning = []
    var up_turning = []
    var down_turning = []

    var upL_turning = []
    var downL_turning = []
    var upR_turning = []
    var downR_turning = []

    var x = Math.floor(mouseX/side);
    var y = Math.floor(mouseY/side);
    var can_chng = false

    if((x < map_size && y < map_size && x >= 0 && y >= 0) && arr[y][x] == 0){
    //                                  right
        for (let i = x+1; i < arr.length; i++) {
            // sev
            if(cur == 2){
                if (arr[y][i] == 1){
                    right_turning.push([y,i,arr[y][i]])
                }
                else if(arr[y][i] == 2){
                    right_turning.push([y,i,arr[y][i]])
                    break
                }
                else{break}
            }
            // spitak
            if(cur == 1){
                if (arr[y][i] == 2){
                    right_turning.push([y,i,arr[y][i]])
                }
                else if(arr[y][i] == 1){
                    right_turning.push([y,i,arr[y][i]])
                    break
                }
                else{break}
            }
        }
    //                                  left
        for (let i = x-1; i >= 0; i--) {
            // sev
            if(cur == 2){
                if (arr[y][i] == 1){
                    left_turning.push([y,i,arr[y][i]])
                }
                else if(arr[y][i] == 2){
                    left_turning.push([y,i,arr[y][i]])
                    break
                }
                else{break}
            }
            // spitak
            if(cur == 1){
                if (arr[y][i] == 2){
                    left_turning.push([y,i,arr[y][i]])
                }
                else if(arr[y][i] == 1){
                    left_turning.push([y,i,arr[y][i]])
                    break
                }
                else{break}
            }
        }
    //                                  up
        for (let i = y-1; i >= 0; i--) {
            try {    
                // sev
                if(cur == 2){
                    if (arr[i][x] == 1){
                        up_turning.push([i,x,arr[i][x]])
                    }
                    else if(arr[i][x] == 2){
                        up_turning.push([i,x,arr[i][x]])
                        break
                    }
                    else{break}
                }
                // spitak
                if(cur == 1){
                    if (arr[i][x] == 2){
                        up_turning.push([i,x,arr[i][x]])
                    }
                    else if(arr[i][x] == 1){
                        up_turning.push([i,x,arr[i][x]])
                        break
                    }
                    else{break}
                }
            } catch (error) {break}
        }
    //                                  down
        for (let i = y+1; i < arr.length; i++) {
            // sev
            if(cur == 2){
                if (arr[i][x] == 1){
                    down_turning.push([i,x,arr[i][x]])
                }
                else if(arr[i][x] == 2){
                    down_turning.push([i,x,arr[i][x]])
                    break
                }
                else{break}
            }
            // spitak
            if(cur == 1){
                if (arr[i][x] == 2){
                    down_turning.push([i,x,arr[i][x]])
                }
                else if(arr[i][x] == 1){
                    down_turning.push([i,x,arr[i][x]])
                    break
                }
                else{break}
            }
        }
    //                                  up + right
        var j = x
        for (let i = y-1; i >= 0; i--) {
            j++
            // sev
            if(cur == 2){
                if (arr[i][j] == 1){
                    upR_turning.push([i,j,arr[i][j]])
                }
                else if(arr[i][j] == 2){
                    upR_turning.push([i,j,arr[i][j]])
                    break
                }
                else{break}
            }
            // spitak
            if(cur == 1){
                if (arr[i][j] == 2){
                    upR_turning.push([i,j,arr[i][j]])
                }
                else if(arr[i][j] == 1){
                    upR_turning.push([i,j,arr[i][j]])
                    break
                }
                else{break}
            }
        }

    //                                  down + right
        j = x
        for (let i = y+1; i < arr.length; i++) {
            j++
            // sev
            if(cur == 2){
                if (arr[i][j] == 1){
                    downR_turning.push([i,j,arr[i][j]])
                }
                else if(arr[i][j] == 2){
                    downR_turning.push([i,j,arr[i][j]])
                    break
                }
                else{break}
            }
            // spitak
            if(cur == 1){
                if (arr[i][j] == 2){
                    downR_turning.push([i,j,arr[i][j]])
                }
                else if(arr[i][j] == 1){
                    downR_turning.push([i,j,arr[i][j]])
                    break
                }
                else{break}
            }
        }
    //                                  up + left
        j = x
        for (let i = y-1; i >= 0; i--) {
            j--
            // sev
            if(cur == 2){
                if (arr[i][j] == 1){
                    upL_turning.push([i,j,arr[i][j]])
                }
                else if(arr[i][j] == 2){
                    upL_turning.push([i,j,arr[i][j]])
                    break
                }
                else{break}
            }
            // spitak
            if(cur == 1){
                if (arr[i][j] == 2){
                    upL_turning.push([i,j,arr[i][j]])
                }
                else if(arr[i][j] == 1){
                    upL_turning.push([i,j,arr[i][j]])
                    break
                }
                else{break}
            }
        }
    //                                  down + left
        j = x
        for (let i = y+1; i < arr.length; i++) {
            j--
            // sev
            if(cur == 2){
                if (arr[i][j] == 1){
                    downL_turning.push([i,j,arr[i][j]])
                }
                else if(arr[i][j] == 2){
                    downL_turning.push([i,j,arr[i][j]])
                    break
                }
                else{break}
            }
            // spitak
            if(cur == 1){
                if (arr[i][j] == 2){
                    downL_turning.push([i,j,arr[i][j]])
                }
                else if(arr[i][j] == 1){
                    downL_turning.push([i,j,arr[i][j]])
                    break
                }
                else{break}
            }
        }
    //    right pl
        for (let i = 0; i < right_turning.length; i++) {
            var y1 = right_turning[i][0];
            var x1 = right_turning[i][1];
            // spitak
            if(cur == 1){
                if(right_turning[0][2] != 1){
                    if(right_turning[right_turning.length - 1][2] == 2){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 1
                        can_chng = true
                    }
                }
                else{break}
            }
            // sev
            else if(cur == 2){
                if(right_turning[0][2] != 2){
                    if(right_turning[right_turning.length - 1][2] == 1){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 2
                        can_chng = true
                    }
                }
                else{break}
            }
        }
    //    left pl
        for (let i = 0; i < left_turning.length; i++) {
            var y1 = left_turning[i][0];
            var x1 = left_turning[i][1];
            // spitak
            if(cur == 1){
                if(left_turning[0][2] != 1){
                    if(left_turning[left_turning.length - 1][2] == 2){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 1
                        can_chng = true
                    }
                }
                else{break}
            }
            // sev
            else if(cur == 2){
                if(left_turning[0][2] != 2){
                    if(left_turning[left_turning.length - 1][2] == 1){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 2
                        can_chng = true
                    }
                }
                else{break}
            }
        }
    //    up pl
        for (let i = 0; i < up_turning.length; i++) {
            var y1 = up_turning[i][0];
            var x1 = up_turning[i][1];
            // spitak
            if(cur == 1){
                if(up_turning[0][2] != 1){
                    if(up_turning[up_turning.length - 1][2] == 2){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 1
                        can_chng = true
                    }
                }
                else{break}
            }
            // sev
            else if(cur == 2){
                if(up_turning[0][2] != 2){
                    if(up_turning[up_turning.length - 1][2] == 1){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 2
                        can_chng = true
                    }
                }
                else{break}
            }
        }
    //    down pl
        for (let i = 0; i < down_turning.length; i++) {
            var y1 = down_turning[i][0];
            var x1 = down_turning[i][1];
            // spitak
            if(cur == 1){
                if(down_turning[0][2] != 1){
                    if(down_turning[down_turning.length - 1][2] == 2){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 1
                        can_chng = true
                    }
                }
                else{break}
            }
            // sev
            else if(cur == 2){
                if(down_turning[0][2] != 2){
                    if(down_turning[down_turning.length - 1][2] == 1){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 2
                        can_chng = true
                    }
                }
                else{break}
            }
        }
    //    upR pl
        for (let i = 0; i < upR_turning.length; i++) {
            var y1 = upR_turning[i][0];
            var x1 = upR_turning[i][1];
            // spitak
            if(cur == 1){
                if(upR_turning[0][2] != 1){
                    if(upR_turning[upR_turning.length - 1][2] == 2){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 1
                        can_chng = true
                    }
                }
                else{break}
            }
            // sev
            else if(cur == 2){
                if(upR_turning[0][2] != 2){
                    if(upR_turning[upR_turning.length - 1][2] == 1){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 2
                        can_chng = true
                    }
                }
                else{break}
            }
        }
    //    upL pl
        for (let i = 0; i < upL_turning.length; i++) {
            var y1 = upL_turning[i][0];
            var x1 = upL_turning[i][1];
            // spitak
            if(cur == 1){
                if(upL_turning[0][2] != 1){
                    if(upL_turning[upL_turning.length - 1][2] == 2){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 1
                        can_chng = true
                    }
                }
                else{break}
            }
            // sev
            else if(cur == 2){
                if(upL_turning[0][2] != 2){
                    if(upL_turning[upL_turning.length - 1][2] == 1){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 2
                        can_chng = true
                    }
                }
                else{break}
            }
        }
    //    upR pl
        for (let i = 0; i < downR_turning.length; i++) {
            var y1 = downR_turning[i][0];
            var x1 = downR_turning[i][1];
            // spitak
            if(cur == 1){
                if(downR_turning[0][2] != 1){
                    if(downR_turning[downR_turning.length - 1][2] == 2){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 1
                        can_chng = true
                    }
                }
                else{break}
            }
            // sev
            else if(cur == 2){
                if(downR_turning[0][2] != 2){
                    if(downR_turning[downR_turning.length - 1][2] == 1){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 2
                        can_chng = true
                    }
                }
                else{break}
            }
        }
    //    upL pl
        for (let i = 0; i < downL_turning.length; i++) {
            var y1 = downL_turning[i][0];
            var x1 = downL_turning[i][1];
            // spitak
            if(cur == 1){
                if(downL_turning[0][2] != 1){
                    if(downL_turning[downL_turning.length - 1][2] == 2){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 1
                        can_chng = true
                    }
                }
                else{break}
            }
            // sev
            else if(cur == 2){
                if(downL_turning[0][2] != 2){
                    if(downL_turning[downL_turning.length - 1][2] == 1){
                        break
                    }else{
                        arr[y][x] = cur
                        arr[y1][x1] = 2
                        can_chng = true
                    }
                }
                else{break}
            }
        }
    }
    // console.log(x,y,arr[y][x])
    if(can_chng){
        chng()
        can_chng = false
    }
}


function surrender(){
    if(cur == 1){
        document.getElementById("winer").innerText = "black win"
    }else{
        document.getElementById("winer").innerText = "white win"
    }
}
function end(){
    var winer
    var blacks = 0
    var whites = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i][j] == 1){
                whites++
            }
            else if(arr[i][j] == 2){
                blacks++
            }
        }
    }
    if(blacks > whites){
        winer = "blacks win"
    }
    if(blacks < whites){
        winer = "whites win"
    }
    else{winer = "draw"}
    document.getElementById("winer").innerText = "whites : "+whites+" - blacks : "+blacks + " ;  " + winer
}