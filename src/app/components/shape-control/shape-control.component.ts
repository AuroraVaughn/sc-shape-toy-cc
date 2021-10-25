import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CanvasService } from 'src/app/services/canvas';
import { ShapeService } from 'src/app/services/shape';
import { AnyShapeInstance } from 'src/app/services/shape/IShapeButton';

@Component({
  selector: '[shape] app-shape-control',
  templateUrl: './shape-control.component.html',
  styleUrls: ['./shape-control.component.scss']
})
export class ShapeControlComponent implements OnInit {
  @Input() shape!: any

  shapeForm: FormGroup = new FormGroup({})
  subscriptions = Array<Subscription> ()
  constructor(public canvasService: CanvasService, public shapeService: ShapeService) { }

  ngOnInit(): void {
    this.shapeForm = <FormGroup>this.shapeService.getFormGroupForShape(this.shape as AnyShapeInstance)
    this.subscriptions.push(this.shapeForm.valueChanges.subscribe(this.copyState))
  }

  copyState=(newState:any)=>{
    for (const [key, value] of Object.entries(newState)) {
      this.shape[key] = value
    }
    this.canvasService.draw()
  }

  deleteShape(){

  }



}
