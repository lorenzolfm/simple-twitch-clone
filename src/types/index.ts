export interface Stream {
  id: number,
  title: string,
  description: string,
  userId: string,
}

export interface CreateStreamForm {
  title: string,
  description: string,
}

export interface AuthState {
  isSignedIn: boolean | null;
  userId: string | null;
}

export interface StreamsState {
  [key: number]: Stream
}
