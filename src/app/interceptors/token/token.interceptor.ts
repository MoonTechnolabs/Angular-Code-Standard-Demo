import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  /**
   * Add auth token set in local storage.
   * @param request -> Send HttpRequest and HttpRequest with interface.
   * @param next -> A backend for http that uses the HttpRequest browser API.
   * @returns set token from backend to HttpHeader as authorization Bearer token.
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes('assets')) {
      request = request.clone({
        setHeaders: {
          Authorization: `tokenFromLocalStorage`, //TODO: Add auth token here
        },
        // url: `${environment.apiUrl}${request.url}`
      });
    }
    return next.handle(request);
  }
}
