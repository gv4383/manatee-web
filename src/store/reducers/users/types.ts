interface UserAttributes {
  first_name: string;
  last_name: string;
  email: string;
}

interface SkillAttributes {
  name: string;
  description: string;
  rating: number;
  user_id: number;
}

interface RelationshipSkill {
  id: string;
  type: string;
}

interface RelationshipSkills {
  data: RelationshipSkill[];
}

interface Relationships {
  skills: RelationshipSkills;
}

export interface User {
  id: string;
  type: string;
  attributes: UserAttributes;
  relationships: Relationships;
}

export interface Skill {
  id: string;
  type: string;
  attributes: SkillAttributes;
}

export interface UsersData {
  data: User[];
  included: Skill[];
}

export type UsersState =
  | { status: 'IDLE'; data: null; error: null }
  | { status: 'LOADING'; data: UsersData | null; error: null }
  | { status: 'SUCCESS'; data: UsersData; error: null }
  | { status: 'FAILURE'; data: UsersData | null; error: string };
