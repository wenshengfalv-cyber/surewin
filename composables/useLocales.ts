export type Locale = 'en' | 'zh' | 'ko' | 'vi'

export const supportedLocales: Locale[] = ['en', 'zh', 'ko', 'vi']
export const defaultLocale: Locale = 'zh'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ko: '한국어',
  vi: 'Tiếng Việt'
}

export const normalizeLocale = (lang: string | string[] | undefined): Locale => {
  const maybeLang = Array.isArray(lang) ? lang[0] : lang
  return supportedLocales.includes(maybeLang as Locale) ? (maybeLang as Locale) : defaultLocale
}
