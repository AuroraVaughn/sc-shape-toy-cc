import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  private ctx:CanvasRenderingContext2D | null = null
  constructor() { }

  /**
   * @description use in ngAfterViewInit to pass canvas element to service
   * @param canvas {{HTMLCanvasElement}}
   */
  init(canvas:HTMLCanvasElement, size = {}){
    if(!this.ctx){
      this.ctx = canvas.getContext('2d')
    }
    return this.ctx
  }

  calcWidth(percentageOfWindow: number){
    return Math.floor(window.innerWidth * percentageOfWindow / 100)
  }
  calcHeight(percentageOfWindow: number){
    return Math.floor(window.innerHeight * percentageOfWindow / 100)
  }
}

