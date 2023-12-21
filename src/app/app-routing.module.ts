import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiDetailsComponent } from './components/api-details/api-details.component';
import { ViewEmailsComponent } from './components/view-emails/view-emails.component';

const routes: Routes = [
  { path:'', component:AppComponent },
  { path:'apidetails', component:ApiDetailsComponent },
  { path:'viewemails', component:ViewEmailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
