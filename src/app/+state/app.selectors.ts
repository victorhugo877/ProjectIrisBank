import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppStateModel } from '../models/state/app.state';
import IAppSelectors = AppStateModel.IAppSelectors;
import { pathOr } from 'ramda';


export const getAppState: MemoizedSelector<
  AppStateModel.IAppPartialState,
  AppStateModel.IAppState
> = createFeatureSelector<AppStateModel.IAppPartialState, AppStateModel.IAppState>(
  AppStateModel.APP_FEATURE_KEY,
);

export const getAlertViewSuccess: MemoizedSelector<
  AppStateModel.IAppPartialState,
  boolean
> = createSelector(getAppState, (state: AppStateModel.IAppState): boolean =>
  pathOr<boolean>(true, ['alertViewSuccess'], state),
);

export const getAlertViewError: MemoizedSelector<
  AppStateModel.IAppPartialState,
  boolean
> = createSelector(getAppState, (state: AppStateModel.IAppState): boolean =>
  pathOr<boolean>(true, ['alertViewError'], state),
);
export const getAlertViewConf: MemoizedSelector<
  AppStateModel.IAppPartialState,
  boolean
> = createSelector(getAppState, (state: AppStateModel.IAppState): boolean =>
  pathOr<boolean>(true, ['alertViewConf'], state),
);
export const getAlertViewAcc: MemoizedSelector<
  AppStateModel.IAppPartialState,
  boolean
> = createSelector(getAppState, (state: AppStateModel.IAppState): boolean =>
  pathOr<boolean>(true, ['alertViewAcc'], state),
);
export const getAlertViewConfDel: MemoizedSelector<
  AppStateModel.IAppPartialState,
  boolean
> = createSelector(getAppState, (state: AppStateModel.IAppState): boolean =>
  pathOr<boolean>(true, ['alertViewConfDel'], state),
);

export const appSelectors: IAppSelectors = {
  getAlertViewSuccess,
  getAlertViewError,
  getAlertViewConf,
  getAlertViewAcc,
  getAlertViewConfDel
};
