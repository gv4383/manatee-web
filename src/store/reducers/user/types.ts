import { Skill } from '../skill/types';

interface UserAttributes {
  first_name: string;
  last_name: string;
  email: string;
}

export interface SkillRelationship {
  id: string;
  type: string;
}

interface SkillsRelationships {
  data: SkillRelationship[];
}

interface Relationships {
  skills: SkillsRelationships;
}

export interface User {
  id: string;
  type: string;
  attributes: UserAttributes;
  relationships: Relationships;
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
