import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AccmainpageComponent } from './accmainpage/accmainpage.component';

export const Accountroutes: Routes = [
    {path: 'Accounthomepage', component: AccmainpageComponent,
        children: [
            {path: 'profile', component: ProfileComponent},
            {path: '', redirectTo: 'profile', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'Accounthomepage', pathMatch: 'full'}
];
