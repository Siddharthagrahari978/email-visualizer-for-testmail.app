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
    localStorage.removeItem('API_KEY');
    localStorage.removeItem('NAMESPACE')
  }
  form = this.fb.group({
    api_key:['', Validators.required],
    namespace:['', Validators.required]
  })
  submit(){
    if(this.form.valid){
      let url = `https://api.testmail.app/api/json?apikey=${this.form.value.api_key}&namespace=${this.form.value.namespace}`
      this.api.get(url).subscribe({
        next:(res)=>{
          this._snackBar.open('Successfully added the API URL.');
          localStorage.setItem('API_KEY', this.form.value.api_key?this.form.value.api_key:'')
          localStorage.setItem('NAMESPACE', this.form.value.namespace?this.form.value.namespace:'')
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
