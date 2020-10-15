// image variables
var thermometerImg, thermometerImgOutside, cloudImg, coldImg, hotImg, dropImg

// button variables
var btnColour = (0, 0, 0, 150), btnStroke = 0

// box colour variables
var box1Colour = 255, box2Colour = 255, box3Colour = 255, box4Colour = 255,
box5Colour = 255, box6Colour = 255, box7Colour = 255, box8Colour = 255

function preload() { // preload before setup
// preload the json file
loadJSON("/static/json/data.json", gotData) }

// so the JSON file can be called within the code
function gotData(data) {
Data = data }

function setup() { // setup only runs once like preload
createCanvas(1494,718), background('#E9E9E9') // canvas setup
// loads images from static folder
thermometerImg = loadImage('/static/img/thermometer-icon.png'), thermometerImgOutside = loadImage('static/img/thermometer-outside-icon.png')
cloudImg = loadImage('static/img/cloud.png'), dropImg = loadImage('static/img/drop.png')
hotImg = loadImage('static/img/cold-icon.png'), coldImg = loadImage('static/img/hot-icon.png') }

function boxes() { // this function is called in draw
strokeWeight(18), stroke('#E9E9E9') // outline size and outline colour
fill(box1Colour), rect(252,52,400,400), fill(box2Colour), rect(252,400,300,312), fill(box3Colour), rect(552,52,300,350), fill(box4Colour), rect(552,395,600,317)
fill(box6Colour), rect(852,52,300,350), fill(box7Colour), rect(1152,350,335,362), fill(box8Colour), rect(1152,52,335,350), fill('#FFF7E6'), rect(552,350,600,100) }

function box1() { // inside temp box
textSize(24), textStyle(BOLD), fill(0), text("Inside Temperature",288,115) // text on screen
// Data links to the gotData function. Used to call the JSON data
// Data.day1 looks for day1 in the JSON file
// Data.day1.inside_temp gets the inside_temp value from the JSON file
strokeWeight(0), fill('red'), rect(290,368,49, -Data.day1.inside_temp - 85), ellipse(315,335,78,78)
textSize(45), fill(0), text(Data.day1.inside_temp + "°C",410,225) // adding + "°C" adds the text °C after the inside_temp value from the json file
image(thermometerImg,200,145,252,272) }

function box1a() { // inside temp box after mouse pressed
strokeWeight(18), stroke('#E9E9E9'), fill('#F7E5FF'), rect(252, 52, 300, 348), noStroke()
textSize(24), textStyle(BOLD), fill(0), text("Inside Temperature",288,115)
textSize(20 ), textStyle(NORMAL), fill(0), text("(Yesterday)",355,145), textStyle(BOLD)
strokeWeight(0), fill('red'), rect(290,368,49, -Data.day2.inside_temp - 85), ellipse(315,335,78,78)
textSize(45), fill(0), text(Data.day2.inside_temp + "°C",410,225)
image(thermometerImg,200,145,252,272) }

function box2() { // outside temp box
textSize(24), textStyle(BOLD), fill(0), text("Outside Temperature",282,455)
textSize(45), fill(0), text(Data.day1.outside_temp + "°C",424,560)
strokeWeight(0), fill('orange'), rect(339.5,680,30, -Data.day1.inside_temp - 40), ellipse(352,660,55,55)
image(thermometerImgOutside,245,480,325,252) }

function box2a() { // outside temp box after mouse pressed
strokeWeight(18), stroke('#E9E9E9'), fill('#FFDEDE'), rect(252, 400, 300, 315), noStroke()
textSize(24), textStyle(BOLD), fill(0), text("Outside Temperature",282,455)
textSize(20), textStyle(NORMAL), fill(0), text("(Yesterday)",355,485), textStyle(BOLD)
textSize(45), fill(0), text(Data.day2.outside_temp + "°C",424,560)
strokeWeight(0), fill('orange'), rect(339.5,680,30, -Data.day2.inside_temp - 40), ellipse(352,660,55,55)
image(thermometerImgOutside,245,480,325,252) }

