import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://egrbzefgcancbhqmodfm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVncmJ6ZWZnY2FuY2JocW1vZGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNTYzODUsImV4cCI6MjAzMTYzMjM4NX0.HfeLQTkRO8O_c2b_a1KBzkogOandZiv9DQ2HPCJ5y-M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
