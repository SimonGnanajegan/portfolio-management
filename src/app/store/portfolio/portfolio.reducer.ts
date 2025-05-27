import { createReducer, on } from '@ngrx/store';
import { PortfolioData } from '../../core/models/portfolio-data.model';
import {
  loadPortfolioDataSuccess
} from './portfolio.actions';

export interface PortfolioState {
  portfolioData: PortfolioData | null;
}

export const initialPortfolioState: PortfolioState = {
  portfolioData: null
};

export const portfolioReducer = createReducer(
  initialPortfolioState,
  on(loadPortfolioDataSuccess, (state, { data }) => ({
    ...state,
    portfolioData: data
  }))
);
