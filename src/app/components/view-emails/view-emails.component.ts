import { AfterViewInit, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-emails',
  templateUrl: './view-emails.component.html',
  styleUrls: ['./view-emails.component.scss']
})
export class ViewEmailsComponent implements AfterViewInit {
  API_URL!:string | null;
  emails:any[]=[];
  constructor(private api:ApiService, private _snackBar: MatSnackBar, private router:Router){}
  ngAfterViewInit(): void {
    this.API_URL = localStorage.getItem('API_URL');
    this.getEmails()
  }
  getEmails(){
    if(this.API_URL)
      this.api.get(this.API_URL).subscribe({
        next:(res:any)=>{
          this.emails = res.emails;
        },
        error:this.error
      })
  }
  logout(){
    this.router.navigate(['/apidetails'])
  }
  error = (err:any) =>{
    console.error(err)
    this._snackBar.open(err.message, 'Okay');
  }
}
