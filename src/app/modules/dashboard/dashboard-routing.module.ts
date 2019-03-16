import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: DashboardComponent },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
