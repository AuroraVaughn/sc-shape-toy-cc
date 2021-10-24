import { IShape, Shape } from "./IShape";

export interface IRectangle extends IShape {
  width: number,
  height: number
}

export class Rectangle extends Shape {
  static type = 'rectangle';

  constructor(
    public x: number,
    public y: number,
    public fillColor: string,
    public width: number,
    public height: number
  ) {
    super(x, y, fillColor);
  }

  fromObject(obj: IRectangle) {
    return new Rectangle(obj.x, obj.y, obj.fillColor, obj.width, this.height);
  }
  draw(ctx: CanvasRenderingContext2D){
    ctx.fillStyle = this.fillColor
    ctx.fillRect(this.x,this.y, this.width, this.height)

    return this
  }
}
