import { Routes } from '@angular/router';
import { CustomermainpageComponent } from './customermainpage/customermainpage.component';
import { Homeroutes } from './Modules/Home/home.routes';
import { Paidroutes } from './Modules/Paid/paid.routes';
import { Accountroutes } from './Modules/Account/account.routes';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'logpage', component: LoginpageComponent,
    children: [
        {path:'login', component: LoginComponent},
        {path: '', redirectTo: 'login', pathMatch:'full'}
    ]
    },
    {path: 'custo', component: CustomermainpageComponent,
    children: [
        {
            path: 'Homepage',
            loadChildren: () => import('./Modules/Home/home.routes').then(r=>Homeroutes)
        },
        {
            path: 'Paidhomepage',
            loadChildren: () => import('./Modules/Paid/paid.routes').then(r=>Paidroutes)
        },
        {
            path: 'Accounthomepage',
            loadChildren: () => import('./Modules/Account/account.routes').then(r=>Accountroutes)
        },

        {path: '', redirectTo: 'Homepage', pathMatch: 'full'}
    
        ]
    },
    
    {path: '', redirectTo: 'logpage', pathMatch: 'full'}
];
