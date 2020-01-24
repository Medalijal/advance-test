import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvaluateComponent} from './evaluate.component';
import {RouterModule, Routes} from '@angular/router';
import {ContentAreaComponent} from './components/content-area/content-area.component';
import {ProgressTableComponent} from './components/progress-table/progress-table.component';
import {ChartsModule} from '../../shared/charts/charts.module';
import {CarouselsModule} from '../../shared/carousels/carousels.module';

const routes: Routes = [
  {path: '', component: EvaluateComponent},
];

@NgModule({
  declarations: [
    EvaluateComponent,
    ContentAreaComponent,
    ProgressTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    CarouselsModule
  ]
})
export class EvaluateModule {
}
