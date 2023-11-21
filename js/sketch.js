function setup() {
	var cnv = createCanvas(windowWidth - 50, windowHeight - 100);
	cnv.parent("mycanvas");
	background(0, 0, 0);
}

function draw() {
	// background(0,0,0);
	var r = map(mouseX, 0, windowWidth, 0, 255);
	var g = map(mouseY, 0, windowHeight, 0, 255);
	background(r, g, 0);
	fill(245, 78, 255);
    translate(mouseX, mouseY);
    rotate(mouseX/50)
	ellipse(0, 0, 80, 80);

	fill(0, 0, 255);
	ellipse(80, 80, 60, 60);
}
