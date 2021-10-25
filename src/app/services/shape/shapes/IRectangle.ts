import { IShape, Shape } from './IShape';
import { ShapeDefaults, ShapeNames } from './shape-defaults';

export interface IRectangle extends IShape {
  width: number;
  height: number;
}

export class Rectangle extends Shape {
  name = ShapeNames.Rectangle;

  constructor(
    public x: number = ShapeDefaults.XPos,
    public y: number = ShapeDefaults.YPos,
    public fillColor: string = ShapeDefaults.FillColor,
    public width: number = ShapeDefaults.RectWidth,
    public height: number = ShapeDefaults.RectHeight
  ) {
    super(x, y, fillColor);
  }

  fromObject(obj: IRectangle) {
    return new Rectangle(obj.x, obj.y, obj.fillColor, obj.width, this.height);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    return this;
  }

  detect(event: ICoordinates): false | this {
    return this.detectXandY(event) && this;
  }

  detectXandY({ x, y }: ICoordinates) {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    );
  }

  selected(ctx: CanvasRenderingContext2D){
    ctx.beginPath();
    ctx.strokeStyle=ShapeDefaults.SelectBorderColor
    ctx.lineWidth = ShapeDefaults.SelectBorderWidth
    ctx.strokeRect(this.x - 5, this.y - 5, this.width + 10, this.height +10);
  }
}
