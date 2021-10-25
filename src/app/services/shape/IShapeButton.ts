import { Circle, Rectangle } from './shapes';
export type AnyShapeInstance = Rectangle | Circle;
export type AnyShapeType = typeof Rectangle | typeof Circle;
export interface IShapeButton {
  type: AnyShapeType;
  name: string;
}
export const shapes: Array<IShapeButton> = [
  {
    type: Rectangle,
    name: 'Rectangle',
  },
  {
    type: Circle,
    name: 'Circle',
  },
];
