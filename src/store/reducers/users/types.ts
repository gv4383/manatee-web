export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
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
