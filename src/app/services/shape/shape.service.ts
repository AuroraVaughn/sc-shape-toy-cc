import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CanvasService } from '../canvas';
import { Rectangle, Circle } from './'
import { AnyShapeInstance, IShapeButton, shapes } from './IShapeButton';
@Injectable({
  providedIn: 'root'
})


export class ShapeService {
  get shapes (){ return shapes }
  constructor(public canvasService: CanvasService) { }

  addShape(shape: IShapeButton){
    this.canvasService.addShape(new shape.type())
  }

  getFormGroupForShape(shape:AnyShapeInstance){
    if(shape instanceof Circle){
      return this.getCircleFormGroup(shape)
    }else{
      return this.getRectangleFormGroup(shape as Rectangle)
    }
  }
  getCircleFormGroup(circle:Circle):FormGroup{
    return new FormGroup({
      radius: new FormControl(circle.radius),
      fillColor: new FormControl(circle.fillColor),
    })
  }

  getRectangleFormGroup(rect:Rectangle):FormGroup{
    return new FormGroup({
      width: new FormControl(rect.width),
      height: new FormControl(rect.height),
      fillColor: new FormControl(rect.fillColor),
    })
  }
}
