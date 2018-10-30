import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material-module';
import { ScaffoldingDetailComponent } from './scaffolding-detail.component';

export const routes: Routes = [
  { path: '', component: ScaffoldingDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ScaffoldingDetailComponent],
  exports: [RouterModule],
})
export class ScaffoldingDetailModule { }
