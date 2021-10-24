import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { WorkingWithShapesComponent } from './pages/working-with-shapes/working-with-shapes.component';
import { AddShapeComponent } from './components/add-shape/add-shape.component';
import { ShapeControlComponent } from './components/shape-control/shape-control.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    WorkingWithShapesComponent,
    AddShapeComponent,
    ShapeControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
