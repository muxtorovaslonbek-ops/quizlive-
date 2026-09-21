import { LANGUAGES } from './translations';
import { useI18n } from './LanguageContext';

/**
 * Small EN | UZ pill. Pass `className` to position it (e.g. "absolute top-3 right-3").
 */
export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full glass border border-white/10 p-0.5 ${className}`}
    >
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          title={l.name}
          aria-pressed={lang === l.code}
          className={`px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider transition-all
            ${lang === l.code
              ? 'bg-brand-600 text-white shadow'
              : 'text-white/40 hover:text-white/80'}`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
