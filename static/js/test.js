let temp = [273, 283, 293, 303, 313, 323] // array listing temperature in kelvin
var moving_cloud, x, y, changeDirection // moving cloud variables
let humidity = [45, 65, 85] // array listing humidity levels
var cloud, tree, sun, Background // images
var sunColour // variable for sun colour
var weather // variable for weather api
var buttonColour = (100,100,100,115)

function preload() {
  // load the api
  // 1000 calls per day // 611acbd8e80ee9881e8d0d1f6f1f6626
  loadJSON("https://api.openweathermap.org/data/2.5/onecall?lat=-34.921230&lon=138.599503&exclude=hourly,daily&appid=4b7d786f855ddef639cea3087facb9da", gotData)
  // get images from the static folder
  Background = loadImage('static/background.png')
  moving_cloud = loadImage('static/cloud.png'), cloud = loadImage('static/cloud.png'), tree = loadImage('static/tree.png') }

function setup() {
    createCanvas(850,450)
    background(0)
    sunColour = "white" // set the variable to the colour white
    changeDirection = false // if false the cloud moves right along the x axis first
    x = random(800), y = random(175) } // set a random x and y positions for the cloud

function gotData(data) {
    weather = data }

function draw() {
    // border and background image
    fill(0), rect(0,0,10,1000), rect(0,0,1000,10), rect(840,0,10,1000), rect(0,440,1000,10)
    push(), tint(255, 255, 255, 175), image(Background, 0, 0, 850, 450), pop()
    // api button
    fill(buttonColour), strokeWeight(3), stroke(85), rect(20,20,100,40,8)
    noStroke(), fill(255), textStyle(BOLD), textSize(22), text("Refresh",30,48)
    // reset api button
    if(mouseIsPressed){ // if the mouse is pressed within this position
    if (mouseX > 14 && mouseX < 120 && mouseY > 17 && mouseY < 60) {
    // load the JSON again
    loadJSON("https://api.openweathermap.org/data/2.5/onecall?lat=-34.921230&lon=138.599503&exclude=hourly,daily&appid=4b7d786f855ddef639cea3087facb9da", gotData)
    text("Success!",20,90) } }
    if (mouseX > 14 && mouseX < 120 && mouseY > 17 && mouseY < 60) { cursor(HAND), buttonColour = (100,100,100,150) // change to hand cursor
    } else { cursor(ARROW), buttonColour = (100,100,100,115) } // change cursor back
    // using push and pop so translate and rotate wont change anything else in the code
	push()
    // x and y position
    translate(250, 90)
    // The variable i is initially set to 0. Every time the for loop runs i is displayed on the screen and 1 is added to i.
    // The for loop will only run until i equals to 4 meaning after this the condition is false
	for (var i = 0; i < 8; i++) {
	// rotate the canvas to the 8 angles evenly distributed between 0 and 2π radians
    rotate(TWO_PI * i / 8)
    // set the ellipse stroke and fill the variable sunColour
	strokeWeight(3), stroke(sunColour), fill(sunColour)
	ellipse(60, 0, 15, 2) // draw the sun
	} pop()
    // display moving cloud image
    image(moving_cloud, x, y, 40, 20)
	if(x>860){ // if x is > 860 change direction of cloud and give it a random y
    changeDirection=true, y = random(175) }
	else if (x<=0){ // if the cloud is on the other side change direction
	changeDirection=false }
	if (x>=0 && changeDirection == false){
	x=x+0.2 } // speed of cloud
	else if(changeDirection == true){
	x=x-0.2 }
    // fill the ellipse to what the the sun colour variable is set to
    fill(sunColour), ellipse(250,90,80,80), noStroke()
    // tree image
    push(), image(tree, 350, 220, 150, 135), pop() //tint(100, 100, 50, 200)
    // add a cloud depending on how high the humidity is
    // if the humidity is >= 45% add a cloud
    if (weather.current.humidity >= 45) {
        image(cloud, 575, 35, 100, 50) }
    // if the humidity is >= 65% add a cloud
    if (weather.current.humidity >= 65) {
        image(cloud, 415, 50, 75, 35) }
    // if the humidity is >= 85% add a cloud
    if (weather.current.humidity >= 85) {
        image(cloud, 502, 25, 60, 30) }

    // if the temp is <= 273 kelvin (0 degrees) change the sunColour variable to get more red
    if (weather.current.temp <= (temp[0])) { // 0 degrees
        sunColour = "#FEF884" }
    else if (weather.current.temp <= (temp[1])) { // 10 degrees
        sunColour = "#FFDD3A" }
    else if (weather.current.temp <= (temp[2])) { // 20 degrees
        sunColour = "#FFC03A" }
    else if (weather.current.temp <= (temp[3])) { // 30 degrees
        sunColour = "#FF9C3A" }
    else if (weather.current.temp <= (temp[4])) { // 40 degrees
        sunColour = "#FF673A" }
    else if (weather.current.temp <= (temp[5])) { // 50 degrees
        sunColour = "#FF0000" }

  if (weather) { // link to the gotData function
        // if the cursor is within this mouse x and mouse y position
    if (mouseX > 200 && mouseX < 300 && mouseY > 40 && mouseY < 125) { cursor(HAND) // sun
        fill("#FEF7BF"), fill(255,255,0,200), stroke("#FFE300"), strokeWeight(4), rect(60,130,150,100,10)
        textSize(14), textStyle(BOLD), noStroke(), fill(0)
        text("Outside Temperature", 65, 145), textSize(14)
        // display the temp and feels like value
        // nfc,2 sets the temp to 2 decimal places
        text("Temperature:", 65, 168), text(nfc(weather.current.temp - 273.15, 2), 65, 183), text("°C", 105, 183)
        text("Feels Like:", 65, 206), text(nfc(weather.current.feels_like - 273.15, 2), 65, 220), text("°C", 105, 220)
        } else { }
        //interactive cloud image
    if (mouseX > 420 && mouseX < 600 && mouseY > 65 && mouseY < 145) { cursor(HAND)
        fill("#D8D7D7"), fill(255,255,255,240), stroke(230), strokeWeight(4), rect(625,40,150,75,10)
        textSize(14), textStyle(BOLD), noStroke(), fill(0), text("Outside Humidity", 641, 60), textSize(14)
        text("Humidity:", 641, 83), text(nfc(weather.current.humidity, 0), 641, 100), text("%", 658, 100)
         } else { }
         //interactive aquaponics image
    if (mouseX > 80 && mouseX < 340 && mouseY > 320 && mouseY < 425) { cursor(HAND)
        fill("#BFF2FE"), fill(0,255,255,235), stroke("#00CFFF"), strokeWeight(4), rect(306,225,150,115, 10)
        textSize(14), textStyle(BOLD), noStroke(), fill(0), text("Aquaponics Room", 315, 242), textSize(14)
        text("Temperature:", 315, 268), text(nfc(weather.current.temp - 273.15, 2), 315, 282), text("°C", 352, 282)
        text("Humidity:", 315, 305), text(nfc(weather.current.humidity, 0), 315, 320), text("%", 332, 320)
         } else { }
         // interactive greenhouse image
    if (mouseX > 550 && mouseX < 815 && mouseY > 245 && mouseY < 425) { cursor(HAND)
        fill("#BFFEC5"), fill(0,255,0,235), stroke("#03DC13"), strokeWeight(4)
        rect(400,225,150,115, 10), textSize(14), textStyle(BOLD), noStroke(), fill(0), text("Greenhouse", 435, 242), textSize(14)
        text("Temperature:", 410, 268), text(nfc(weather.current.temp - 273.15, 2), 410, 282), text("°C", 446, 282)
        text("Humidity:", 410, 305), text(nfc(weather.current.humidity, 0), 410, 320), text("%", 427, 320)
        } else { } } }