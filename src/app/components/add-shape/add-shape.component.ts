import { Component, OnInit } from '@angular/core';
import { CanvasService } from 'src/app/services/canvas';

@Component({
  selector: 'app-add-shape',
  templateUrl: './add-shape.component.html',
  styleUrls: ['./add-shape.component.scss'],
})
export class AddShapeComponent implements OnInit {
  constructor(canvasService: CanvasService) {}

  ngOnInit(): void {}

  addShape() {}
}
