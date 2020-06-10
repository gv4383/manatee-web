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

export interface RelationshipSkill {
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

export interface UserData {
  data: User;
  included: Skill[];
}

export type UserState =
  | { status: 'IDLE'; data: null; error: null }
  | { status: 'LOADING'; data: UserData | null; error: null }
  | { status: 'SUCCESS'; data: UserData; error: null }
  | { status: 'FAILURE'; data: UserData | null; error: string };

export interface UserEvent {
  data: UserData;
  error: string;
  type: string;
}
