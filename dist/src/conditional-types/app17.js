"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createUser = (userName) => {
    return {
        type: 'CreateUser',
        payload: userName
    };
};
const deleteUser = (userId) => {
    return {
        type: 'DeleteUser',
        payload: userId
    };
};
const action1 = { type: 'CreateUser', payload: '' };
const action2 = { type: 'DeleteUser', payload: 11 };
//# sourceMappingURL=app17.js.map