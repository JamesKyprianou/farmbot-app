var thermometerImg

function preload() {
loadJSON("/static/data.json", gotData) }

function gotData(data) {
Data = data }

function setup() {
createCanvas(1494,718)
background('#E9E9E9')
thermometerImg = loadImage('thermometer-icon.png')
}

function squares() {
push()
fill(255), strokeWeight(18), stroke('#E9E9E9')
rect(252,52,400,400), rect(252,400,300,312)
rect(552,52,300,350), rect(552,300,300,412)
rect(852,300,300,412), rect(852,52,300,350)
rect(1152,52,335,300), rect(1152,350,335,362)
pop()}

function draw() {
squares()

textSize(24), textStyle(BOLD), fill(0), text("Inside Temperature",288,100)
strokeWeight(0), fill(150,150,150,200), rect(290,165,50,200), fill('red'), rect(290,365,50, -Data.day1.inside_temp - 50)
textSize(45), fill(0), text(Data.day1.inside_temp,390,225), text("°C", 440,225)
//strokeWeight(5), stroke(0), rect(375,345,125,20), noStroke()
//fill('red'), rect(375,345,25,20), fill('orange'), rect(400,345,25,20), fill('yellow'), rect(425,345,25,20), fill('lightblue'), rect(450,345,25,20), fill('lime'), rect(475,345,25,20)
//fill(0), rect()

 if (Data) {

    }
}



  //  ellipse(400,200,Data.day1.max_temp,100)
