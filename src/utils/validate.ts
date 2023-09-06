const EMAIL_REGEX = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

export const validateEmail = (value: string) => {
  return EMAIL_REGEX.test(value);
};

export const validatePassword = (value: string) => {
  return PASSWORD_REGEX.test(value);
};