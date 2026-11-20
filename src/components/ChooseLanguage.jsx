import { useI18nContext } from '../context/I18nContext';

export function ChooseLanguage() {
  // חילוץ רק של פונקציית השינוי באמצעות destructuring
  const { changeLanguage } = useI18nContext();

  const handleChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select">בחר שפה: </label>
      <select id="language-select" defaultValue="he" onChange={handleChange}>
        <option value="he">עברית</option>
        <option value="en">English</option>
        <option value="fr">Francais</option>
      </select>
    </div>
  );
}