import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { APP_ROUTES } from '../app/routes';
import { FormsComponent } from './pages/forms/forms.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AnimateComponent } from './pages/animate/animate.component';
import { MaterialComponent } from './pages/material/material.component';

// material Angular
import { MeterialsModule } from './pages/material/meterials.module';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    NotfoundComponent,
    AnimateComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MeterialsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
