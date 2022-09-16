"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    itemCreator(generate) {
        return item => ({ ...item, ...generate(item) });
    }
}
const create = new Store().itemCreator((person) => ({ id: 'ID', extra: 42 }));
const person = create({ name: 'John', email: 'john.doe@foo.com' });
//# sourceMappingURL=app19.js.map