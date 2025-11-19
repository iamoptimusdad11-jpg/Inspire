// pages/api/votes/index.ts
import { supabaseAdmin, getUserFromRequest } from "../../../lib/supabaseAdmin";

export default async function handler(req, res) {
  const user = await getUserFromRequest(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const { post_id } = req.body;

  // Check if user already voted
  const { data: existing } = await supabaseAdmin
    .from("votes")
    .select("*")
    .eq("post_id", post_id)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existing) {
    await supabaseAdmin
      .from("votes")
      .delete()
      .eq("id", existing.id);

    return res.status(200).json({ voted: false });
  }

  await supabaseAdmin.from("votes").insert({
    post_id,
    user_id: user.id,
  });

  return res.status(200).json({ voted: true });
}
