const ERROR_TYPE = {
    OK: {code: 200, status: 'OK'},
    CREATED: {code: 201, status: 'Created'},
    NOCONTENT: {code: 204, status: 'No Content'},
    BAD_REQUEST: {code: 400, status: 'Bad Request'},
    UNAUTHORIZED:{code: 401, status: 'Unauthorized'},
    FORBIDEN: {code: 403, status: 'Forbidden'},
    NOT_FOUND: {code: 404, status: 'Not Found'},
    CONFLICT: {code: 409, status: 'Conflict'},
    INTERNAL_SERVER_ERROR: {code:500, status: 'Internal Server Error'},

}
module.exports = ERROR_TYPE;