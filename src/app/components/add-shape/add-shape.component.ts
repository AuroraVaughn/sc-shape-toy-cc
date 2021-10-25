import { Component, Input, OnInit } from '@angular/core';
import { ShapeService } from 'src/app/services/shape';
import { IShapeButton } from 'src/app/services/shape/IShapeButton';

@Component({
  selector: 'app-add-shape',
  templateUrl: './add-shape.component.html',
  styleUrls: ['./add-shape.component.scss'],
})
export class AddShapeComponent implements OnInit {
  @Input() shape!: IShapeButton
  constructor(public shapeService: ShapeService) {}

  ngOnInit(): void {}
}
