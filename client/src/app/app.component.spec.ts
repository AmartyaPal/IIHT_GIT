import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { FilteruserPipe } from './pipes/filteruser.pipe';
import { ProjectComponent } from './project/project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { ToastrModule } from 'ngx-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserComponent }
    ];
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BsDatepickerModule.forRoot(),
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        }),
        Ng5SliderModule,
        RouterModule.forRoot(routes, { useHash: true })
      ],
      declarations: [
        AppComponent,
        UserComponent,
        FilteruserPipe,
        ProjectComponent,
        AddTaskComponent,
        ViewTaskComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
