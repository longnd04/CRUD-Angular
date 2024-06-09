import { Routes } from '@angular/router';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { privateRouterGuard } from './private-router.guard';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  {
    path: 'add',
    component: ProductAddComponent,
    canActivate: [privateRouterGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
