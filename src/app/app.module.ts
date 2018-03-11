//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing }        from './app.routing';
import { environment } from "../environments/environment"
import { CountdownTimerModule, CountdownTimer } from 'ngx-countdown-timer';

//Componentes
import { AppComponent } from './app.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { LoginComponent } from './component/login/index';
import { InicioComponent } from './component/inicio/index';
import { AddTasksComponent } from './component/add-tasks/add-tasks.component';


//Firebase
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

//Servicios
import { TaskService} from './services/task.service';
import { AuthService } from './services/auth.service';

//Guard
import { AuthGuard } from './guards/auth.guard';

//Mensaje
import { FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTasksComponent,
    LoginComponent,
    InicioComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    routing,
    AngularFireAuthModule,
    FlashMessagesModule,
    ReactiveFormsModule,
    CountdownTimerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs')
  ],
  providers: [TaskService, AuthService, AngularFireAuth, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
