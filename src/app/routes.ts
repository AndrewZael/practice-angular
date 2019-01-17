import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AnimateComponent } from './pages/animate/animate.component';
import { MaterialComponent } from './pages/material/material.component';

const router: Routes = [
    {path: '', component: AnimateComponent},
    {path: 'animate', component: AnimateComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'material', component: MaterialComponent},
    {path: '**', component: NotfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(router);
