import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../services/user.service';
import { EventService } from '../services/event.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FilteruserPipe } from '../pipes/filteruser.pipe';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', component: UserComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [ UserComponent,FilteruserPipe ],
      providers: [UserService, EventService],
      imports: [FormsModule, ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }),
        HttpClientModule,
        ModalModule.forRoot(),
        RouterModule.forRoot(routes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
