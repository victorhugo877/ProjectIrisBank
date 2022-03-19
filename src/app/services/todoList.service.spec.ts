import { TodoListService } from './todoList.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoList } from '../models/todoList.model';
import { environment } from '../../environments/environment.prod';

const todo:TodoList[] = [
	{
		"id": 1,
		"name": ""
	},
	{
		"id": 2,
		"name": ""
	},
	{
		"id": 3,
		"name": ""
	},
	{
		"id": 4,
		"name": ""
	}
  ] 


describe('TodoListService', () => {

    let service: TodoListService;
    let httpMock : HttpTestingController;ß

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                TodoListService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        });
    });

    beforeEach( ()=> {
        service = TestBed.inject(TodoListService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach( () => {
        localStorage.clear();
        jest.resetAllMocks();
    });

    afterAll( () => {
        httpMock.verify();
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('getTodoList return a list of todo and does a get method', () => {
        service.getTodoList().subscribe((resp: TodoList[]) => {
            expect(resp).toEqual(todo);
        });

        const req = httpMock.expectOne(environment.API_REST_URL + `/todo`);
        expect(req.request.method).toBe('GET');
        req.flush(todo);
    });





});