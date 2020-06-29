import { Skill } from '../user/types';

interface SkillData {
  data: Skill;
}

export type CreateSkillState =
  | { status: 'IDLE'; error: null }
  | { status: 'LOADING'; error: null }
  | { status: 'SUCCESS'; error: null }
  | { status: 'FAILURE'; error: string };

export interface CreateSkillEvent {
  error: string;
  type: string;
}

export type DestroySkillState =
  | { status: 'IDLE'; error: null }
  | { status: 'LOADING'; error: null }
  | { status: 'SUCCESS'; error: null }
  | { status: 'FAILURE'; error: string };

export interface DestroySkillEvent {
  error: string;
  type: string;
}

export type UpdateSkillState =
  | { status: 'IDLE'; data: null; error: null }
  | { status: 'LOADING'; data: SkillData | null; error: null }
  | { status: 'SUCCESS'; data: SkillData; error: null }
  | { status: 'FAILURE'; data: SkillData | null; error: string };

export interface UpdateSkillEvent {
  data: SkillData;
  error: string;
  type: string;
}

export interface SkillState {
  create: CreateSkillState;
  destroy: DestroySkillState;
  update: UpdateSkillState;
}
