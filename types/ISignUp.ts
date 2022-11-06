export type ISignUpErrors = {
  hasErrors?: string;
};

export type SignUpResponse = {
  hasErrors: boolean;
  errors?: ISignUpErrors;
};

export type SignUpRequest = {
  name: string;
  username?: string;
  email?: string;
  password?: string;
};
