export function getDateTime(date: string, time: string) {
  const dateTime = new Date();
  const d = new Date(date);
  const t = new Date(time);
  dateTime.setUTCFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  dateTime.setUTCHours(t.getUTCHours(), t.getUTCMinutes(), 0, 0);
  console.log(dateTime);
  return dateTime;
}
