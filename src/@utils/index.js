// A function for translating
// English numbers to Persian
export const translate = (inputText) => {
  if (inputText !== null) {
    let text = inputText.toString();
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    let outputText = text.replace(/[0-9]/g, (d) => {
      return persianDigits[d];
    });
    return outputText;
  }
};
