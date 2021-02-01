// import {
//   Action,
//   AnyAction,
//   Dispatch,
//   Observable,
//   PreloadedState,
//   Reducer,
//   Store,
//   StoreEnhancer,
//   Unsubscribe,
// } from "redux";
// import { Task } from "@redux-saga/types";
// import { Persistor } from "redux-persist/es/types";
// import { RootState } from "../src/redux/reducers";
//
// declare module "redux" {
//   export interface StoreCreator {
//     <S, A extends Action, Ext, StateExt>(
//       reducer: Reducer<S, A>,
//       enhancer?: StoreEnhancer<Ext, StateExt>
//     ): Store<S & StateExt, A> & Ext;
//     <S, A extends Action, Ext, StateExt>(
//       reducer: Reducer<S, A>,
//       preloadedState?: PreloadedState<S>,
//       enhancer?: StoreEnhancer<Ext>
//     ): Store<S & StateExt, A> & Ext;
//     // // ? customType
//     <S, A extends Action, Ext, StateExt>(
//       reducer: Reducer<S, A>,
//       preloadedState?: any,
//       enhancer?: StoreEnhancer<Ext>
//     ): Store<S & StateExt, A> & Ext;
//   }
//
//   export interface Store<S = any, A extends Action = AnyAction> {
//     dispatch: Dispatch<A>;
//     // getState(): S;
//     subscribe(listener: () => void): Unsubscribe;
//     replaceReducer(nextReducer: Reducer<S, A>): void;
//     [Symbol.observable](): Observable<S>;
//     // // ? customType
//     getState(): RootState;
//     saga: Task | null;
//     runSaga(): void;
//     stopSaga(): void;
//     execSagaTasks(isServer: boolean, tasks: (dispatch: any) => void): Promise;
//     __persistor: Persistor;
//   }
// }
