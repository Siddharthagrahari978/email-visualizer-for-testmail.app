import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-email',
  templateUrl: './preview-email.component.html',
  styleUrls: ['./preview-email.component.scss']
})
export class PreviewEmailComponent implements AfterViewInit {
 constructor(public dialogRef:MatDialogRef<PreviewEmailComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}
  ngAfterViewInit(): void {
    let body:any = document.getElementById('body')
    body.src='data:text/html,' + encodeURIComponent(this.data.html);
  }
}
