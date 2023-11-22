import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://tflsekewlkxwtizhmaod.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmbHNla2V3bGt4d3RpemhtYW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NDQ1OTYsImV4cCI6MjAxNDIyMDU5Nn0.6R0_c0GN-soZdOAM4MAfk_pUVVPek_JlO7V52XNyLEo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
