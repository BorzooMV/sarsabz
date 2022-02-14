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

//A function for get initial information
//about the user and his/her plants
export const getInitInfo = (dispatch, actions) => {
  const [
    get_user_name,
    get_user_name_fa,
    get_user_rank,
    get_user_join_date,
    get_plants_count,
    get_plants,
  ] = actions;

  dispatch(get_user_name);
  dispatch(get_user_name_fa);
  dispatch(get_user_rank);
  dispatch(get_user_join_date);
  dispatch(get_plants_count);
  dispatch(get_plants);
};
