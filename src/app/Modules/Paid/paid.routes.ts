import { Routes } from '@angular/router';
import { PaidmainpageComponent } from './paidmainpage/paidmainpage.component';
import { HistoryComponent } from './history/history.component';

export const Paidroutes: Routes = [
    {path: 'Paidhomepage', component: PaidmainpageComponent,
        children: [
            {path: 'history', component: HistoryComponent},
            {path: '', redirectTo: 'history', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'Paidhomepage', pathMatch: 'full'}
];
