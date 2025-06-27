export interface ResponseAPI<T> {
  data: T[]
}

export interface RoleAPI {
  id: number;
  name: string;
  code: string;
  description: string;
}

export interface AdminAPI {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}