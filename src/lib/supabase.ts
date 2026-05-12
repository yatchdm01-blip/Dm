import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://chbpxbbfkiqoebkiycwg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoYnB4YmJma2lxb2Via2l5Y3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MTE1NjQsImV4cCI6MjA5NDA4NzU2NH0.n6AkkLMFCWt3gZErLP3e2MmWHzAt67-CpC4YYtFtYgQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
