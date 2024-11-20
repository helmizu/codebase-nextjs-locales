import { Metadata } from 'next';
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations
} from 'next-intl/server';
import { ReactNode } from 'react';

import { HOST_URL } from '@/constants/config';
import { NextIntlProvider } from '@/providers/next-intl/provider';
import Providers from '../providers';
import { geistMono, geistSans } from '../fonts';
import "../globals.css";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params,
}: Omit<Props, 'children'>): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });
  const formatter = await getFormatter({ locale });
  const now = await getNow({ locale });
  const timeZone = await getTimeZone({ locale });

  return {
    metadataBase: new URL(HOST_URL),
    title: t('title'),
    description: t('description'),
    other: {
      currentYear: formatter.dateTime(now, { year: 'numeric' }),
      timeZone: timeZone || 'N/A'
    }
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = (await params).locale
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlProvider locale={locale}>
          <Providers>
            {children}
          </Providers>
        </NextIntlProvider>
      </body>
    </html>
  );
}
