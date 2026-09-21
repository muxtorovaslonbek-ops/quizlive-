import { useI18n } from '../../i18n/LanguageContext';

export default function LoadingSpinner({ message }) {
  const { t } = useI18n();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0a1e] via-[#1a0a2e] to-[#0a1628]">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-brand-900" />
        <div className="absolute inset-0 rounded-full border-4 border-t-brand-400 animate-spin" />
      </div>
      <p className="text-brand-300 text-sm font-medium">{message ?? t('common.loading')}</p>
      <p className="text-white/20 text-xs mt-6">deadtechguy.fun</p>
    </div>
  );
}
