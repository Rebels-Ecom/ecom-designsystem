import { TFormInputType, TPattern } from "./types";

export const validatePattern = (pattern: TPattern, val?: string) => {
  switch(pattern) {
    case 'email':
      return val && isEmail(val)
    case 'password':
      return val && isPassword(val)
    default:
      // TODO: add all patterns
      return true;
  }
}

export const validateField = (field: TFormInputType) => {
  console.log(`${field.name}: ${!!(field.value ?? field.originalValue)}`)
  if (field.required) {
    if (field.pattern) {
      return !!validatePattern(field.pattern, (field.value ?? field.originalValue)) && !!(field.value ?? field.originalValue);
    }
    return !!(field.value ?? field.originalValue);
  } else {
    if (field.pattern) {
      return !!validatePattern(field.pattern, (field.value ?? field.originalValue));
    }
    return true;
  }
}

export const isEmail = (val?: string) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return val && emailRegex.test(val);
}

export const isPassword = (val?: string) => {
  // const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
  // const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  // const pwdRegex = /^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&*\-_+=[\]{}|\\:',?/`~"();!]|\.(?!@)){8,16}$/;

  return val && val !== '';
  // return val && pwdRegex.test(val);
}
