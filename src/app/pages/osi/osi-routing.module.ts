import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsiPage } from './osi.page';

const routes: Routes = [
  {
    path: '',
    component: OsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsiPageRoutingModule {}
