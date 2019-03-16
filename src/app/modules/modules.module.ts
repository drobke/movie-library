import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModulesRoutingModule} from './modules-routing.module';
import {RouterModule} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {LayoutModule} from './layout/layout.module';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    ModulesRoutingModule,
    DashboardModule
  ],
  declarations: [],
  providers: []
})
export class ModulesModule {
}
