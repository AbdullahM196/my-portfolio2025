export default function getFormattedDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", {
    month: "long",
  });

  return `${day} ${date.getDate()} ${month} ${date.getFullYear()}`;
}
