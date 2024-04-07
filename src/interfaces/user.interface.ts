import { UserStatus } from 'src/enums/user.enum';

export interface IUser {
  id?: number;
  status?: UserStatus;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  email_confirm?: boolean;
}
