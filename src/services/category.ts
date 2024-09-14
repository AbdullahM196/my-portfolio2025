export async function getAllCategory() {
  const res = await fetch("http://localhost:3000/api/category");

  if (res.ok) {
    const data: category[] = await res.json();
    return data;
  } else {
    return [];
  }
}
