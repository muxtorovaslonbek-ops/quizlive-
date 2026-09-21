/**
 * All user-facing text lives here. Two languages: English (en) and Uzbek (uz, Latin script).
 *
 * - Values are strings with {placeholders}, or functions for plurals.
 * - Every key MUST exist in both languages (checked by scripts/check-i18n.mjs).
 * - To add a new language, copy the `en` block, translate it, and register it
 *   in LANGUAGES below + in the `translations` map at the bottom.
 */

const en = {
  // ─── common ───────────────────────────────────────────
  'common.loading':  'Loading…',
  'common.builtBy':  'Built by DeadTechGuy',
  'common.pts':      'pts',
  'common.working':  'Working…',

  // ─── error screen ─────────────────────────────────────
  'error.title':          'Connection problem',
  'error.default':        'Something went wrong',
  'error.reload':         'Reload',
  'error.hint':           "If this keeps happening, the host's Firebase quota may be exhausted or rules may be misconfigured.",
  'error.initFailed':     'Failed to initialize game',
  'error.connectionLost': 'Connection lost',

  // ─── player: join ─────────────────────────────────────
  'join.subtitle':        'Enter your name to join',
  'join.yourName':        'Your Name',
  'join.placeholder':     'e.g. Alex 🚀',
  'join.taken':           'That name is taken.',
  'join.joiningAs':       'Joining as',
  'join.editHint':        ' — edit above if you want a different name.',
  'join.joining':         'Joining…',
  'join.joinAs':          'Join as "{name}" →',
  'join.joinGame':        'Join Game →',
  'join.limits':          'Min 2 characters · Max 20 characters',
  'join.err.invalid_name': 'Name must be 2–20 characters.',
  'join.err.join_failed':  'Could not join. Try again.',

  // ─── player: lobby ────────────────────────────────────
  'lobby.joinedAs': 'Joined as',
  'lobby.players':  'Players in lobby',
  'lobby.waiting':  'Waiting for host to start…',

  // ─── player: question ─────────────────────────────────
  'q.label':       'Q {n} / {total}',
  'q.locked':      '🔒 Locked in',
  'q.timesUp':     "⏰ Time's up",
  'q.selected':    'Answer selected',
  'q.pick':        'Pick your answer',
  'q.seconds':     '{n}s',
  'q.noAnswer':    '⏰ No answer submitted',
  'q.lockedWatch': 'Answer locked in — watch the screen!',

  // ─── player: answer result ────────────────────────────
  'result.timesUp':         "Time's up!",
  'result.correct':         'Correct!',
  'result.wrong':           'Wrong!',
  'result.points':          '+{n} pts',
  'result.correctBadge':    'Correct',
  'result.leaderboardSoon': 'Leaderboard coming up…',

  // ─── player: leaderboard ──────────────────────────────
  'lb.title':       'Leaderboard',
  'lb.checkScreen': 'Check the big screen!',
  'lb.yourRank':    'Your rank',
  'lb.score':       'Score',
  'lb.you':         ' (you)',
  'lb.waitingNext': 'Waiting for next question…',

  // ─── player: ended ────────────────────────────────────
  'end.title':      'Quiz Over!',
  'end.thanks':     'Thanks for playing, {name}!',
  'end.finalRank':  'Final Rank',
  'end.totalScore': 'Total Score',
  'end.won':        '👑 You won!',

  // ─── host (projector) ─────────────────────────────────
  'host.joinAt':       'Join at',
  'host.scanToJoin':   'Scan to join',
  'host.players':      'Players',
  'host.joinNow':      'Join Now!',
  'host.questionOf':   'Question {n} / {total}',
  'host.answered':     '{n} answered',
  'host.resultsOf':    'Question {n} / {total} — Results',
  'host.responses':    '{n} responses',
  'host.votes':        '{n} votes',
  'host.correct':      '✅ Correct',
  'host.wrong':        '❌ Wrong',
  'host.leaderboard':  '🏆 Leaderboard',
  'host.finalResults': 'Final Results!',
  'host.noPlayers':    'No players yet',
  'host.endedTitle':   'Quiz Over!',
  'host.endedThanks':  'Thanks everyone for playing!',

  // ─── admin: shell ─────────────────────────────────────
  'admin.tab.questions': '📝 Questions',
  'admin.tab.game':      '🎮 Game Control',
  'admin.tab.host':      '🖥 Host / QR',
  'admin.tab.history':   '📋 History',
  'admin.title':         'Admin Panel',
  'admin.counts':        ({ players, questions }) => `${players} player${players !== 1 ? 's' : ''} · ${questions} Q`,
  'admin.logout':        'Logout',
  'admin.migrated':      ({ n }) => `✓ Set up ${n} answer key${n !== 1 ? 's' : ''}`,
  'admin.about':         'About',

  // ─── admin: login ─────────────────────────────────────
  'login.subtitle':   'Enter your admin password',
  'login.password':   'Password',
  'login.incorrect':  'Incorrect password.',
  'login.signingIn':  'Signing in…',
  'login.submit':     'Login →',

  // ─── admin: game control ──────────────────────────────
  'game.phase.waiting':     'Waiting for players',
  'game.phase.question':    'Question in progress',
  'game.phase.results':     'Showing results',
  'game.phase.leaderboard': 'Leaderboard',
  'game.phase.ended':       'Quiz ended',
  'game.currentQuestion':   'Current Question',
  'game.controls':          'Controls',
  'game.start':             ({ n }) => `🚀 Start Quiz (${n} question${n !== 1 ? 's' : ''})`,
  'game.skip':              '⏭ Skip to Results',
  'game.showLeaderboard':   '📊 Show Leaderboard',
  'game.next':              '▶ Next Question ({a} / {b})',
  'game.end':               '🏁 End Quiz',
  'game.endEarly':          '🏁 End Quiz Early',
  'game.endedNote':         'Quiz has ended. Reset to start again.',
  'game.danger':            'Danger Zone',
  'game.confirmReset':      '⚠ Confirm reset — click again to wipe players & answers',
  'game.reset':             '🔄 Reset Game (clears all players & answers)',
  'game.resetFailed':       "Couldn't reset game: {err}",

  // ─── admin: host / QR ─────────────────────────────────
  'hostctl.open':          '🖥 Open Host Screen (Projector)',
  'hostctl.openHint':      'Opens /host in a new tab — show this on the projector',
  'hostctl.showQR':        'Show QR on presentation',
  'hostctl.disabledDuring': 'Disabled during question',
  'hostctl.qrVisible':     'QR visible on host screen',
  'hostctl.qrHidden':      'QR hidden',
  'hostctl.settings':      'Game Settings',
  'hostctl.gameTitle':     'Game Title',
  'hostctl.joinUrl':       'Player Join URL (used for QR code)',
  'hostctl.joinUrlHint':   'Set to your production URL before the event',
  'hostctl.saving':        'Saving…',
  'hostctl.saved':         '✓ Saved!',
  'hostctl.save':          'Save Settings',
  'hostctl.qrPreview':     'QR Preview',
  'hostctl.unsaved':       'Unsaved — click Save Settings',
  'hostctl.copied':        '✓ Copied!',
  'hostctl.copy':          'Copy Join URL',

  // ─── admin: question editor ───────────────────────────
  'editor.text':            'Question Text',
  'editor.textPlaceholder': 'What is the capital of France? (Enter → next field, Shift+Enter → new line)',
  'editor.option':          'Option {l}',
  'editor.correct':         '✓ Correct',
  'editor.markCorrect':     'Mark as correct',
  'editor.timer':           'Timer (seconds)',
  'editor.timerRange':      '5–120s',
  'editor.save':            'Save Question',
  'editor.saving':          'Saving…',
  'editor.cancel':          'Cancel',
  'editor.saveFailed':      "Couldn't save question: {err}",
  'editor.deleteFailed':    "Couldn't delete question: {err}",
  'editor.add':             '+ Add Question',
  'editor.none':            'No questions yet. Add one above.',
  'editor.dragHint':        'Drag ⠿ to reorder',
  'editor.edit':            'Edit',
  'editor.delete':          'Delete',
  'editor.confirm':         'Confirm?',
  'editor.meta':            '⏱ {n}s · max 30 pts',

  // ─── admin: history ───────────────────────────────────
  'history.minutes':   '{n} min',
  'history.duration':  'Duration: {d}',
  'history.noPlayers': 'No players recorded',
  'history.showLess':  '▲ Show less',
  'history.showAll':   '▼ Show all {n} players',
  'history.empty':     'No sessions yet. Sessions are saved automatically when a quiz ends.',
  'history.csvRank':   'Rank',
  'history.csvName':   'Name',
  'history.csvScore':  'Score',

  // ─── about page ───────────────────────────────────────
  'about.close':        '← Close',
  'about.builder':      'Builder',
  'about.builderText':  'ML/DL creator and co-founder of Soluto. Builds and experiments in public — technical deep dives, real-time systems, and tools that actually get used. Also has a Linux penguin plushie on his desk.',
  'about.whyTitle':     'Why This Is Open Source',
  'about.whyText':      'Every decent quiz tool either has a paywall, a user limit, or some vendor deciding what features you get. This exists to fix that. Run it on your laptop, share it on your office network, or deploy it to the cloud — the hosting is yours and so is the control.',
  'about.betterTitle':  'What We Did Better',
  'about.betterText':   'Cleaner UI that works for any audience. No account creation for players — just scan and join. Self-hostable on a private IP so you can run it completely offline. Timer-based scoring that rewards speed. Free tier Firebase handles up to 100 simultaneous players at zero cost.',
};

