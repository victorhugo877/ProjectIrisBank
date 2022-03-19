import { RouterReducerState } from '@ngrx/router-store/src/reducer';
import { Action, MemoizedSelector } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export namespace AppStateModel {

    export const APP_FEATURE_KEY = 'app';

    export interface IStatePartialAction<T> {
        payload: T;
    }

    export type ActionCreator<T> = (props: T) => T & TypedAction<string>;

    export interface IStateAction<T> extends Action, IStatePartialAction<T> {}

    export interface IAppState {
        readonly alertViewSuccess: boolean;
        readonly alertViewError: boolean;
        readonly alertViewConf: boolean;
        readonly alertViewAcc: boolean;
        readonly alertViewConfDel: boolean;
    }

    export interface IAppPartialState {
    /** Property to simulate integration with the global object of the app property status */
    readonly [APP_FEATURE_KEY]: IAppState;
    }

    export interface IAppStateRoot {
        /** Property to simulate integration with the global object of the app property status */
        readonly [APP_FEATURE_KEY]: IAppState;
        /** Property to simulate integration with the global object of the router property status */
        readonly router: RouterReducerState;
    }

    export interface IPayloadSetAlertViewSuccess {
        alertViewSuccess: boolean;
    }
    export interface IPayloadSetAlertViewError {
        alertViewError: boolean;
    }
    export interface IPayloadSetAlertViewConf {
        alertViewConf: boolean;
    }
    export interface IPayloadSetAlertViewAcc {
        alertViewAcc: boolean;
    }
    export interface IPayloadSetAlertViewConfDel {
        alertViewConfDel: boolean;
    }

    export interface IAppSelectors {
        getAlertViewSuccess: MemoizedSelector<AppStateModel.IAppPartialState, boolean>;
        getAlertViewError: MemoizedSelector<AppStateModel.IAppPartialState, boolean>;
        getAlertViewConf: MemoizedSelector<AppStateModel.IAppPartialState, boolean>;
        getAlertViewAcc: MemoizedSelector<AppStateModel.IAppPartialState, boolean>;
        getAlertViewConfDel: MemoizedSelector<AppStateModel.IAppPartialState, boolean>;
    }

    export type StateActionTypesPayload = 
    IStateAction<IPayloadSetAlertViewSuccess>
    | IStateAction<IPayloadSetAlertViewError>
    | IStateAction<IPayloadSetAlertViewConf>
    | IStateAction<IPayloadSetAlertViewAcc>
    | IStateAction<IPayloadSetAlertViewConfDel>;

    export const INITIAL_STATE: IAppState = {
        alertViewSuccess:false,
        alertViewError:false,
        alertViewConf:false,
        alertViewAcc:false,
        alertViewConfDel:false
    };

    export enum AppActionTypes {
        SET_ALERT_VIEW_SUCESS = '[APP] SET_ALERT_VIEW_SUCESS',
        SET_ALERT_VIEW_ERROR = '[APP] SET_ALERT_VIEW_ERROR',
        SET_ALERT_VIEW_CONF = '[APP] SET_ALERT_VIEW_CONF',
        SET_ALERT_VIEW_ACC = '[APP] SET_ALERT_VIEW_ACC',
        SET_ALERT_VIEW_CONF_DEL = '[APP] SET_ALERT_VIEW_CONF_DEL'
    }
}