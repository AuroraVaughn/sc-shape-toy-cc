import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithShapesComponent } from './working-with-shapes.component';

describe('WorkingWithShapesComponent', () => {
  let component: WorkingWithShapesComponent;
  let fixture: ComponentFixture<WorkingWithShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWithShapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
