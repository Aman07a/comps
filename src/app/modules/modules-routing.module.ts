import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesHomeComponent } from './modules-home/modules-home.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesHomeComponent,
    children: [
      { path: './', component: ModulesHomeComponent },
      { path: './modal', component: ModalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
