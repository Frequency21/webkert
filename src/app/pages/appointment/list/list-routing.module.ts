import { ListComponent } from './list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'card', pathMatch: 'full' },
  {
    path: '',
    component: ListComponent,
    data: { title: 'Appointments' },
    children: [
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./card/card.module').then(m => m.CardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule { }
