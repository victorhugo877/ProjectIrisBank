import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoList } from '../models/todoList.model';
import { environment } from '../../environments/environment.prod';

import swal from 'sweetalert2';


@Injectable()
export class TodoListService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public getTodoList(): Observable<TodoList[]> {
    const url: string = environment.API_REST_URL + `/todo`;
    return this._httpClient.get<TodoList[]>(url);
  }
}