function box3() { // humidity box
image(cloudImg,585,160,220,120)
// if the humidity value is > or = the values below add a cloud to the box
if (Data.day1.humidity >= 40) { image(cloudImg,585,160,60,30) }
if (Data.day1.humidity >= 60) { image(cloudImg,755,160,50,25) }
if (Data.day1.humidity >= 80) { image(cloudImg,795,190,30,15) }
textSize(24), textStyle(BOLD), fill(0), text("Humidity",640,100)
textSize(45), fill(0), text(Data.day1.humidity + "%",660,250) }

function box3a() { // humidity box after mouse pressed
strokeWeight(18), stroke('#E9E9E9'), fill('#E9FFE5'), rect(552, 52, 300, 298), noStroke()
textSize(20), textStyle(NORMAL), fill(0), text("(Yesterday)",642,130), textStyle(BOLD)
image(cloudImg,585,160,220,120)
if (Data.day2.humidity >= 40) { image(cloudImg,585,160,60,30) }
if (Data.day2.humidity >= 60) { image(cloudImg,755,160,50,25) }
if (Data.day2.humidity >= 80) { image(cloudImg,795,190,30,15) }
textSize(24), textStyle(BOLD), fill(0), text("Humidity",640,100)
textSize(45), fill(0), text(Data.day2.humidity + "%",660,250) }

function box4() {
textSize(28), textStyle(BOLD), fill(0), text("Soil Moisture",890,510)
textSize(20), textStyle(NORMAL), fill(0), text("Soil Quality:",890,600)
if (Data.day1.soil_moisture >= 500) { // if the soil moisture value is > or = to 500 the soil is good
textStyle(BOLD), fill('#EE422E'),text("Poor",890,625) } else { // else if the soil moisture value is not >= 500 the soil is poor
textStyle(BOLD), fill('#61CA4E'),text("Good",890,625) }
noFill(). stroke(86, 220, 59, 125), strokeWeight(10), arc(700, 585, 200, 200, -300, 142.3)
noFill(), strokeWeight(10), stroke('#7B4218'), arc(700, 585, 200, 200, 0, Data.day1.soil_moisture)
stroke('#7B4218'), strokeWeight(3), arc(700, 585, 200, 200, 0, Data.day1.soil_moisture)
fill(176, 103, 48, 75), stroke(255), strokeWeight(4), ellipse(700, 585, 190, 190), noStroke()
textSize(45), fill(0), text(Data.day1.soil_moisture,660,600) }

function box4a() {
strokeWeight(18), stroke('#E9E9E9'), fill('#FDE9E2'), rect(552, 450, 600, 262), noStroke()
textSize(20 ), textStyle(NORMAL), fill(0), text("(Yesterday)",928,535), textStyle(BOLD)
textSize(28), textStyle(BOLD), fill(0), text("Soil Moisture",890,510)
textSize(20), textStyle(NORMAL), fill(0), text("Soil Quality:",890,600)
noFill(). stroke(86, 220, 59, 125), strokeWeight(10), arc(700, 585, 200, 200, -300, 142.3)
noFill(), strokeWeight(10), stroke('#7B4218'), arc(700, 585, 200, 200, 0, Data.day2.soil_moisture)
stroke('#7B4218'), strokeWeight(3), arc(700, 585, 200, 200, 0, Data.day2.soil_moisture)
fill(176, 103, 48, 75), stroke(255), strokeWeight(4), ellipse(700, 585, 190, 190)
noStroke(), textStyle(BOLD), textSize(45), fill(0), text(Data.day2.soil_moisture,660,600), textSize(20)
if (Data.day2.soil_moisture >= 500) { textStyle(BOLD), fill('#EE422E'), text("Poor",890,625) }
else { textStyle(BOLD), fill('#61CA4E'),text("Good",890,625) } }

