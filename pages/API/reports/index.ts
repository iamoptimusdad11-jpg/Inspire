// pages/api/reports/index.ts
import { supabaseAdmin, getUserFromRequest } from "../../../lib/supabaseAdmin";

export default async function handler(req, res) {
  const user = await getUserFromRequest(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  if (req.method === "POST") {
    const { post_id, reason } = req.body;

    const { data, error } = await supabaseAdmin
      .from("reports")
      .insert({
        post_id,
        reason,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) return res.status(400).json({ error });
    return res.status(200).json(data);
  }

  return res.status(405).end();
}
