import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'email-visualizer-for-testmail.app';
  constructor(private router:Router){}
  ngAfterViewInit(): void {
    if(localStorage.getItem('API_URL')){
      this.router.navigate(['/viewemails'])
    }else{
      this.router.navigate(['/apidetails'])
    }
  }
}
