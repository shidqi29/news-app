export function formattedDate(input) {
  const date = new Date(input);
  const formatted = date.toLocaleDateString("id", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  if (formatted === "Invalid Date") return "-";
  return formatted;
}
