import { Injectable } from '@angular/core';
import { CanvasService } from '../canvas';
import { Rectangle, Circle } from './'
import { IShapeButton, shapes } from './IShapeButton';
@Injectable({
  providedIn: 'root'
})


export class ShapeService {
  get shapes (){ return shapes }
  constructor(public canvasService: CanvasService) { }

  addShape(shape: IShapeButton){
    this.canvasService.addShape(new shape.type())
  }

}
