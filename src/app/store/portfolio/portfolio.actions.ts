import { createAction, props } from '@ngrx/store';
import { PortfolioData } from '../../core/models/portfolio-data.model';


export const loadPortfolioData = createAction('[Portfolio] Load Portfolio Data');

export const loadPortfolioDataSuccess = createAction(
  '[Portfolio] Load Portfolio Data Success',
  props<{ data: PortfolioData }>()
);

export const loadPortfolioDataFailure = createAction(
  '[Portfolio] Load Portfolio Data Failure',
  props<{ error: any }>()
);
