import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoListService } from '../services/todoList.service';
import { TodoList } from '../models/todoList.model';
import { of } from 'rxjs';

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

const TodoListServiceMock = {
    getTask: () => of(todo)
};




describe('Home component', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [
                HomeComponent,
            ],
            providers: [
                // TodoListService
                {
                    provide: TodoListService,
                    useValue: TodoListServiceMock
                }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});