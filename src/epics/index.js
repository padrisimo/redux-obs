import { combineEpics } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';


function loadStoriesEpic(action$) {
  return action$.pipe(
    tap(action => console.log(action)),
    ignoreElements()
    )
}

export const rootEpic = combineEpics(loadStoriesEpic);