const LOCALE_MAP = {
  he: 'he-IL',
  en: 'en-US',
  fr: 'fr-FR',
};

export function getLocaleByLanguage(lang) {
  return LOCALE_MAP[lang] || 'he-IL';
}

export async function translateText(word, targetLang, sourceLang = 'he') {
  if (!word || targetLang === sourceLang) {
    return word;
  }

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    word
  )}&langpair=${sourceLang}|${targetLang}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('שגיאה בפנייה לשירות התרגום');
  }

  const data = await response.json();
  return data?.responseData?.translatedText || word;
}