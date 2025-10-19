interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string
    readonly VITE_SUPABASE_KEY: string
    readonly VITE_SUPABASE_ANON_KEY: string
    readonly VITE_API_BASE: string; 

    // tambahkan variabel lain di sini
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  