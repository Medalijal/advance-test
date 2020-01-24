import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Progress} from '../../../shared/models/progress.model';
import {Evaluate} from '../../../fake-db/evaluate';
import {take} from 'rxjs/operators';
import {AveragePathwayCompletionModel} from '../../../shared/models/average-pathway-completion.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {

  constructor() {
  }

  public getTeamProgress(): Observable<Progress[]> {
    return of(Evaluate.teamProgressData).pipe(
      take(1)
    );
  }

  public getAveragePathwayCompletion(): Observable<AveragePathwayCompletionModel[]> {
    return of(Evaluate.averagePathwayCompletion).pipe(
      take(1)
    );
  }
}
