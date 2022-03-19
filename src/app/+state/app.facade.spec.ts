import { ActionsSubject, ReducerManager } from '@ngrx/store';
import { MockReducerManager, MockState, MockStore } from '@ngrx/store/testing';
import { setAlertViewSuccess } from './app.actions';
import { AppFacade } from './app.facade';
import { AppStateModel } from '../models/state/app.state';
import { hot } from 'jest-marbles';
import { HotObservable } from 'jest-marbles/src/rxjs/hot-observable';
import { Observable, of } from 'rxjs';
import INITIAL_STATE = AppStateModel.INITIAL_STATE;
import SpyInstance = jest.SpyInstance;
import StateActionTypesPayload = AppStateModel.StateActionTypesPayload;

/** @test {AppFacade} */
describe('AppFacade Unit', (): void => {
  const mockState$: MockState<AppStateModel.IAppPartialState> = new MockState();
  const actionsObserver$: ActionsSubject = new ActionsSubject();
  const reducerManager$: MockReducerManager = new MockReducerManager();
  const initialState: AppStateModel.IAppPartialState = {
    app: {
      ...INITIAL_STATE,
    },
  };
  let store$: MockStore<AppStateModel.IAppPartialState>;
  let facade: AppFacade;

  beforeEach((): void => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    store$ = new MockStore(
      mockState$,
      actionsObserver$,
      reducerManager$ as ReducerManager,
      initialState,
    );
    facade = new AppFacade(store$);
  });

  describe('alertSucess', (): void => {
    test('should get alertSucess when it is boolean', (): void => {
      // Arrange
      const alertSucess: boolean = true;
      const alertSucessExpected$: HotObservable = hot('(a|)', {
        a: alertSucess,
      });
      // tslint:disable-next-line:ban-ts-ignore
      // @ts-ignore
      const spyStorePipe: SpyInstance = jest.spyOn(store$, 'pipe');
      spyStorePipe.mockImplementation((): Observable<boolean> => of(alertSucess));

      // Act
      facade = new AppFacade(store$);

      // Assert
      expect(facade.alertViewSuccess$).toBeObservable(alertSucessExpected$);
    });

    test('should set alertSucessExpected when it is not empty boolean', (): void => {
      // Arrange
      const alertSucessExpected: string = 'false';
      const action: StateActionTypesPayload = setAlertViewSuccess({
        payload: {
            alertViewSuccess,
        },
      });
      // tslint:disable-next-line:ban-ts-ignore
      // @ts-ignore
      const spyStoreDispatch: SpyInstance = jest.spyOn(store$, 'dispatch');

      // Act
      facade.setAlertViewSuccess(alertViewSuccess);

      // Assert
      expect(spyStoreDispatch).toHaveBeenNthCalledWith(1, action);
    });

  });
});
