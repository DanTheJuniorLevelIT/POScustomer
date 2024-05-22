import { Routes } from '@angular/router';
import { HomemainpageComponent } from './homemainpage/homemainpage.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TotalcreditComponent } from './totalcredit/totalcredit.component';

export const Homeroutes: Routes = [
    {path: 'Homepage', component: HomemainpageComponent,
        children: [
            {path: 'transac', component: TransactionsComponent},
            {path: 'total', component: TotalcreditComponent},
            {path: '', redirectTo: 'transac', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'Homepage', pathMatch: 'full'}
];
