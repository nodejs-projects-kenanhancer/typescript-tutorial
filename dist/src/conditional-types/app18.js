"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createUserAsync = async (userName) => {
    return {
        type: 'CreateUser',
        payload: userName
    };
};
const deleteUserAsync = async (userId) => {
    return {
        type: 'DeleteUser',
        payload: userId
    };
};
//# sourceMappingURL=app18.js.map