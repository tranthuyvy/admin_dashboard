export function formatDateTime(dateTimeString) {
  const [datePart, timePart] = dateTimeString.split("T");

  const [year, month, day] = datePart.split("-");

  const [hour, minute, second] = timePart.split(":");

  const formattedDateTime = `${hour}:${minute}:${second}, ${day}/${month}/${year}`;

  return formattedDateTime;
}