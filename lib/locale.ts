export const supportedLocales = [
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸', dir: 'ltr' },
  { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧', dir: 'ltr' },
  { code: 'de-DE', name: 'Deutsch (Deutschland)', flag: '🇩🇪', dir: 'ltr' },
  { code: 'de-AT', name: 'Deutsch (Österreich)', flag: '🇦🇹', dir: 'ltr' },
  { code: 'de-CH', name: 'Deutsch (Schweiz)', flag: '🇨🇭', dir: 'ltr' },
  { code: 'ar-SA', name: 'العربية (السعودية)', flag: '🇸🇦', dir: 'rtl' },
  { code: 'ar-AE', name: 'العربية (الإمارات)', flag: '🇦🇪', dir: 'rtl' },
  { code: 'nl-NL', name: 'Nederlands (Nederland)', flag: '🇳🇱', dir: 'ltr' },
  { code: 'nl-BE', name: 'Nederlands (België)', flag: '🇧🇪', dir: 'ltr' },
  { code: 'fr-FR', name: 'Français (France)', flag: '🇫🇷', dir: 'ltr' },
  { code: 'fr-BE', name: 'Français (Belgique)', flag: '🇧🇪', dir: 'ltr' },
  { code: 'fr-CH', name: 'Français (Suisse)', flag: '🇨🇭', dir: 'ltr' },
  { code: 'es-ES', name: 'Español (España)', flag: '🇪🇸', dir: 'ltr' },
  { code: 'it-IT', name: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'pt-PT', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'sv-SE', name: 'Svenska', flag: '🇸🇪', dir: 'ltr' },
  { code: 'da-DK', name: 'Dansk', flag: '🇩🇰', dir: 'ltr' },
  { code: 'no-NO', name: 'Norsk', flag: '🇳🇴', dir: 'ltr' },
  { code: 'fi-FI', name: 'Suomi', flag: '🇫🇮', dir: 'ltr' },
] as const;

export type SupportedLocale = typeof supportedLocales[number]['code'];

/**
 * Get locale information by code
 */
export function getLocaleInfo(code: string) {
  return supportedLocales.find(locale => locale.code === code) || supportedLocales[0];
}

/**
 * Detect user's preferred locale from browser
 */
export function detectUserLocale(): SupportedLocale {
  if (typeof window === 'undefined') return 'en-US';
  
  const browserLang = navigator.language || 'en-US';
  const supportedCodes = supportedLocales.map(l => l.code);
  
  // Try exact match first
  if (supportedCodes.includes(browserLang as SupportedLocale)) {
    return browserLang as SupportedLocale;
  }
  
  // Try language without region
  const langOnly = browserLang.split('-')[0];
  const fallback = supportedCodes.find(code => code.startsWith(langOnly));
  
  return (fallback as SupportedLocale) || 'en-US';
}

/**
 * Get the URL path for a specific locale
 */
export function getLocalePath(locale: SupportedLocale): string {
  if (locale === 'en-US') return '';
  
  const pathMap: Record<string, string> = {
    'en-GB': '/en-gb',
    'de-DE': '/de',
    'de-AT': '/de-at',
    'de-CH': '/de-ch',
    'ar-SA': '/ar',
    'ar-AE': '/ar-ae',
    'nl-NL': '/nl',
    'nl-BE': '/nl-be',
    'fr-FR': '/fr',
    'fr-BE': '/fr-be',
    'fr-CH': '/fr-ch',
    'es-ES': '/es',
    'it-IT': '/it',
    'pt-PT': '/pt',
    'sv-SE': '/sv',
    'da-DK': '/da',
    'no-NO': '/no',
    'fi-FI': '/fi',
  };
  
  return pathMap[locale] || '';
}

/**
 * Country-specific SEO keywords
 */
export const countryKeywords = {
  'US': ['United States', 'America', 'USA', 'American'],
  'GB': ['United Kingdom', 'Britain', 'UK', 'British', 'England'],
  'DE': ['Deutschland', 'Germany', 'German', 'Deutsch'],
  'AT': ['Austria', 'Österreich', 'Austrian'],
  'CH': ['Switzerland', 'Schweiz', 'Swiss'],
  'SA': ['Saudi Arabia', 'Saudi', 'المملكة العربية السعودية'],
  'AE': ['UAE', 'United Arab Emirates', 'Emirates', 'الإمارات'],
  'NL': ['Netherlands', 'Holland', 'Dutch', 'Nederland'],
  'BE': ['Belgium', 'Belgian', 'België', 'Belgique'],
  'FR': ['France', 'French', 'Français'],
  'ES': ['Spain', 'Spanish', 'España', 'Español'],
  'IT': ['Italy', 'Italian', 'Italia', 'Italiano'],
  'PT': ['Portugal', 'Portuguese', 'Português'],
  'SE': ['Sweden', 'Swedish', 'Sverige', 'Svenska'],
  'DK': ['Denmark', 'Danish', 'Danmark', 'Dansk'],
  'NO': ['Norway', 'Norwegian', 'Norge', 'Norsk'],
  'FI': ['Finland', 'Finnish', 'Suomi'],
} as const;
