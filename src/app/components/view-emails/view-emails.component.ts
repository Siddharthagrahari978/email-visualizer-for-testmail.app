import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PreviewEmailComponent } from './preview-email/preview-email.component';

@Component({
  selector: 'app-view-emails',
  templateUrl: './view-emails.component.html',
  styleUrls: ['./view-emails.component.scss']
})
export class ViewEmailsComponent implements AfterViewInit {
  API_KEY!: string | null;
  NAMESPACE!: string | null;
  emails: any[] = [];
  paginator = {
    length: 0,
    pageIndex: 0,
    pageSize: 5,
  }
  today = new Date();
  constructor(private api: ApiService, private _snackBar: MatSnackBar, private router: Router, private fb: FormBuilder, private dialog:MatDialog) { }
  filters = this.fb.group({
    tag: [''],
    timestamp_from: new FormControl<Date | null>(null),
    timestamp_to: new FormControl<Date | null>(null)
  })
  ngAfterViewInit(): void {
    this.API_KEY = localStorage.getItem('API_KEY');
    this.NAMESPACE = localStorage.getItem('NAMESPACE');
    if (this.API_KEY && this.NAMESPACE)
      this.getEmails()
    else
      this.logout()
  }
  getEmails() {
    const url = new URL(`https://api.testmail.app/api/json`)
    this.API_KEY ? url.searchParams.append('apikey', this.API_KEY) : '';
    this.NAMESPACE ? url.searchParams.append('namespace', this.NAMESPACE) : '';
    (this.filters.value.tag && this.filters.value.tag != '') ? url.searchParams.append('tag_prefix', this.filters.value.tag) : '';
    this.filters.value.timestamp_from ? url.searchParams.append('timestamp_from', this.filters.value.timestamp_from.getTime().toString()) : '';
    this.filters.value.timestamp_to ? url.searchParams.append('timestamp_to', this.filters.value.timestamp_to.getTime().toString()) : '';

    //for pagination
    url.searchParams.append('offset', this.paginator.pageIndex.toString())
    url.searchParams.append('limit', this.paginator.pageSize.toString())

    url.searchParams.append('pretty', 'true')
    this.api.get(url.toString()).subscribe({
      next: (res: any) => {
        this.emails = res.emails;
        this.paginator = {
          pageIndex: res.offset,
          pageSize: res.limit,
          length: res.count
        }
      },
      error: this.error
    })
  }
  filter() {
    console.log(this.filters.value)
    this.getEmails()
  }
  reset_filter() {
    this.filters.patchValue(
      {
        tag: '',
        timestamp_from: null,
        timestamp_to: null
      }
    )
    this.getEmails()
  }
  page(e: any) {
    this.paginator.pageIndex = e.pageIndex;
    this.paginator.pageSize = e.pageSize;
    this.getEmails()
  }
  logout() {
    this.router.navigate(['/apidetails'])
  }
  previewMail(email:any){
    this.dialog.open(PreviewEmailComponent, { data:email, width:'90vw', height:'auto'})
  }
  error = (err: any) => {
    console.error(err)
    this._snackBar.open(err.message, 'Okay');
  }
}
