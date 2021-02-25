var car, wall;
var speed, weight;

function setup() {
    var canvas = createCanvas(800, 400);
    canvas.shapeColor = 'white'


    speed = random(55, 90);
    weight = random(400, 1500);

    speed2 = random(55, 90);
    weight2 = random(400, 1500);

    speed3 = random(55, 90);
    weight3 = random(400, 1500);

    car = createSprite(50, 100, 50, 50);
    car.shapeColor = 'cyan'

    wall = createSprite(700, 100, 60, 60);
    wall.shapeColor = "orange"

    car2 = createSprite(50, 200, 50, 50);
    car2.shapeColor = 'cyan'

    wall2 = createSprite(700, 200, 60, 60);
    wall2.shapeColor = "blue"

    car3 = createSprite(50, 300, 50, 50);
    car3.shapeColor = 'cyan'

    wall3 = createSprite(700, 300, 60, 60);
    wall3.shapeColor = "purple"
}


function draw() {
    background(80, 80, 80);

    car.velocityX = speed;

    if (wall.x - car.x < wall.width / 2 + car.width / 2) {
        car.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22500;
        if (deformation > 180) {
            car.shapeColor = color(255, 0, 0);
        }
        if (deformation < 180 && deformation > 100) {
            car.shapeColor = color(230, 230, 0);
        }
        if (deformation < 100) {
            car.shapeColor = color(0, 255, 0);
        }
    }

    car2.velocityX = speed2;

    if (wall2.x - car2.x < wall2.width / 2 + car2.width / 2) {
        car2.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22500;
        if (deformation > 180) {
            car2.shapeColor = color(255, 0, 0);
        }
        if (deformation < 180 && deformation > 100) {
            car2.shapeColor = color(230, 230, 0);
        }
        if (deformation < 100) {
            car2.shapeColor = color(0, 255, 0);
        }
    }

    car3.velocityX = speed3;

    if (wall3.x - car3.x < wall3.width / 2 + car3.width / 2) {
        car3.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22500;
        if (deformation > 180) {
            car33.shapeColor = color(255, 0, 0);
        }
        if (deformation < 180 && deformation > 100) {
            car3.shapeColor = color(230, 230, 0);
        }
        if (deformation < 100) {
            car3.shapeColor = color(0, 255, 0);
        }
    }
    drawSprites();
}