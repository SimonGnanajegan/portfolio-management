import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { PortfolioService } from '../../core/service/portfolio.service';
import {
  loadPortfolioData,
  loadPortfolioDataSuccess,
  loadPortfolioDataFailure
} from './portfolio.actions';

@Injectable()
export class PortfolioEffects {
  constructor(
    private actions$: Actions,
    private portfolioService: PortfolioService
  ) {
    console.log('PortfolioService injected?', !!this.portfolioService);
  }

//   loadPortfolio$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadPortfolioData),
//       mergeMap(() =>
//         this.portfolioService.getPortfolioData().pipe(
//           map(data => loadPortfolioDataSuccess({ data })),
//           catchError(error => of(loadPortfolioDataFailure({ error })))
//         )
//       )
//     )
//   );
}
