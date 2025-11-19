export async function reportPost(post_id, reason, token) {
  const res = await fetch("/api/reports", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ post_id, reason }),
  });

  return res.json();
}
