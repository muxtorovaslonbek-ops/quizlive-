import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, LANGUAGES, DEFAULT_LANG } from './translations';

const STORAGE_KEY = 'ql_lang';
const SUPPORTED   = LANGUAGES.map((l) => l.code);

// localStorage can be unavailable (private mode, strict blockers) — never crash on it.
const safeStorage = {
  get()  { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } },
  set(v) { try { localStorage.setItem(STORAGE_KEY, v); }    catch { /* noop */ } },
};

function initialLang() {
  const stored = safeStorage.get();
  return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
}

/** Look up `key` in `lang`, falling back to English, then to the key itself. */
export function translate(lang, key, params) {
  const value = translations[lang]?.[key] ?? translations.en[key];
  if (value === undefined) return key;
  if (typeof value === 'function') return value(params ?? {});
  if (!params) return value;
  return value.replace(/\{(\w+)\}/g, (_, k) => (params[k] !== undefined ? String(params[k]) : `{${k}}`));
}

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key, params) => translate(DEFAULT_LANG, key, params),
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    safeStorage.set(next);
  }, []);

  // Keep <html lang> in sync (screen readers, browser translate prompts).
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // Keep several open tabs (e.g. admin + host) in the same language.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY && SUPPORTED.includes(e.newValue)) setLangState(e.newValue);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: (key, params) => translate(lang, key, params) }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useI18n = () => useContext(LanguageContext);
