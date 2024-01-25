import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModalComponent } from './modal/modal.component';
import { ModulesHomeComponent } from './modules-home/modules-home.component';

@NgModule({
  declarations: [ModalComponent, ModulesHomeComponent],
  imports: [CommonModule, ModulesRoutingModule, SharedModule],
})
export class ModulesModule {}
