export function BirthDate({ birthDate }) {
  const currentYear = new Date().getFullYear();
  const birthYear = birthDate.getFullYear();
  const age = currentYear - birthYear;

  const formattedDate = birthDate.toLocaleDateString('he-IL');

  return (
    <div>
      <p>
        מזל טוב! אתה בן {age}. תאריך הלידה שלך הוא: {formattedDate}
      </p>
    </div>
  );
}