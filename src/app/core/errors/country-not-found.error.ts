import { ErrorCode } from '../enums/error-code.enum';
import { AppError } from './app.error';

export class CountryNotFoundError extends AppError {
  constructor() {
    super(ErrorCode.COUNTRY_NOT_FOUND);
  }
}
