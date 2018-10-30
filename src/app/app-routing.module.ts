import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldingDetailComponent } from 'projects/scaffolding-detail/src/lib/scaffolding-detail.component';

const routes: Routes = [
  // { path: 'detail', loadChildren: 'projects/scaffolding-detail/src/lib/scaffolding-detail.module#ScaffoldingDetailModule' },
  { path: 'detail', component: ScaffoldingDetailComponent },
  { path: '', redirectTo: '/detail', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