function box5() {
fill(0), textStyle(BOLD), textSize(15), text("Data From:", 578.5, 385)
textStyle(NORMAL), textSize(13), text("12/10/2020", 578, 408), text("13/10/2020", 578, 428)
textStyle(BOLD), textSize(14), text("Hold down on a box to display yesterdays data", 740, 385)
stroke(btnStroke), strokeWeight(2), fill(btnColour), rect(815, 404, 128, 30, 6), noStroke(), fill(255), textStyle(BOLD), textSize(18), text("Refresh Data", 825, 425) } // fill text white

function box5a() { }

function box6() {
textSize(25), textStyle(BOLD), fill(0), text("Water Run Time", 910, 100)
textSize(45), fill(0), text(Data.day1.water_run_time, 935, 325), textSize(25), text("seconds", 965, 325)
push() // Anything within push and pop does not effect the rest of the code outside this function
translate(1000, 195) // x and y position
// The variable i is initially set to 0. Every time the for loop runs, i is displayed on the screen and 1 is added to i.
// The for loop will only run until i equals to the water run time value meaning after this the condition is false
for (var i = 0; i < Data.day1.water_run_time; i++) {
    // rotate the canvas to the 4 angles evenly distributed between 0 and 2π radians
    rotate(TWO_PI * i / 4)
    image(dropImg,20, 0, 65, 50) } pop() }

function box6a() {
strokeWeight(18), stroke('#E9E9E9'), fill('#E6EBFF'), rect(852, 50, 300, 300 ), noStroke()
textSize(25), textStyle(BOLD), fill(0), text("Water Run Time", 910, 100)
//image(tapImg, 920, 120, 150, 150)
textSize(20 ), textStyle(NORMAL), fill(0), text("(Yesterday)", 950, 125), textStyle(BOLD)
textSize(45), fill(0), text(Data.day2.water_run_time, 935, 325), textSize(25), text("seconds", 965, 325)
push()
translate(1000, 215)
for (var i = 0; i < Data.day2.water_run_time; i++) {
    rotate(TWO_PI * i / Data.day2.water_run_time)
    image(dropImg,20, 0, 65, 50) } pop() }

function box7() {
textSize(25), textStyle(BOLD), fill(0), text("Maximum Temperature", 1185, 100)
textSize(25), textStyle(BOLD), fill(0), text("Maximum Temperature", 1185, 100)
image(hotImg, 1150, 100, 275, 275)
textSize(45), fill(0), text(Data.day1.max_temp + "°C", 1315, 200)
fill('#FF5900'), noStroke(), ellipse(1218, 288, 62, 57)
rect(1209.5, 285, 17, -Data.day1.max_temp - 50) }

function box7a() {
strokeWeight(18), stroke('#E9E9E9'), fill('#FFE5F2'), rect(1152, 50, 335, 350), noStroke()
textSize(20 ), textStyle(NORMAL), fill(0), text("(Yesterday)",1265,130), textStyle(BOLD)
textSize(25), textStyle(BOLD), fill(0), text("Maximum Temperature", 1185, 100)
image(hotImg, 1150, 100, 275, 275)
textSize(45), fill(0), text(Data.day2.max_temp + "°C", 1315, 200)
fill('#FF5900'), noStroke(), ellipse(1218, 288, 62, 57)
rect(1209.5, 285, 17, -Data.day2.max_temp - 50) }

function box8() {
textSize(25), textStyle(BOLD), fill(0), text("Minimum Temperature", 1185, 450)
image(coldImg, 1165, 440, 140, 305)
textSize(45), fill(0), text(Data.day1.min_temp + "°C", 1315, 555)
fill('#00D3FF'), noStroke(), ellipse(1218.9, 648, 68, 66 )
rect(1208.4, 617, 21, -Data.day1.min_temp - 25) }

