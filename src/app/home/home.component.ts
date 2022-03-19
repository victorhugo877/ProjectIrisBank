import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TodoListService } from '../services/todoList.service';
import { AppFacade } from '../+state/app.facade';
import { TodoList, TodoListOptions } from '../models/todoList.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import { nonEmptyArray, nonEmptyString } from 'check-types';
import { take } from 'rxjs/operators';
import { boolean } from 'check-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listTodo: TodoList[] = [];
  public listTodoOpcion :TodoListOptions[] = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Type One'},
    {id: 3, name: 'Type Two'},
  ]
  public optionSelected:string = '';
  public maxIdArray:number = 0;
  public isDataTodo:boolean = false;
  public aceptDeleted:boolean = false;
  public idDeleted:number = 0;
  public idSelectType:number = 0;

  constructor(
    public readonly todoListService: TodoListService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private formTodoList: FormBuilder,
    readonly appFacade:AppFacade,
  ) { }
  public nameTaskTodo = this.formTodoList.group({
    nameTask: '',
  });
  ngOnInit(): void {

    // this.getTask();
    this.appFacade.alertViewAcc$.subscribe((data: boolean): void => {
      if (boolean(data)) {
        this.aceptDeleted = data;
        if(this.aceptDeleted){
          this.confirmDeletedTask();
        }
      }
    });
    this.changeDetectorRef.detectChanges();
  }
  addNewTodo():void {
    if(nonEmptyArray(this.listTodo) || this.idSelectType > 0) {
      let nameTask = this.nameTaskTodo.value.nameTask;
      if(nameTask.length > 19){
        nameTask = nameTask.slice(0, 19) + '...';
      }
      if(nonEmptyString(nameTask)){
        let newObjectArray:TodoList = {
          id:0,
          name: ''
        };
        this.nameTaskTodo.controls.nameTask.setValue('');
        this.maxIdArray = this.listTodo.length > 0 ? this.listTodo[this.listTodo.length - 1].id : this.listTodo.length;
        newObjectArray = {
          id: this.maxIdArray + 1,
          name: nameTask
        }
        this.listTodo = [
          ...this.listTodo,
          newObjectArray
        ];
        this.isDataTodo = true;
        this.appFacade.setAlertViewSuccess(true);
      } else {
        this.appFacade.setAlertViewError(true);
      }
    } else {
      this.appFacade.setAlertViewError(true);
    }
    
    
    this.changeDetectorRef.detectChanges();
  }

  getTask(): void {
    this.todoListService.getTodoList().pipe(take(1)).subscribe((resp: TodoList[]) => {
      this.listTodo = resp;
      if(this.listTodo.length > 0){
        this.isDataTodo = true;
      }
    });
    this.changeDetectorRef.detectChanges();
  }

  changeOptions(value):void {
    this.idSelectType = value;
    if(value === 1) {
      this.getTask();
    } else {
      this.listTodo = [];
      this.isDataTodo = false;
    }
    this.optionSelected = this.listTodoOpcion[value].name;
    this.changeDetectorRef.detectChanges();
 }

 deletedTask(id):void {
   this.idDeleted = id
  this.appFacade.setAlertViewConf(true);
 }

 confirmDeletedTask():void {
  this.listTodo = this.listTodo.filter((item) => item.id !== this.idDeleted);
  this.appFacade.setAlertViewAcc(false);
  this.appFacade.setAlertViewConfDel(true);
  this.changeDetectorRef.detectChanges();
 }

 trackById(index: number, listTodo: any): number {
  return listTodo.index;
}

}
