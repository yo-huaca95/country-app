import { ErrorCode } from '../enums/error-code.enum';
import { AppError } from './app.error';
export class ApiError extends AppError {
  constructor(code:ErrorCode) {
    super(code);
  }
}
