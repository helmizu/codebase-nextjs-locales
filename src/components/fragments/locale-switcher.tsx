'use client';
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '../ui/button';

export function LocaleSwitcher() {
  const t = useTranslations();

  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'id' : 'en';

  return (
    <Link href="/" locale={otherLocale}>
      <Button variant="outline">
        {t('LocaleSwitcher.switchLocale', { locale: otherLocale.toUpperCase() })}
      </Button>
    </Link>
  );
}