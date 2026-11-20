import { ChooseLanguage } from './components/ChooseLanguage';
import { BirthDate } from './components/BirthDate';
import { GreetingsList } from './components/GreetingsList';

export default function App() {
  const userBirthDate = new Date(2015, 10, 20);
  const greetings = [
    'יום הולדת שמח!',
    'הרבה בריאות ואושר',
    'עד 120 שנה',
  ];

  return (
    <main>
      <ChooseLanguage />
      <hr />
      <BirthDate birthDate={userBirthDate} />
      <hr />
      <GreetingsList greetings={greetings} />
    </main>
  );
}