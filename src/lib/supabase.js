import { createClient } from "@supabase/supabase-js";

// Supabase 클라이언트 생성
export const supabase = createClient(
  "https://vpiyndbsgskgbcdafmdf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwaXluZGJzZ3NrZ2JjZGFmbWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MjMzMjEsImV4cCI6MjA1NjI5OTMyMX0.3PmXX7JnECpxF0ZKN7LUgu06DxnkxvSzP8e1pRHaZjc"
);
