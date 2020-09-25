import { Skill } from '../skill/types';
import { User } from '../user/types';

export interface SearchSkillData {
  data: Skill[];
  included: User[];
}
