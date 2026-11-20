import { useEffect, useState } from 'react';
import { useI18nContext } from '../context/I18nContext';
import { translateText } from '../utils/translate';

export function GreetingCard({ greeting }) {
  const { language } = useI18nContext();
  const [translatedGreeting, setTranslatedGreeting] = useState(greeting);

  useEffect(() => {
    let isCancelled = false;

    async function runTranslation() {
      try {
        const result = await translateText(greeting, language, 'he');
        if (!isCancelled) {
          setTranslatedGreeting(result);
        }
      } catch (error) {
        console.error('Translation error in GreetingCard:', error);
        if (!isCancelled) {
          setTranslatedGreeting(greeting);
        }
      }
    }

    runTranslation();

    return () => {
      isCancelled = true;
    };
  }, [greeting, language]);

  return <div>{translatedGreeting}</div>;
}