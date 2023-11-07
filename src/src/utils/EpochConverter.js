export function EpochSecondToDateObject(epochSecond) {
  return new Date(epochSecond * 1000);
}

export function DateObjectToEpochSecond(dateObject) {
  return dateObject.getTime() / 1000.0;
}
