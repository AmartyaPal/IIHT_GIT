import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from '../services/task.service';
import { EventService } from '../services/event.service';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { FilteruserPipe } from '../pipes/filteruser.pipe';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', component: ProjectComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent,FilteruserPipe ],
      providers: [TaskService, EventService,ProjectService,UserService
      ],
      imports: [FormsModule, ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }),
        HttpClientModule,
        ModalModule.forRoot(),
        RouterModule.forRoot(routes),
        Ng5SliderModule,
        BsDatepickerModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
