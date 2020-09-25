import { Skill } from '../skill/types';
import { User } from '../user/types';

export interface SearchSkillData {
  data: Skill[];
  included: User[];
}

export type SearchSkillState =
  | { status: 'IDLE'; data: null; error: null }
  | { status: 'LOADING'; data: SearchSkillData | null; error: null }
  | { status: 'SUCCESS'; data: SearchSkillData; error: null }
  | { status: 'FAILURE'; data: SearchSkillData | null; error: string };

export interface SearchSkillEvent {
  data: SearchSkillData;
  error: string;
  type: string;
}
