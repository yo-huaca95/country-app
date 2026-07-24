import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorCode } from '../enums/error-code.enum';
import { ApiError } from '../errors/api-error';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      switch (error.status) {
        case 0:
          return throwError(() => new ApiError(ErrorCode.NETWORK_ERROR));
        case 404:
          return throwError(() => new ApiError(ErrorCode.NOT_FOUND));
        case 401:
          return throwError(() => new ApiError(ErrorCode.UNAUTHORIZED));
        case 500:
          return throwError(() => new ApiError(ErrorCode.SERVER_ERROR));
        default:
          return throwError(() => new ApiError(ErrorCode.UNKNOWN));
      }
    }),
  );
};
