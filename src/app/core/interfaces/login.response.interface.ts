export interface LoginResponseInterface {
  payload: Payload;
  access_token: string;
  expires_in: string;
}

export interface Payload {
  id: string;
  email: string;
  role: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  PARTNER = 'PARTNER',
  GUEST = 'GUEST',
}
