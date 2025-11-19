// pages/api/posts/index.ts
import { supabaseAdmin, getUserFromRequest } from "../../../lib/supabaseAdmin";

export default async function handler(req, res) {
  const user = await getUserFromRequest(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  if (req.method === "POST") {
    const { title, body, board } = req.body;

    const { data, error } = await supabaseAdmin
      .from("posts")
      .insert({
        title,
        body,
        board,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) return res.status(400).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "GET") {
    const { board } = req.query;

    const { data, error } = await supabaseAdmin
      .from("posts")
      .select("*")
      .eq("board", board)
      .order("created_at", { ascending: false });

    return res.status(200).json(data);
  }

  return res.status(405).end();
}
