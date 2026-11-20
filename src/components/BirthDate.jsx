import { useEffect, useState } from 'react';
import { useI18nContext } from '../context/I18nContext';
import { getLocaleByLanguage, translateText } from '../utils/translate';

export function BirthDate({ birthDate }) {
  const { language } = useI18nContext();

  const currentYear = new Date().getFullYear();
  const birthYear = birthDate.getFullYear();
  const age = currentYear - birthYear;

  const locale = getLocaleByLanguage(language);
  const formattedDate = birthDate.toLocaleDateString(locale);

  const hebrewMessage = `מזל טוב! אתה בן ${age}. תאריך הלידה שלך הוא: ${formattedDate}`;
  const [translatedMessage, setTranslatedMessage] = useState(hebrewMessage);

  useEffect(() => {
    let isCancelled = false;

    async function runTranslation() {
      try {
        const result = await translateText(hebrewMessage, language, 'he');
        if (!isCancelled) {
          setTranslatedMessage(result);
        }
      } catch (error) {
        console.error('Translation error in BirthDate:', error);
        if (!isCancelled) {
          setTranslatedMessage(hebrewMessage);
        }
      }
    }

    runTranslation();

    return () => {
      isCancelled = true;
    };
  }, [hebrewMessage, language]);

  return (
    <div>
      <p>{translatedMessage}</p>
    </div>
  );
}