import { Component, OnInit } from '@angular/core';
import { CanvasService } from 'src/app/services/canvas';

@Component({
  selector: 'app-shape-control-list',
  templateUrl: './shape-control-list.component.html',
  styleUrls: ['./shape-control-list.component.scss']
})
export class ShapeControlListComponent implements OnInit {

  constructor(public canvasService: CanvasService) { }

  ngOnInit(): void {
  }

}
