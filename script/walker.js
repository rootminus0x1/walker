// walker

class Leg {
    constructor(length, width, rot) {
        this.length = length;
        this.width = width;
        this.rotation = rot;
    }

    move() {
        
        this.rotation += 0.05;
    }

    display() {
        push();
        translate(0, -this.length/2);
        rotateZ(this.rotation);
        translate(0, this.length/2);
        cylinder(this.width, this.length);
        pop();
    }

}

class Walker {
    constructor(height, x, y, dx, dy)
    {
        this.head = height * 0.15;
        this.body = height * 0.4;
        this.leg = height * 0.45;

        this.bodyWidth = this.body / 5;
        let legWidth = this.bodyWidth / 2;

        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;

        this.leftLeg = new Leg(this.leg, legWidth, 0);
        this.rightLeg = new Leg(this.leg, legWidth, QUARTER_PI);
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
        this.leftLeg.move();
        this.rightLeg.move();
        
    }

    display() {

        push();
        noStroke();
        translate(this.x, this.y, 0);

        ambientLight(255);
        ambientMaterial(255, 102, 94);
        normalMaterial();
    
        this.leftLeg.display();
        this.rightLeg.display();

        translate(0, -this.leg/2 - this.body/2, 0);
        cylinder(this.bodyWidth, this.body);

        translate(0, -this.body/2 -this.head/2, 0);
        sphere(this.head/2);

        pop();
    }
}
