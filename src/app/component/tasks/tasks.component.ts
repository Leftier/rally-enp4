
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TaskService } from '../../services/task.service';

import { Task } from '../../models/task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  editState: boolean = false;
  taskToEdit: Task;

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  ngOnChanges() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(event, task) {
    const response = confirm('¿Estás seguro de querer borrarlo?');
    if (response ) {
      this.taskService.deleteTask(task);
    }
    return;
  }


  refresh(): void {
    window.location.reload();
  }

 

}
