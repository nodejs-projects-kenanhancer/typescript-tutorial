"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMessage = (obj) => obj.message;
const sms = { phone: '07733838', message: ['Hello World', 'Merhaba Dunya'] };
const smsMessage = getMessage(sms); // string[]
const email = { from: 'kh@kh.com', to: 'kkkk@kkkk.com', message: 'Hello World' };
const emailMessage = getMessage(email); // string
//# sourceMappingURL=app21.js.map