function box8a() {
strokeWeight(18), stroke('#E9E9E9'), fill('#E5FEFD'), rect(1152, 402, 335, 310), noStroke()
textSize(20), textStyle(NORMAL), fill(0), text("(Yesterday)",1260,475), textStyle(BOLD)
textSize(25), textStyle(BOLD), fill(0), text("Minimum Temperature", 1185, 450)
image(coldImg, 1165, 440, 140, 305)
textSize(45), fill(0), text(Data.day2.min_temp + "°C", 1315, 555)
fill('#00D3FF'), noStroke(), ellipse(1218.9, 648, 68, 66)
rect(1208.4, 617, 21, -Data.day2.min_temp - 25) }

function draw() { // draw is always running (looping)
push(), boxes(), pop()
push(), box1(), pop()
push(), box2(), pop()
push(), box3(), pop()
push(), box4(), pop()
push(), box5(), pop()
push(), box6(), pop()
push(), box7(), pop()
push(), box8(), pop()
cursor(HAND) // change the cursor to a hand

textSize(10), fill(0),   text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY)

if (mouseX > 260 && mouseX < 540 && mouseY > 60 && mouseY < 400) { box1Colour = 215, cursor(HAND) } else { box1Colour = 255, cursor(ARROW) }
if (mouseX > 260 && mouseX < 540 && mouseY > 400 && mouseY < 700) { box2Colour = 215, cursor(HAND) } else { box2Colour = 255 }
if (mouseX > 560 && mouseX < 840 && mouseY > 60 && mouseY < 310) {  box3Colour = 215, cursor(HAND) } else { box3Colour = 255 }
if (mouseX > 560 && mouseX < 1150 && mouseY > 450 && mouseY < 700) { box4Colour = 215, cursor(HAND) } else { box4Colour = 255 }
if (mouseX > 860 && mouseX < 1140 && mouseY > 60 && mouseY < 330) { box6Colour = 215, cursor(HAND) } else { box6Colour = 255 }
if (mouseX > 1160 && mouseX < 1475 && mouseY > 60 && mouseY < 340) { box8Colour = 215, cursor(HAND) } else { box8Colour = 255 }
if (mouseX > 1160 && mouseX < 1475 && mouseY > 360 && mouseY < 700) { box7Colour = 215, cursor(HAND) } else { box7Colour = 255 }
if (mouseX > 810 && mouseX < 945 && mouseY > 400 && mouseY < 435) { btnStroke = 200, cursor(HAND) } else { btnStroke = 0 }

if (mouseIsPressed) {
if (mouseX > 260 && mouseX < 540 && mouseY > 60 && mouseY < 400) { box1a() } else { } // else make the cursor an arrow
if (mouseX > 260 && mouseX < 540 && mouseY > 400 && mouseY < 700) { box2a() } else { }
if (mouseX > 560 && mouseX < 840 && mouseY > 60 && mouseY < 310) {  box3a() } else { }
if (mouseX > 560 && mouseX < 1150 && mouseY > 450 && mouseY < 700) { box4a() } else { }
if (mouseX > 860 && mouseX < 1140 && mouseY > 400 && mouseY < 700) { box5a() } else { }
if (mouseX > 860 && mouseX < 1140 && mouseY > 60 && mouseY < 330) { box6a() } else { }
if (mouseX > 1160 && mouseX < 1475 && mouseY > 60 && mouseY < 340) { box7a() } else { }
if (mouseX > 1160 && mouseX < 1475 && mouseY > 360 && mouseY < 700) { box8a() } else { }
// load the json file again and change the button colour to show that it was pressed
if (mouseX > 810 && mouseX < 945 && mouseY > 400 && mouseY < 435) { loadJSON("/static/json/data.json", gotData), btnColour = 100 } } else { btnColour = (0, 0, 0, 150) }
if (mouseX > 500 && mouseX < 1140 && mouseY > 350 && mouseY < 440) { box5a() } else { }
}