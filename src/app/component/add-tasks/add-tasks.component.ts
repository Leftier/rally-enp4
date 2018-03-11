import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddTasksComponent implements OnInit {
  task: Task = {
   equipo: '',
   grupo: '',
   nombre1: '' ,
   numerocuenta1: '',
   nombre2: '' ,
   numerocuenta2: '' ,
   nombre3: '' ,
   numerocuenta3: '' 

  };
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit() {
    
    if(this.task.equipo != '' && this.task.grupo != ''  &&
       this.task.nombre1 != ''  && this.task.numerocuenta1 != '' &&
       this.task.nombre2 != ''  && this.task.numerocuenta2 != '' &&
       this.task.nombre3 != ''  && this.task.numerocuenta3 != '') {

      this.taskService.addTask(this.task);
      this.task.grupo = '';
      this.task.equipo = '';
      this.task.nombre1 = "";
      this.task.numerocuenta1 = "";
      this.task.nombre2 = "";
      this.task.numerocuenta2 = "";
      this.task.nombre3 = "";
      this.task.numerocuenta3 = "";
    }
  }

}