import { Routes } from '@angular/router';
import { TableUser } from './dashboard/table-user';
import { Home } from './home/home';
import { CreateUserForm } from './create-user-form/create-user-form';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'users',
        component: TableUser
    },
    {
        path: 'users/new',
        component: CreateUserForm
    },
];
