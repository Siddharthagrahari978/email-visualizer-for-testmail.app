import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmailsComponent } from './view-emails.component';

describe('ViewEmailsComponent', () => {
  let component: ViewEmailsComponent;
  let fixture: ComponentFixture<ViewEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
