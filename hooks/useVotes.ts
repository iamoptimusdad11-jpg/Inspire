export async function toggleVote(post_id, token) {
  const res = await fetch("/api/votes", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ post_id }),
  });

  return res.json();
}
