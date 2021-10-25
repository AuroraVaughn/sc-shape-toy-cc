import { Component, OnInit } from '@angular/core';
import { ShapeService } from 'src/app/services/shape';

@Component({
  selector: 'app-working-with-shapes',
  templateUrl: './working-with-shapes.component.html',
  styleUrls: ['./working-with-shapes.component.scss'],
})
export class WorkingWithShapesComponent implements OnInit {
  constructor(public shapeService: ShapeService) {}

  ngOnInit(): void {}
}
