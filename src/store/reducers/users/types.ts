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

export interface UserData {
  data: User[];
  included: Skill[];
}

export interface FetchUsersState {
  data: UserData | null;
  error: string | null;
  isLoading: boolean;
  hasResolved: boolean;
}

export interface UsersState {
  fetchUsers: FetchUsersState;
}
