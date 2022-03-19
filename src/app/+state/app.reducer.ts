import { ActionReducer, createReducer, on } from '@ngrx/store';
import { AppStateModel } from '../models/state/app.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { 
  setAlertViewSuccess,
  setAlertViewError,
  setAlertViewConf,
  setAlertViewAcc,
  setAlertViewConfDel,
 } from './app.actions';
 import { AppEntity } from './app.models';
import IStateAction = AppStateModel.IStateAction;
import StateActionTypesPayload = AppStateModel.StateActionTypesPayload;
import IPayloadSetAlertViewSuccess = AppStateModel.IPayloadSetAlertViewSuccess;
import IPayloadSetAlertViewError = AppStateModel.IPayloadSetAlertViewError;
import IPayloadSetAlertViewConf = AppStateModel.IPayloadSetAlertViewConf;
import IPayloadSetAlertViewAcc = AppStateModel.IPayloadSetAlertViewAcc;
import IPayloadSetAlertViewConfDel = AppStateModel.IPayloadSetAlertViewConfDel;
import { pathOr } from 'ramda';

export const APP_FEATURE_KEY = 'app';

export interface State extends EntityState<AppEntity> {
  selectedId?: string | number; // which App record has been selected
  loaded: boolean; // has the App list been loaded
  error?: string | null; // last none error (if any)
}

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: State;
}

export const appAdapter: EntityAdapter<AppEntity> = createEntityAdapter<AppEntity>();

export const initialState: State = appAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const appReducer: ActionReducer<AppStateModel.IAppState> = createReducer<AppStateModel.IAppState>(
    AppStateModel.INITIAL_STATE,
    on(
      setAlertViewSuccess,
        (
          state: AppStateModel.IAppState,
          action: IStateAction<IPayloadSetAlertViewSuccess>,
        ): AppStateModel.IAppState => {
          const alertViewSuccess: boolean = pathOr(true, ['payload', 'alertViewSuccess'], action);
          let newAlertViewSuccess: boolean = true;
              
          newAlertViewSuccess = alertViewSuccess;
     
    
          return { ...state, alertViewSuccess: newAlertViewSuccess };
        },
      ),
    on(
      setAlertViewError,
        (
          state: AppStateModel.IAppState,
          action: IStateAction<IPayloadSetAlertViewError>,
        ): AppStateModel.IAppState => {
          const alertViewError: boolean = pathOr(true, ['payload', 'alertViewError'], action);
          let newAlertViewError: boolean = true;
              
          newAlertViewError = alertViewError;
      
    
          return { ...state, alertViewError: newAlertViewError };
        },
      ),
    on(
      setAlertViewConf,
        (
          state: AppStateModel.IAppState,
          action: IStateAction<IPayloadSetAlertViewConf>,
        ): AppStateModel.IAppState => {
          const alertViewConf: boolean = pathOr(true, ['payload', 'alertViewConf'], action);
          let newAlertViewConf: boolean = true;
              
          newAlertViewConf = alertViewConf;
      
    
          return { ...state, alertViewConf: newAlertViewConf };
        },
      ),
    on(
      setAlertViewAcc,
        (
          state: AppStateModel.IAppState,
          action: IStateAction<IPayloadSetAlertViewAcc>,
        ): AppStateModel.IAppState => {
          const alertViewAcc: boolean = pathOr(true, ['payload', 'alertViewAcc'], action);
          let newAlertViewAcc: boolean = true;
              
          newAlertViewAcc = alertViewAcc;
      
    
          return { ...state, alertViewAcc: newAlertViewAcc };
        },
    ),
    on(
      setAlertViewConfDel,
        (
          state: AppStateModel.IAppState,
          action: IStateAction<IPayloadSetAlertViewConfDel>,
        ): AppStateModel.IAppState => {
          const alertViewConfDel: boolean = pathOr(true, ['payload', 'alertViewConfDel'], action);
          let newAlertViewConfDel: boolean = true;
              
          newAlertViewConfDel = alertViewConfDel;
      
    
          return { ...state, alertViewConfDel: newAlertViewConfDel };
        },
    ),
);
export function reducer(
    state: AppStateModel.IAppState,
    action: StateActionTypesPayload,
  ): AppStateModel.IAppState {
    return appReducer(state, action);
  }