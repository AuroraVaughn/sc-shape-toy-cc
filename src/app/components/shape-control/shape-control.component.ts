import { Component, Input, OnInit } from '@angular/core';
import { CanvasService } from 'src/app/services/canvas';
import { AnyShapeInstance } from 'src/app/services/shape/IShapeButton';

@Component({
  selector: '[shape] app-shape-control',
  templateUrl: './shape-control.component.html',
  styleUrls: ['./shape-control.component.scss']
})
export class ShapeControlComponent implements OnInit {
  @Input() shape!: AnyShapeInstance
  constructor(public canvasService: CanvasService) { }

  ngOnInit(): void {
  }

}
