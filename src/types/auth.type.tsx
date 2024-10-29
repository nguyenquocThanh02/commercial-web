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

export type typeComplete = {
  isComplete: boolean;
  method: string;
  setIsComplete: (value: boolean) => void;
  setMethod: (value: string) => void;
};
