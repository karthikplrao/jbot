import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient({
  //   supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  // }));

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}