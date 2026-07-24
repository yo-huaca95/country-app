import { ERROR_MESSAGES } from "../constants/error-messages";
import { ErrorCode } from "../enums/error-code.enum";

export abstract class AppError extends Error {
  constructor(public readonly code: ErrorCode,) {
    super(ERROR_MESSAGES[code]);
    console.log(this.constructor.name);
    this.name = this.constructor.name;
  }
}
