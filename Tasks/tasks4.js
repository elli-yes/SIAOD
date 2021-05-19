function setup(){
    createCanvas(600, 400)
    frameRate(30)
}

let stages = 0

let scale = 5
let points =     [[1,2],[2,3],[3,4],[4,5],[20,30],[30,40],[40,50]]


let spectral =[]
function spectra(){
    for(let i=0; i<100; i++) { spectral.push(0) }
    points.forEach(e=>{
        let buffMax = 0
        for(let i = e[0]; i <= e[1]; i++){
            spectral[i]++
        }
    })
    console.log('Spectral: ', spectral)
    maxi()
}

function maxi(){
    console.log('-');
    let spectMax = 0
    spectral.forEach(e=>{
        (e > spectMax) ? spectMax = e : e = e
    })
    console.log(spectMax)
    shoot(spectMax)
}

function shoot(max){
    let m = spectral.indexOf(max)
    console.log('m is ',m);
    console.log(points);
    for(let i = 0; i < points.length; i++){
        console.log(i,'try')
        if(points[i][0] <= m && points[i][1] >= m){
            console.log(points[i][0], points[i][1],'spliced')
            points.splice(i,1)
            i--
        }else{
            console.log(points[i][0], points[i][1],'NonSpliced')
        }
    }
    spectral = []
    if(points.length === 0){
        console.log('Success for ', stages+1, ' shots')
    }else{
        console.log(points);
        loop()
        stages++
    }
}


function drawPoints(){
    let k = 10
    points.forEach(e=>{
        let d = e[1]-e[0]
        let r = d/2
        circle((e[0]-r)*scale+100, k*scale, d*scale)
        k +=10
    })
}


let x = 0

function compare(){
    console.log('+')
    line(x,0,x,600)
    x += scale
    if(x>=300){
        x = 0
        noLoop()
        spectra()
    }
}

function getArrows(){
    let l = points.length
    let last = -1
    peak.forEach(e=>{
       // if(){}
    })
}

function draw(){
    background(220)
    fill(100,200,100)
    noStroke()
    drawPoints()

    stroke(255,0,0)
    compare()
}