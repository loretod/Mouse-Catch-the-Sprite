import kaboom from "kaboom";

// initialize context
kaboom({
	background: [ 255, 250, 205 ],
});

// load assets
loadSprite("dino", "sprites/Dino.png");
loadSprite("donut", "sprites/Donut.png");
// add a character to screen

// Add multiple donuts
for (let i = 0; i < 10; i++) {

	// generate a random point on screen
	// width() and height() gives the game dimension
	const x = rand(0, width())
	const y = rand(0, height())

	add([
		sprite("donut"),
		pos(x, y),
    scale(.2),
    area(),
    "donut",
	])
};

//Add dino with a list of properties
const dino = add([
	// list of components
	sprite("dino"),
	pos(80, 40),
	area(),
  scale(.3),
]);

//have dino follow the mouse position and remove the cursor
dino.onUpdate(() => {
	dino.pos = mousePos();
  cursor("none");
});

//detect when dino and donut collide- then destroy the donut and burp. Note: ensure the donut has a tag of donut placed in "" as well as having the area() property. Collide will not work otherwise.
dino.onCollide("donut", (donut) => {
	destroy(donut);
  burp();
});

//play Kaboom animation when the mouse is clicked
onClick(() => addKaboom(mousePos()));
