import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgainPassPage } from './again-pass.page';

const routes: Routes = [
  {
    path: '',
    component: AgainPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgainPassPageRoutingModule {}
