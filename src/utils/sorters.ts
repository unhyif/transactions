export const sortByOldest = (timestampA: number, timestampB: number) =>
  timestampA - timestampB;

export const sortByLatest = (timestampA: number, timestampB: number) =>
  timestampB - timestampA;
