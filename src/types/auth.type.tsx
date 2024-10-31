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
  auth: string;
  setAuth: (value: string) => void;
};

export type typeComplete = {
  isComplete: boolean;
  method: string;
  setIsComplete: (value: boolean) => void;
  setMethod: (value: string) => void;
};
