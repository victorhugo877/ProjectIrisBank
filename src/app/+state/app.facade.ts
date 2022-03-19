import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { 
  setAlertViewSuccess,
  setAlertViewError,
  setAlertViewConf,
  setAlertViewAcc,
  setAlertViewConfDel
}  from './app.actions';
import { appSelectors } from './app.selectors';
import { AppStateModel } from '../models/state/app.state';
import { Observable } from 'rxjs';
import { boolean } from 'check-types';

@Injectable({
    providedIn: 'root',
  })
  export class AppFacade {
    alertViewSuccess$: Observable<boolean> = this.store$.pipe(select(appSelectors.getAlertViewSuccess)); 
    alertViewError$: Observable<boolean> = this.store$.pipe(select(appSelectors.getAlertViewError));  
    alertViewConf$: Observable<boolean> = this.store$.pipe(select(appSelectors.getAlertViewConf)); 
    alertViewAcc$: Observable<boolean> = this.store$.pipe(select(appSelectors.getAlertViewAcc)); 
    alertViewConfDel$: Observable<boolean> = this.store$.pipe(select(appSelectors.getAlertViewConfDel)); 
    
    constructor(private readonly store$: Store<AppStateModel.IAppPartialState>) {}

    setAlertViewSuccess(alertViewSuccess: boolean): void {
        if (boolean(alertViewSuccess)) {
          this.store$.dispatch(setAlertViewSuccess({ payload: { alertViewSuccess } }));
        }
    }
    setAlertViewError(alertViewError: boolean): void {
      if (boolean(alertViewError)) {
        this.store$.dispatch(setAlertViewError({ payload: { alertViewError } }));
      }
    }
    setAlertViewConf(alertViewConf: boolean): void {
      if (boolean(alertViewConf)) {
        this.store$.dispatch(setAlertViewConf({ payload: { alertViewConf } }));
      }
    }
    setAlertViewAcc(alertViewAcc: boolean): void {
      if (boolean(alertViewAcc)) {
        this.store$.dispatch(setAlertViewAcc({ payload: { alertViewAcc } }));
      }
    }
    setAlertViewConfDel(alertViewConfDel: boolean): void {
      if (boolean(alertViewConfDel)) {
        this.store$.dispatch(setAlertViewConfDel({ payload: { alertViewConfDel } }));
      }
    }
  }