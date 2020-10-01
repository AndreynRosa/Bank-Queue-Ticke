export function formaterNumberTicket(number, type) {
  return `${type.substring(0,1)}-${fromatNum(number)}`;
}
function fromatNum(number) {
  return ('000' + number).slice(-3);
}
