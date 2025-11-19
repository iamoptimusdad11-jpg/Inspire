// pages/api/admin/reports/[id]/resolve.ts
import { supabaseAdmin, getUserFromRequest } from "../../../../../lib/supabaseAdmin";

export default async function handler(req, res) {
  const user = await getUserFromRequest(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  // Admin check
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  const { id } = req.query;

  await supabaseAdmin
    .from("reports")
    .update({ resolved: true })
    .eq("id", id);

  return res.status(200).json({ success: true });
      }
