import { Injectable, OnDestroy } from '@angular/core';
import { AnyShapeInstance } from '../shape/IShapeButton';

@Injectable({
  providedIn: 'root',
})
export class CanvasService implements OnDestroy {
  public canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private currentShapes = Array<AnyShapeInstance>();
  selectedShapes = Array<AnyShapeInstance>();
  private shiftKeyPressed = false;
  constructor() {
    window.addEventListener('keydown', this.setShift);
    window.addEventListener('keyup', this.setShift);
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.setShift);
    window.removeEventListener('keyup', this.setShift);
  }
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

    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    return this.ctx;
  }

  setShift = (e: KeyboardEvent) => {
    this.shiftKeyPressed = e.shiftKey;
  };

  addMouseDownEvents(event: MouseEvent) {
    this.canvas.addEventListener('mouseup', this.removeListenersOnMouseUp);
    if (this.selectedShapes.length) {
      this.canvas.addEventListener('mousemove', this.moveSelected);
    }
  }

  removeListenersOnMouseUp = () => {
    this.canvas.removeEventListener('mousemove', this.moveSelected);
    this.canvas.removeEventListener('mouseup', this.removeListenersOnMouseUp);
  };
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

  getMousePosistion = (e: MouseEvent): ICoordinates => {
    const boundary = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - boundary.left,
      y: e.clientY - boundary.top,
    };
  };
  checkClick = (e: MouseEvent): false | AnyShapeInstance => {
    e.preventDefault();
    if (this.currentShapes.length === 0) return false;

    const click: ICoordinates = this.getMousePosistion(e);

    for (let i = this.currentShapes.length - 1; i >= 0; i--) {
      const shape = this.currentShapes[i];

      if (shape.detect(click)) return shape;
    }
    return false;
  };

  selectOneShape = (e: MouseEvent) => {
    e.preventDefault();
    const clickedShape = this.checkClick(e);
    if (clickedShape && this.shiftKeyPressed) {
      const notSelected = !this.selectedShapes.find((s) => s === clickedShape);
      if (notSelected) {
        this.selectedShapes.push(clickedShape);
      }
    } else if (clickedShape) {
      this.selectedShapes = [clickedShape];
      clickedShape.selected(this.ctx);
    } else {
      this.selectedShapes = [];
    }
    this.draw();
  };

    moveSelected = (e: MouseEvent) => {
      e.preventDefault();
      const mouse = this.getMousePosistion(e);
      this.selectedShapes.forEach((shape) => {
        // TODO: Fix this to work in chrome. movement is bugged
        shape.x += e.movementX;
        shape.y += e.movementY;
      });
      this.draw();
    };

  deleteShape(shape: unknown) {
    this.currentShapes = this.currentShapes.filter((s) => s !== shape);
    this.selectedShapes = this.selectedShapes.filter((s) => s !== shape);
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
