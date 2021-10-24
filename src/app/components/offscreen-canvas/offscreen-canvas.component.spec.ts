import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffscreenCanvasComponent } from './offscreen-canvas.component';

describe('OffscreenCanvasComponent', () => {
  let component: OffscreenCanvasComponent;
  let fixture: ComponentFixture<OffscreenCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffscreenCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffscreenCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
