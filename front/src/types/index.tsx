export type RegisterUserTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type InputsType = {
  text: 'name' | 'email' | 'password' | 'confirmPassword';
  type: string;
}[];
