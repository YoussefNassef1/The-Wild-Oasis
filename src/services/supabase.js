import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gwrinlsghevkqscvaanw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3cmlubHNnaGV2a3FzY3ZhYW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwOTQ1MDQsImV4cCI6MjAyMTY3MDUwNH0.cRtYpMFvAIlMe4fk_xAGLzsMACRnnIlrU2pi8PzRDoU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
