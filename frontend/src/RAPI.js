const BACKEND_URL = "https://real-novel-website.vercel.app/rdata";

async function handle(res, label) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${label} ${res.status} ${text || ""}`.trim());
  }
  return res.json();
}

export async function createItem(item) { //Bug Fix Leaw Yahhhh
  const r = await fetch(`${BACKEND_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return handle(r, "POST /rdata");
}

export async function deleteItem(item) {
    const r = await fetch(`${BACKEND_URL}/${item._id}`, {
        method: "DELETE",
    });
    return handle(r, "DELETE /rdata");
}
