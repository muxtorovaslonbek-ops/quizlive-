import { useI18n } from '../../i18n/LanguageContext';
import LanguageSwitcher from '../../i18n/LanguageSwitcher';

// Hooks pass stable error codes (not translated text) so the message
// follows the language the user picks *after* the error appeared.
const CODES = {
  INIT_FAILED:     'error.initFailed',
  CONNECTION_LOST: 'error.connectionLost',
};

export default function ErrorScreen({ message, onRetry }) {
  const { t } = useI18n();
  const text = message ? (CODES[message] ? t(CODES[message]) : message) : t('error.default');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6
                    bg-gradient-to-br from-[#0f0a1e] via-[#1a0a2e] to-[#0a1628]">
      <LanguageSwitcher className="fixed top-4 right-4 z-20" />
      <div className="glass rounded-2xl p-6 max-w-sm w-full text-center space-y-4">
        <div className="text-5xl">⚠️</div>
        <h1 className="text-xl font-black text-white">{t('error.title')}</h1>
        <p className="text-white/50 text-sm break-words">{text}</p>
        <button
          onClick={onRetry || (() => window.location.reload())}
          className="w-full py-3 rounded-xl font-bold text-white
                     bg-gradient-to-r from-brand-600 to-purple-600
                     hover:from-brand-500 hover:to-purple-500 transition-all"
        >
          {t('error.reload')}
        </button>
        <p className="text-white/30 text-xs">
          {t('error.hint')}
        </p>
      </div>
    </div>
  );
}
