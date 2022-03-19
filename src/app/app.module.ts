import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AlertModule } from './alert/alert.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoListService } from './services/todoList.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { AppFacade } from './+state/app.facade';
import { reducer } from './+state/app.reducer';
import { AppStateModel } from './models/state/app.state';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import APP_FEATURE_KEY = AppStateModel.APP_FEATURE_KEY;
import INITIAL_STATE = AppStateModel.INITIAL_STATE;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    AlertModule,
    StoreModule.forRoot(
      {
        [APP_FEATURE_KEY]: reducer,
      },
      {
        initialState: {
          [APP_FEATURE_KEY]: INITIAL_STATE,
        },
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NoopAnimationsModule,
  ],
  providers: [
    AppFacade, TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
