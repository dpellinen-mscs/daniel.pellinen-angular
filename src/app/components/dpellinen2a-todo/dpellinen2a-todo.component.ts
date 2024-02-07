import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import {TodoItem} from '../shared/todo-item.model'
@Component({
  selector: 'app-dpellinen2a-todo',
  templateUrl: './dpellinen2a-todo.component.html',
  styleUrls: ['./dpellinen2a-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Dpellinen2aTodoComponent implements OnInit {
 public itemNameInput = new FormControl('', [Validators.required]);
 public todoItem!: TodoItem;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<TodoItem>('https://localhost:5001/api/todoitems/2').subscribe(data => {

      this.todoItem = new TodoItem(
        data["id"],
        data["name"],
        data["isComplete"]);
        console.log(this.todoItem);
        this.itemNameInput.setValue(this.todoItem.name);
      });
  }
  
}
