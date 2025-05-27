import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SummaryItem } from '../models/summery-item.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === '/api/summary' && req.method === 'GET') {
      const mockData: SummaryItem[] = [
        { title: 'Total Investment', value: 50000 },
        { title: 'Current Value', value: 65000 },
        { title: 'Profit / Loss', value: 15000 }
      ];

      const response: ApiResponse<SummaryItem[]> = {
        success: true,
        message: 'Summary data fetched successfully',
        data: mockData,
        timestamp: new Date().toISOString()
      };

      return of(new HttpResponse({ status: 200, body: response }));
    }

    return next.handle(req);
  }
}
