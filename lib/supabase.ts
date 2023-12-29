
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://jdprlumxnybyuqayjzdp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkcHJsdW14bnlieXVxYXlqemRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5NDA5NzYsImV4cCI6MjAxNzUxNjk3Nn0.o0PbTIzYqHH1_tP9YfDy_liPvPbnZpq6OYK1u56_16M')