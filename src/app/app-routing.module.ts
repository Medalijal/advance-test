import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'evaluate', pathMatch: 'full'},
  {path: 'evaluate', loadChildren: () => import('src/app/pages/evaluate/evaluate.module').then(m => m.EvaluateModule)},
  {path: '**', redirectTo: 'evaluate'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
