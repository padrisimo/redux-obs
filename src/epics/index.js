import { Observable, of } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, delay } from 'rxjs/operators';
import { LOAD_STORIES, clear } from '../actions';


const loadStoriesEpic = (action$) =>
  action$.pipe(
    ofType(LOAD_STORIES),
    switchMap(() => of(clear()).pipe(delay(2000))
    
    )
  )


export const rootEpic = combineEpics(loadStoriesEpic);