// lib/supabaseAdmin.ts
import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Validates user token in API routes
export async function getUserFromRequest(req) {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) return null;

    const {
      data: { user },
      error,
    } = await supabaseAdmin.auth.getUser(token);

    if (error) return null;
    return user;
  } catch (e) {
    return null;
  }
      }
