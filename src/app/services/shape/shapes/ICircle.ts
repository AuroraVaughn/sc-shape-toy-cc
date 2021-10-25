import { HostListener } from '@angular/core';
import { IShape, Shape } from './IShape';
import { ShapeDefaults, ShapeNames } from './shape-defaults';

interface ICircle extends IShape {
  radius: number;
}

export class Circle extends Shape {
  name = ShapeNames.Circle;
  radian = 2 * Math.PI;
  shiftKeyPressed= false;
  radius!: number;
  constructor(radius?: number, x?: number, y?: number, fillColor?: string) {
    super(x || radius, y || radius, fillColor);
    this.radius = radius || ShapeDefaults.CircleRadius;
  }

  fromObject(obj: ICircle) {
    return new Circle(obj.radius, obj.x, obj.y, obj.fillColor);
  }

  createShape(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.arc(this.x, this.y, this.radius, 0, this.radian, false);
  }
  draw(ctx: CanvasRenderingContext2D) {
    this.createShape(ctx);
    ctx.fill();
    return this;
  }

  detect({ x, y }: ICoordinates) {
    const a = x - this.x
    const b = y - this.y
    const distanceToPoint =  Math.sqrt( a*a + b*b )

    if (distanceToPoint <= this.radius) return this;
    else return false;
  }

  selected(ctx: CanvasRenderingContext2D) {
    ctx.arc(this.x, this.y, this.radius + 5, 0, this.radian, false);
    ctx.strokeStyle = ShapeDefaults.SelectBorderColor
    ctx.lineWidth = ShapeDefaults.SelectBorderWidth
    ctx.stroke()
  }
}
