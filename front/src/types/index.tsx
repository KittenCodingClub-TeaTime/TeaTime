export type RegisterUserTypes = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type InputsType = {
  text: 'username' | 'email' | 'password' | 'confirmPassword';
  type: string;
}[];
