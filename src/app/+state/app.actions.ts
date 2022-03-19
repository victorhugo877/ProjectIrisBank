import { ActionCreator, createAction, props } from '@ngrx/store';
import { AppStateModel } from '../models/state/app.state';
import {AppEntity } from './app.models';
import AppActionTypes = AppStateModel.AppActionTypes;
import IStatePartialAction = AppStateModel.IStatePartialAction;
import IPayloadSetAlertViewSuccess = AppStateModel.IPayloadSetAlertViewSuccess;
import IPayloadSetAlertViewError = AppStateModel.IPayloadSetAlertViewError;
import IPayloadSetAlertViewConf = AppStateModel.IPayloadSetAlertViewConf;
import IPayloadSetAlertViewAcc = AppStateModel.IPayloadSetAlertViewAcc;
import IPayloadSetAlertViewConfDel = AppStateModel.IPayloadSetAlertViewConfDel;

export const loadApp = createAction('[App] Load App');

export const loadAppSuccess = createAction(
  '[App] Load App Success',
  props<{ app: AppEntity[] }>(),
);

export const setAlertViewSuccess: ActionCreator<
  string,
  AppStateModel.ActionCreator<IStatePartialAction<IPayloadSetAlertViewSuccess>>
> = createAction<string, IStatePartialAction<IPayloadSetAlertViewSuccess>>(
  AppActionTypes.SET_ALERT_VIEW_SUCESS,
  props<IStatePartialAction<IPayloadSetAlertViewSuccess>>(),
);

export const setAlertViewError: ActionCreator<
  string,
  AppStateModel.ActionCreator<IStatePartialAction<IPayloadSetAlertViewError>>
> = createAction<string, IStatePartialAction<IPayloadSetAlertViewError>>(
  AppActionTypes.SET_ALERT_VIEW_ERROR,
  props<IStatePartialAction<IPayloadSetAlertViewError>>(),
);

export const setAlertViewConf: ActionCreator<
  string,
  AppStateModel.ActionCreator<IStatePartialAction<IPayloadSetAlertViewConf>>
> = createAction<string, IStatePartialAction<IPayloadSetAlertViewConf>>(
  AppActionTypes.SET_ALERT_VIEW_CONF,
  props<IStatePartialAction<IPayloadSetAlertViewConf>>(),
);

export const setAlertViewAcc: ActionCreator<
  string,
  AppStateModel.ActionCreator<IStatePartialAction<IPayloadSetAlertViewAcc>>
> = createAction<string, IStatePartialAction<IPayloadSetAlertViewAcc>>(
  AppActionTypes.SET_ALERT_VIEW_ACC,
  props<IStatePartialAction<IPayloadSetAlertViewAcc>>(),
);

export const setAlertViewConfDel: ActionCreator<
  string,
  AppStateModel.ActionCreator<IStatePartialAction<IPayloadSetAlertViewConfDel>>
> = createAction<string, IStatePartialAction<IPayloadSetAlertViewConfDel>>(
  AppActionTypes.SET_ALERT_VIEW_CONF_DEL,
  props<IStatePartialAction<IPayloadSetAlertViewConfDel>>(),
);
