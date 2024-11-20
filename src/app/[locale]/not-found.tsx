import { useTranslations } from "next-intl"

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div>
      <h1 className='text-lg font-bold mb-4'>
        {t("title")}
      </h1>
    </div>
  )
}
