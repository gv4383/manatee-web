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

export interface SkillState {
  create: CreateSkillState;
  destroy: DestroySkillState;
}