const uz = {
  // ─── common ───────────────────────────────────────────
  'common.loading':  'Yuklanmoqda…',
  'common.builtBy':  'Yaratuvchi: DeadTechGuy',
  'common.pts':      'ball',
  'common.working':  'Bajarilmoqda…',

  // ─── error screen ─────────────────────────────────────
  'error.title':          'Ulanishda muammo',
  'error.default':        'Nimadir xato ketdi',
  'error.reload':         'Qayta yuklash',
  'error.hint':           "Agar bu takrorlanaversa, tashkilotchining Firebase kvotasi tugagan yoki qoidalar noto'g'ri sozlangan bo'lishi mumkin.",
  'error.initFailed':     "O'yinni ishga tushirib bo'lmadi",
  'error.connectionLost': 'Aloqa uzildi',

  // ─── player: join ─────────────────────────────────────
  'join.subtitle':        "Qo'shilish uchun ismingizni kiriting",
  'join.yourName':        'Ismingiz',
  'join.placeholder':     'masalan: Alisher 🚀',
  'join.taken':           'Bu ism band.',
  'join.joiningAs':       "Quyidagi ism bilan qo'shilasiz:",
  'join.editHint':        " — boshqa ism xohlasangiz, yuqorida o'zgartiring.",
  'join.joining':         "Qo'shilmoqda…",
  'join.joinAs':          `"{name}" sifatida qo'shilish →`,
  'join.joinGame':        "O'yinga qo'shilish →",
  'join.limits':          "Kamida 2 ta belgi · Ko'pi bilan 20 ta belgi",
  'join.err.invalid_name': "Ism 2–20 ta belgidan iborat bo'lishi kerak.",
  'join.err.join_failed':  "Qo'shilib bo'lmadi. Qayta urinib ko'ring.",

  // ─── player: lobby ────────────────────────────────────
  'lobby.joinedAs': 'Ismingiz',
  'lobby.players':  "Kutish zalidagi o'yinchilar",
  'lobby.waiting':  "Boshlovchi o'yinni boshlashini kutmoqda…",

  // ─── player: question ─────────────────────────────────
  'q.label':       'Savol {n} / {total}',
  'q.locked':      '🔒 Javob qabul qilindi',
  'q.timesUp':     '⏰ Vaqt tugadi',
  'q.selected':    'Javob tanlandi',
  'q.pick':        'Javobingizni tanlang',
  'q.seconds':     '{n} s',
  'q.noAnswer':    '⏰ Javob yuborilmadi',
  'q.lockedWatch': 'Javob qabul qilindi — ekranni kuzating!',

  // ─── player: answer result ────────────────────────────
  'result.timesUp':         'Vaqt tugadi!',
  'result.correct':         "To'g'ri!",
  'result.wrong':           'Xato!',
  'result.points':          '+{n} ball',
  'result.correctBadge':    "To'g'ri",
  'result.leaderboardSoon': 'Reyting tez orada…',

  // ─── player: leaderboard ──────────────────────────────
  'lb.title':       'Reyting',
  'lb.checkScreen': 'Katta ekranga qarang!',
  'lb.yourRank':    "Sizning o'rningiz",
  'lb.score':       'Ball',
  'lb.you':         ' (siz)',
  'lb.waitingNext': 'Keyingi savol kutilmoqda…',

  // ─── player: ended ────────────────────────────────────
  'end.title':      'Viktorina tugadi!',
  'end.thanks':     'Ishtirokingiz uchun rahmat, {name}!',
  'end.finalRank':  "Yakuniy o'rin",
  'end.totalScore': 'Jami ball',
  'end.won':        "👑 Siz g'olibsiz!",

  // ─── host (projector) ─────────────────────────────────
  'host.joinAt':       "Qo'shilish manzili:",
  'host.scanToJoin':   "Qo'shilish uchun skanerlang",
  'host.players':      "O'yinchilar",
  'host.joinNow':      "Hoziroq qo'shiling!",
  'host.questionOf':   '{n} / {total}-savol',
  'host.answered':     '{n} ta javob berdi',
  'host.resultsOf':    '{n} / {total}-savol — Natijalar',
  'host.responses':    '{n} ta javob',
  'host.votes':        '{n} ta ovoz',
  'host.correct':      "✅ To'g'ri",
  'host.wrong':        '❌ Xato',
  'host.leaderboard':  '🏆 Reyting',
  'host.finalResults': 'Yakuniy natijalar!',
  'host.noPlayers':    "Hozircha o'yinchilar yo'q",
  'host.endedTitle':   'Viktorina tugadi!',
  'host.endedThanks':  'Ishtirok etgan barchaga rahmat!',

  // ─── admin: shell ─────────────────────────────────────
  'admin.tab.questions': '📝 Savollar',
  'admin.tab.game':      "🎮 O'yin boshqaruvi",
  'admin.tab.host':      '🖥 Ekran / QR',
  'admin.tab.history':   '📋 Tarix',
  'admin.title':         'Admin panel',
  'admin.counts':        ({ players, questions }) => `${players} ta o'yinchi · ${questions} ta savol`,
  'admin.logout':        'Chiqish',
  'admin.migrated':      ({ n }) => `✓ ${n} ta javob kaliti sozlandi`,
  'admin.about':         'Loyiha haqida',

  // ─── admin: login ─────────────────────────────────────
  'login.subtitle':   'Admin parolini kiriting',
  'login.password':   'Parol',
  'login.incorrect':  "Parol noto'g'ri.",
  'login.signingIn':  'Kirilmoqda…',
  'login.submit':     'Kirish →',

  // ─── admin: game control ──────────────────────────────
  'game.phase.waiting':     "O'yinchilar kutilmoqda",
  'game.phase.question':    'Savol davom etmoqda',
  'game.phase.results':     "Natijalar ko'rsatilmoqda",
  'game.phase.leaderboard': 'Reyting',
  'game.phase.ended':       'Viktorina tugadi',
  'game.currentQuestion':   'Joriy savol',
  'game.controls':          'Boshqaruv',
  'game.start':             ({ n }) => `🚀 Viktorinani boshlash (${n} ta savol)`,
  'game.skip':              "⏭ Natijalarga o'tish",
  'game.showLeaderboard':   "📊 Reytingni ko'rsatish",
  'game.next':              '▶ Keyingi savol ({a} / {b})',
  'game.end':               '🏁 Viktorinani yakunlash',
  'game.endEarly':          '🏁 Viktorinani muddatidan oldin yakunlash',
  'game.endedNote':         "Viktorina tugadi. Qaytadan boshlash uchun o'yinni tiklang.",
  'game.danger':            'Xavfli hudud',
  'game.confirmReset':      "⚠ Tiklashni tasdiqlang — o'yinchilar va javoblarni o'chirish uchun yana bosing",
  'game.reset':             "🔄 O'yinni tiklash (barcha o'yinchilar va javoblar o'chiriladi)",
  'game.resetFailed':       "O'yinni tiklab bo'lmadi: {err}",

  // ─── admin: host / QR ─────────────────────────────────
  'hostctl.open':          '🖥 Ekran oynasini ochish (proyektor)',
  'hostctl.openHint':      "/host sahifasini yangi oynada ochadi — uni proyektorda ko'rsating",
  'hostctl.showQR':        "Taqdimotda QR-kodni ko'rsatish",
  'hostctl.disabledDuring': "Savol vaqtida o'chirilgan",
  'hostctl.qrVisible':     "QR-kod ekranda ko'rinadi",
  'hostctl.qrHidden':      'QR-kod yashirin',
  'hostctl.settings':      "O'yin sozlamalari",
  'hostctl.gameTitle':     "O'yin nomi",
  'hostctl.joinUrl':       "O'yinchilar uchun havola (QR-kod uchun)",
  'hostctl.joinUrlHint':   "Tadbirdan oldin asosiy (production) manzilingizni kiriting",
  'hostctl.saving':        'Saqlanmoqda…',
  'hostctl.saved':         '✓ Saqlandi!',
  'hostctl.save':          'Sozlamalarni saqlash',
  'hostctl.qrPreview':     "QR-kod ko'rinishi",
  'hostctl.unsaved':       "Saqlanmagan — «Sozlamalarni saqlash»ni bosing",
  'hostctl.copied':        '✓ Nusxalandi!',
  'hostctl.copy':          'Havolani nusxalash',

  // ─── admin: question editor ───────────────────────────
  'editor.text':            'Savol matni',
  'editor.textPlaceholder': "Fransiyaning poytaxti qaysi shahar? (Enter → keyingi maydon, Shift+Enter → yangi qator)",
  'editor.option':          '{l} variant',
  'editor.correct':         "✓ To'g'ri",
  'editor.markCorrect':     "To'g'ri deb belgilash",
  'editor.timer':           'Taymer (soniya)',
  'editor.timerRange':      '5–120 s',
  'editor.save':            'Savolni saqlash',
  'editor.saving':          'Saqlanmoqda…',
  'editor.cancel':          'Bekor qilish',
  'editor.saveFailed':      "Savolni saqlab bo'lmadi: {err}",
  'editor.deleteFailed':    "Savolni o'chirib bo'lmadi: {err}",
  'editor.add':             "+ Savol qo'shish",
  'editor.none':            "Hozircha savollar yo'q. Yuqoridan qo'shing.",
  'editor.dragHint':        "Tartibini o'zgartirish uchun ⠿ belgisini suring",
  'editor.edit':            'Tahrirlash',
  'editor.delete':          "O'chirish",
  'editor.confirm':         'Tasdiqlaysizmi?',
  'editor.meta':            "⏱ {n} s · eng ko'pi bilan 30 ball",

  // ─── admin: history ───────────────────────────────────
  'history.minutes':   '{n} daq',
  'history.duration':  'Davomiyligi: {d}',
  'history.noPlayers': "O'yinchilar qayd etilmagan",
  'history.showLess':  "▲ Kamroq ko'rsatish",
  'history.showAll':   "▼ Barcha {n} ta o'yinchini ko'rsatish",
  'history.empty':     "Hozircha o'yinlar yo'q. Viktorina tugagach, o'yin avtomatik saqlanadi.",
  'history.csvRank':   "O'rin",
  'history.csvName':   'Ism',
  'history.csvScore':  'Ball',

  // ─── about page ───────────────────────────────────────
  'about.close':        '← Yopish',
  'about.builder':      'Yaratuvchi',
  'about.builderText':  "ML/DL mutaxassisi va Soluto hammuassisi. Ishlarini ochiq holda bajaradi va tajriba qiladi — texnik tahlillar, real vaqt tizimlari va haqiqatan ham ishlatiladigan vositalar. Stolida Linux pingvini o'yinchog'i ham turadi.",
  'about.whyTitle':     'Nega bu loyiha ochiq manbali',
  'about.whyText':      "Deyarli har bir viktorina vositasida yo pullik to'siq, yo foydalanuvchilar limiti, yo qaysi imkoniyatlar berilishini o'zi hal qiladigan sotuvchi bor. Bu loyiha shuni tuzatish uchun yaratilgan. Uni noutbukingizda ishga tushiring, ofis tarmog'ida ulashing yoki bulutga joylashtiring — hosting ham, nazorat ham o'zingizda.",
  'about.betterTitle':  'Biz nimani yaxshiroq qildik',
  'about.betterText':   "Har qanday auditoriya uchun mos, ixcham interfeys. O'yinchilar uchun akkaunt ochish shart emas — skanerlang va qo'shiling. Shaxsiy IP manzilda o'zingiz joylashtirib, butunlay oflayn ishlatish mumkin. Tezlikni rag'batlantiradigan taymerli ball tizimi. Firebase bepul tarifi bir vaqtda 100 tagacha o'yinchini bepul ko'taradi.",
};

export const LANGUAGES = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'uz', short: 'UZ', name: "O'zbekcha" },
];

export const translations = { en, uz };
export const DEFAULT_LANG = 'uz';
