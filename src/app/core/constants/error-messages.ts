import { ErrorCode } from '../enums/error-code.enum';

export const ERROR_MESSAGES: Record<ErrorCode, string> = {
[ErrorCode.COUNTRY_NOT_FOUND]:
'No se encontró el país solicitado.',
[ErrorCode.NOT_FOUND]:'Recurso no encontrado.',
[ErrorCode.NETWORK_ERROR]:
'No fue posible conectarse al servidor.',
[ErrorCode.SERVER_ERROR]:
'Ocurrió un error interno del servidor.',
[ErrorCode.UNAUTHORIZED]:
'No cuenta con permisos para realizar esta operación.',
[ErrorCode.VALIDATION_ERROR]:
'Los datos enviados no son válidos.',
[ErrorCode.UNKNOWN]:
'Ocurrió un error inesperado.'
};