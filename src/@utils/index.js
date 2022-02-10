// A function for translating
// English numbers to Persian
export const translateNumber = (inputText) => {
  if (inputText !== null) {
    let text = inputText.toString();
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    let outputText = text.replace(/[0-9]/g, (d) => {
      return persianDigits[d];
    });
    return outputText;
  }
};

//A function for translating ranks
//to persian
export const translateRank = (rank) => {
  switch (rank) {
    case 'beginner':
      return 'تازه‌کار';

    case 'intermediate':
      return 'کاربلد';

    case 'expert':
      return 'اوستا';

    default:
      return '';
  }
};
