import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PieChartComponent} from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PieChartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartsModule {
}
