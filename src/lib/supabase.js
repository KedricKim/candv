import { createClient } from "@supabase/supabase-js";

// Supabase 클라이언트 생성
export const supabase = createClient(
  "https://vpiyndbsgskgbcdafmdf.supabase.co",
  `${process.env.REACT_APP_SUPABASE_KEY}`
);
