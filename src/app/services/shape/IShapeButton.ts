import { Circle, Rectangle, ShapeNames } from './shapes';
export type AnyShapeInstance = Rectangle | Circle;

export type AnyShapeType = typeof Rectangle | typeof Circle;

export interface IShapeButton {
  type: AnyShapeType;
  name: string;
}
export const shapes: Array<IShapeButton> = [
  {
    type: Rectangle,
    name: ShapeNames.Rectangle,
  },
  {
    type: Circle,
    name: ShapeNames.Circle,
  },
];
