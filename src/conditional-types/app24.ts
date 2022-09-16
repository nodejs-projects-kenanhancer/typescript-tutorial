// enum RFQStatus {
//   IN_PROGRESS = "IN_PROGRESS",
//   REQUIRES_APPROVAL = "REQUIRES_APPROVAL",
//   AWAITING_SUBMISSIONS = "AWAITING_SUBMISSIONS",
//   SELECTED = "SELECTED",
//   AWARDED = "AWARDED",
//   PUBLISHED = "PUBLISHED",
// }

const statusSteps = {
  AWAITING_SUBMISSIONS: "AWAITING QUOTES",
  AWARDED: "AWARDED QUOTES",
  IN_PROGRESS: "IN PROGRESS",
  PUBLISHED: "PUBLISHED",
  REQUIRES_APPROVAL: "REQUIRES APPROVAL",
  SELECTED: "SELECTED",
};

type RFQStatus = keyof typeof statusSteps;

Object.entries(statusSteps).map(([key, value], index) => {
  console.log(key, value);
});

export {};
