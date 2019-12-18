class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number){
    this.x = x;
    this.y = y;
  }
  
  draw() {
    console.log('X: ' + this.x + ' Y: ' + this.y);
  }
}
// Object    constructor parameters
let point = new Point();
point.draw();
