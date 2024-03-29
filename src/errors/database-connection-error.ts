import { CustomError } from './custom-error'

export class DatabaseConnectionError extends CustomError{
    reason = 'Error connection to database';
    statusCode = 500;

    constructor(){
        super('Erroe4 connecin to db');
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype);
    }

    serializeErrors(){
        return [
            {message:this.reason}
        ];
    }
}