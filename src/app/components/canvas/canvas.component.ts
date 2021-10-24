import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CanvasService } from 'src/app/services/canvas';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit,AfterViewInit  {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(public canvasService:CanvasService) {
  }

  get canvas(){
    return this?.canvasRef?.nativeElement
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.canvasService.init(this.canvas as HTMLCanvasElement)
  }
}
