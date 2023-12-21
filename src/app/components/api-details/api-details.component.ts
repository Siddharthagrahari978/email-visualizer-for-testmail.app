import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.scss']
})
export class ApiDetailsComponent {
  constructor(private fb:FormBuilder, private api:ApiService,private _snackBar: MatSnackBar, private router:Router){
    localStorage.removeItem('API_URL');
  }
  form = this.fb.group({
    api_url:['', Validators.required]
  })
  submit(){
    if(this.form.value.api_url){
      this.api.get(this.form.value.api_url).subscribe({
        next:(res)=>{
          this._snackBar.open('Successfully added the API URL.');
          localStorage.setItem('API_URL', this.form.value.api_url?this.form.value.api_url:'')
          this.router.navigate(['/viewemails'])
        },
        error:this.error
      })
    }
  }
  error = (err:any) =>{
    console.error(err)
    this._snackBar.open(err.message, 'Okay');
  }
}
