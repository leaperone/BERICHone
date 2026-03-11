import { auth } from "@/auth";
import { getLocale } from "@/i18n/server";
import { ClientProviders } from "./client-providers";

export async function Providers({ children }: { children: React.ReactNode }) {
  let session = null;
  try {
    session = await auth();
  } catch {
    // Auth not configured (missing AUTH_SECRET etc.) — continue without session
  }
  const locale = await getLocale();
  return (
    <ClientProviders session={session} locale={locale}>
      {children}
    </ClientProviders>
  );
}
