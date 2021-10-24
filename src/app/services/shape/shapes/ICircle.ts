import { IShape, Shape } from './IShape';

interface ICircle extends IShape {
  radius: number;
}

export class Circle extends Shape {
  static type = 'circle';

  constructor(
    public x: number,
    public y: number,
    public fillColor: string,
    public radius: number
  ) {
    super(x || radius, y || radius, fillColor);
  }


  fromObject(obj: ICircle) {
    return new Circle(
      obj.x,
      obj.y,
      obj.fillColor,
      obj.radius
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.fillColor;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);

    return this;
  }
}
