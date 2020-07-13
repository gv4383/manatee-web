import { Skill } from '../skill/types';
import { User } from '../user/types';

export interface UsersData {
  data: User[];
  included: Skill[];
}

export type UsersState =
  | { status: 'IDLE'; data: null; error: null }
  | { status: 'LOADING'; data: UsersData | null; error: null }
  | { status: 'SUCCESS'; data: UsersData; error: null }
  | { status: 'FAILURE'; data: UsersData | null; error: string };
