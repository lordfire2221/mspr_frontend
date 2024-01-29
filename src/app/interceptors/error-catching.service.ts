import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
import { SpinnerService } from '../service/spinner.service';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(
    private spinnerService:SpinnerService
  ) {
  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.requestStarted()
    return next.handle(request)
      .pipe(
        tap(
          (event)=>{
            if(event instanceof HttpResponse){
              this.spinnerService.requestEnded()
            }
          }

        ),
        catchError(
          (error: HttpErrorResponse) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
              errorMsg = `Error: ${error.error.message}`;
              alert(errorMsg)
            } else {
              this.spinnerService.resetSpinner()
              errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
              alert(errorMsg)
            }
            return throwError(() => new Error(errorMsg));
          }
        )
      )
  }
}
