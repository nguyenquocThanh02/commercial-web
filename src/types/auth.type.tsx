export type typeRegister = {
  name: string;
  account: string;
  password: string;
};

export type typeLogin = {
  account: string;
  password: string;
};

export type typeAuthState = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};
