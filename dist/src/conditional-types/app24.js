"use strict";
// enum RFQStatus {
//   IN_PROGRESS = "IN_PROGRESS",
//   REQUIRES_APPROVAL = "REQUIRES_APPROVAL",
//   AWAITING_SUBMISSIONS = "AWAITING_SUBMISSIONS",
//   SELECTED = "SELECTED",
//   AWARDED = "AWARDED",
//   PUBLISHED = "PUBLISHED",
// }
Object.defineProperty(exports, "__esModule", { value: true });
const statusSteps = {
    AWAITING_SUBMISSIONS: "AWAITING QUOTES",
    AWARDED: "AWARDED QUOTES",
    IN_PROGRESS: "IN PROGRESS",
    PUBLISHED: "PUBLISHED",
    REQUIRES_APPROVAL: "REQUIRES APPROVAL",
    SELECTED: "SELECTED",
};
Object.entries(statusSteps).map(([key, value]) => {
    console.log(key, value);
});
//# sourceMappingURL=app24.js.map