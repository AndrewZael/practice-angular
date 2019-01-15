import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './pages/forms/forms.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AnimateComponent } from './pages/animate/animate.component';

const router: Routes = [
    {path: '', component: AnimateComponent},
    {path: 'animate', component: AnimateComponent},
    {path: 'forms', component: FormsComponent},
    {path: '**', component: NotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(router);
