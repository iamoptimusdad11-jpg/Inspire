// pages/api/comments/index.ts
import { supabaseAdmin, getUserFromRequest } from "../../../lib/supabaseAdmin";

export default async function handler(req, res) {
  const user = await getUserFromRequest(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  if (req.method === "POST") {
    const { post_id, content } = req.body;

    const { data, error } = await supabaseAdmin
      .from("comments")
      .insert({
        post_id,
        content,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) return res.status(400).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "GET") {
    const { post_id } = req.query;

    const { data } = await supabaseAdmin
      .from("comments")
      .select("*")
      .eq("post_id", post_id)
      .order("created_at", { ascending: true });

    return res.status(200).json(data);
  }

  return res.status(405).end();
}
