import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LocaleProvider } from "@/i18n/locale-provider";
// import { SessionProvider } from 'next-auth/react';
// import { auth } from '@/auth';
import { getLocale } from "@/i18n/server";

export async function Providers({ children }: { children: React.ReactNode }) {
  // const session = await auth();
  const locale = await getLocale();
  return (
    // <SessionProvider session={session}>
    <HeroUIProvider>
      <LocaleProvider value={locale}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </LocaleProvider>
    </HeroUIProvider>
    // </SessionProvider>
  );
}
