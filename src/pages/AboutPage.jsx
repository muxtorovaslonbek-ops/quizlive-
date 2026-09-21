import { useI18n } from '../i18n/LanguageContext';
import LanguageSwitcher from '../i18n/LanguageSwitcher';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0a1e] via-[#1a0a2e] to-[#0a1628] flex items-center justify-center px-6">
      <LanguageSwitcher className="fixed top-4 right-4 z-20" />
      <div className="max-w-lg w-full space-y-6 py-12">
        <button
          onClick={() => window.close()}
          className="text-white/30 hover:text-white/60 transition-colors text-sm"
        >
          {t('about.close')}
        </button>

        {/* Builder */}
        <div className="flex items-center gap-4">
          <a href="https://deadtechguy.fun" target="_blank" rel="noopener noreferrer">
            <img
              src="/builder.jpg"
              alt="SivaSoorya G.R"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-white/10"
            />
          </a>
          <div>
            <p className="text-white font-bold text-lg leading-none">SivaSoorya G.R</p>
            <a
              href="https://deadtechguy.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              deadtechguy.fun
            </a>
          </div>
        </div>

        {/* About builder */}
        <div>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">{t('about.builder')}</p>
          <p className="text-white/60 text-sm leading-relaxed">
            {t('about.builderText')}
          </p>
        </div>

        {/* Why open source */}
        <div>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">{t('about.whyTitle')}</p>
          <p className="text-white/60 text-sm leading-relaxed">
            {t('about.whyText')}
          </p>
        </div>

        {/* What's better */}
        <div>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">{t('about.betterTitle')}</p>
          <p className="text-white/60 text-sm leading-relaxed">
            {t('about.betterText')}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 pt-2">
          <a
            href="https://github.com/sivasooryagiri/quizlive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-sm hover:text-white/70 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://deadtechguy.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-sm hover:text-white/70 transition-colors"
          >
            deadtechguy.fun
          </a>
        </div>

      </div>
    </div>
  );
}
