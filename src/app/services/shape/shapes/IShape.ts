import { ShapeDefaults } from "./shape-defaults";

export interface IShape {
  x: number;
  y: number;
  fillColor: string;
}
export abstract class Shape {
  constructor(
    public x: number = ShapeDefaults.XPos,
    public y: number = ShapeDefaults.XPos,
    public fillColor: string = ShapeDefaults.FillColor
  ) {}

  abstract draw(ctx: CanvasRenderingContext2D):this;
}
