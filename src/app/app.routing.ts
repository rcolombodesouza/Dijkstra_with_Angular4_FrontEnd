
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guards';
import { FileSearchComponent } from './file-search/file-search.component';

const appRoutes: Routes = [    
    { path: 'login', component: LoginComponent },
    { path: 'search', component: FileSearchComponent },
    { path: 'register', component: RegisterComponent },
           
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);