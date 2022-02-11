import {
  get_user_name,
  get_user_name_fa,
  get_user_rank,
  get_user_join_date,
  get_plants_count,
  get_plants,
} from '../Redux/Actions/Main';

//Initial user and plant information
export const GetUserAndPlants = [
  get_user_name,
  get_user_name_fa,
  get_user_rank,
  get_user_join_date,
  get_plants_count,
  get_plants,
];
