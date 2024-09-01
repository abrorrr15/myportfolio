import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://egrbzefgcancbhqmodfm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVncmJ6ZWZnY2FuY2JocW1vZGZtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjA1NjM4NSwiZXhwIjoyMDMxNjMyMzg1fQ.wdBn6Nw-MsANeD7s3-eFoUd581zekE1-SFY9215xXO8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
