function preload() {

}
function setup() {
    canvas = createCanvas(750, 500);
    canvas.position(200, 300);
    capture = createCapture(VIDEO);
    capture.hide();
    capture.center();
}
function draw() {
    image(capture, 250, 150, 200, 200);
    fill("blue");
    rect(275, 40, 150, 20);
    rect(275, 440, 150, 20);
    rect(40, 175, 20, 150);
    rect(690, 175, 20, 150);
    fill("orange");
    ellipse(50, 50, 50, 50);
    ellipse(700, 50, 50, 50);
    ellipse(50, 450, 50, 50);
    ellipse(700, 450, 50, 50);
}
function take_snapshot(){
    save("photo.png");
}