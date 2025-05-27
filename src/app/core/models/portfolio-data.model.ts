import { SummaryItem } from '../models/summery-item.model';
import { AssetPieData } from '../models/asset-pie-data.model';

export interface PortfolioData {
  summeryItem: SummaryItem[];
  assetPieData: AssetPieData[];
  chatData: number[];
}
