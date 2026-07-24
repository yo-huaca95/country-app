import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

handleError(error: any): void {

console.error('Global Error:', error);
// En producción:
// enviar a Sentry
// enviar a Azure Insights
// enviar a LogRocket

}

}