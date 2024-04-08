import { UserStatus } from 'src/enums/user.enum';
import { ILocation } from './location.interface';
import { IEpisode } from './episode.interface';

export interface Icharacter {
  id?: number;
  first_name: string;
  last_name: string;
  status?: UserStatus;
  state_of_origin: string;
  gender?: 'MALE' | 'FEMALE';
  location?: ILocation;
  episode?: IEpisode;
}
