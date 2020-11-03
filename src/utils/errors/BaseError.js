export const BaseErrorTypes = {
    UNKNOWN: 'unknown'
}

export class BaseError extends Error {
    constructor(message, cause) {
        super(message);
        this.name = message;
        this.cause = cause;
        this.logError();
    }
    logError() {
        console.group();
        console.error(this);
        console.error(this.cause);
        console.groupEnd();
    }
}