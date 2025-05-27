import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PortfolioState } from './portfolio.reducer';

export const selectPortfolioState = createFeatureSelector<PortfolioState>('portfolio');

export const selectPortfolioData = createSelector(
  selectPortfolioState,
  state => state.portfolioData
);

export const selectSummaryData = createSelector(
  selectPortfolioData,
  data => data?.summeryItem ?? []
);

export const selectChartData = createSelector(
  selectPortfolioData,
  data => data?.chatData ?? []
);

export const selectPieData = createSelector(
  selectPortfolioData,
  data => data?.assetPieData ?? []
);
