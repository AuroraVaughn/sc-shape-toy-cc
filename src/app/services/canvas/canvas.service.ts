import { Injectable } from '@angular/core';
import { AnyShapeInstance } from '../shape/IShapeButton';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private currentShapes = Array<AnyShapeInstance>();
  selectedShapes = Array<AnyShapeInstance>();
  private shiftKeyPressed = false;
  constructor() {  }

  /**
   * @description use in ngAfterViewInit to pass canvas element to service
   * @param canvas {{HTMLCanvasElement}}
   */
  init(canvas: HTMLCanvasElement, size = {}) {
    this.canvas = canvas;
    this.canvas.addEventListener('click', (e) => this.selectOneShape(e));
    this.canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.addMouseDownEvents(e);
    });
    window.addEventListener('keydown', (e) => {this.keyPressed(e)})
    window.addEventListener('keyup', (e) => {this.keyReleased(e)})
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    return this.ctx;
  }

  keyPressed=(e:KeyboardEvent)=>{
    if(e.shiftKey) this.shiftKeyPressed = true;
  }
  keyReleased=(e:KeyboardEvent)=>{
    if(e.shiftKey) this.shiftKeyPressed = false;
  }

  addMouseDownEvents(event: MouseEvent) {
    this.canvas.addEventListener(
      'mouseup',
      this.removeListenersOnMouseUp
    );
    if (this.selectedShapes.length) {
      this.canvas.addEventListener('mousemove', this.moveSelected);
    }
  }

  removeListenersOnMouseUp=()=>{
    console.log('up')
    this.canvas.removeEventListener('mousemove', this.moveSelected);
    this.canvas.removeEventListener(
      'mouseup',
      this.removeListenersOnMouseUp
    );
  }
  /**
   * @description adds shape to state and makes call to redraw canvas
   * @param shape {AnyShapeInstance}
   */
  addShape(shape: AnyShapeInstance) {
    this.currentShapes.push(shape);
    this.draw();
  }

  clearCanvas() {
    this.ctx?.clearRect(0, 0, this.canvas?.width, this.canvas?.height);
  }
  /**
   * @description redraws canvas
   * @param shape {AnyShapeInstance}
   */
  draw() {
    this.clearCanvas();
    this.currentShapes.forEach((shape) =>
      shape.draw(this.ctx as CanvasRenderingContext2D)
    );
    this.selectedShapes.forEach((shape) =>
      shape.selected(this.ctx as CanvasRenderingContext2D)
    );
  }

  getMousePos=(e: MouseEvent): ICoordinates =>{
    const boundary = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - boundary.left,
      y: e.clientY - boundary.top,
    };
  }
  checkClick=(e: MouseEvent): false | AnyShapeInstance=> {
    e.preventDefault()
    if (this.currentShapes.length === 0) return false;

    const click: ICoordinates = this.getMousePos(e);

    for (let i = this.currentShapes.length - 1; i >= 0; i--) {
      const shape = this.currentShapes[i];

      if (shape.detect(click)) return shape;
    }
    return false;
  }

  selectOneShape=(e: MouseEvent)=> {
    e.preventDefault()
    const clickedShape = this.checkClick(e);
    if (clickedShape && this.shiftKeyPressed){
      this.selectedShapes.push(clickedShape)
    }
    else if(clickedShape) {
      this.selectedShapes = [clickedShape];
      clickedShape.selected(this.ctx);
    } else {
      this.selectedShapes = [];
    }
    this.draw();
  }

  moveSelected=(e: MouseEvent)=> {
    e.preventDefault()

    this.selectedShapes.forEach((shape) => {
      shape.x += e.movementX;
      shape.y += e.movementY;
    });
    this.draw();
  }

  /**
   *
   * @param percentageOfWindow
   * @returns
   */
  calcWidth(percentageOfWindow: number) {
    return Math.floor((window.innerWidth * percentageOfWindow) / 100);
  }

  calcHeight(percentageOfWindow: number) {
    return Math.floor((window.innerHeight * percentageOfWindow) / 100);
  }
}
