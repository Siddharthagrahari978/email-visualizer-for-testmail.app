import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiDetailsComponent } from './components/api-details/api-details.component';
import { ViewEmailsComponent } from './components/view-emails/view-emails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';

//Angular Material Imports
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { PreviewEmailComponent } from './components/view-emails/preview-email/preview-email.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiDetailsComponent,
    ViewEmailsComponent,
    PreviewEmailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    //Angular Matarial Imports
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
