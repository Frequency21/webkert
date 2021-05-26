import { ListComponent } from './list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from './table/table.module';

const routes: Routes = [
    { path: '', redirectTo: 'table', pathMatch: 'full' },
    {
        path: '',
        component: ListComponent,
        data: { title: 'Appointments' },
        children: [
            {
                path: 'table',
                loadChildren: () => import('./table/table.module').then(m => m.TableModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListRoutingModule { }
