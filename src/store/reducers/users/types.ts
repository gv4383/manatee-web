interface UserAttributes {
  firstName: string;
  lastName: string;
  email: string;
}

export interface User {
  id: number;
  type: string;
  attributes: UserAttributes;
}

export interface FetchUsersState {
  data: User[];
  error: string | null;
  isLoading: boolean;
  hasResolved: boolean;
}

export interface UsersState {
  fetchUsers: FetchUsersState;
}
