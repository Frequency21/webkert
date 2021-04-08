import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListModule } from '../appointment/list/list.module';

const routes: Routes = [
  { path: '', redirectTo: 'appointments', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'appointments',
        // loadChildren: () => ListModule
        loadChildren: () => import('../appointment/list/list.module').then(m => m.ListModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
