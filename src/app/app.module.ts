import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { APP_ROUTES } from '../app/routes';
import { FormsComponent } from './pages/forms/forms.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AnimateComponent } from './pages/animate/animate.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    NotfoundComponent,
    AnimateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
