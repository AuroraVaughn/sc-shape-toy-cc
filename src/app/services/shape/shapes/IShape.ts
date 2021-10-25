import { ShapeDefaults, ShapeNames } from './shape-defaults';

export interface IShape {
  name: string;
  x: number;
  y: number;
  fillColor: string;
}

/**
 * @description abstract class used to establish the contract for polymorphic methods
 *
 */
export abstract class Shape {
  abstract name: ShapeNames
  public x: number;
  public y: number;
  public fillColor: string = ShapeDefaults.FillColor;

  constructor(xPos?: number, yPos?: number, fillColor?: string) {
    this.x = xPos || ShapeDefaults.XPos;
    this.y = yPos || ShapeDefaults.YPos;
    this.fillColor = fillColor || ShapeDefaults.FillColor;
  }
  /**
   * @description draws self on canvas context.
   * WARNING: Always begin method with ctx.beginPath() to start a new path.
   * @param {CanvasRenderingContext2D} ctx
   * @returns self
   */
  abstract draw(ctx: CanvasRenderingContext2D): this;

  /**
   * @description detects if a set of coordinates are inside of the shape
   * @param {ICoordinates} coordinates {x, y}
   */
  abstract detect(coordinates:ICoordinates): this | false

  /**
   * @description creates outline for the selected shape
   *  generally done by creating a larger /stroke/ version of the shape
   * @param {CanvasRenderingContext2D} ctx
   */
  abstract selected(ctx: CanvasRenderingContext2D):void

}
