import * as Yup from 'yup';

import { Strings } from 'constants';

const emailRegex = /^([^ ]*)+@?([^ ]*)+[.]+[a-zA-Z]{2,}$/;

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required(Strings.validations.requiredField)
    .email(Strings.validations.emailOrPassword)
    .matches(emailRegex, {
      message: Strings.validations.emailOrPassword,
      excludeEmptyString: true,
    }),
  password: Yup.string()
    .min(6, Strings.validations.emailOrPassword)
    .required(Strings.validations.requiredField),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required(Strings.validations.requiredField),
  email: Yup.string()
    .required(Strings.validations.requiredField)
    .email(Strings.validations.emailOrPassword)
    .matches(emailRegex, {
      message: Strings.validations.emailOrPassword,
      excludeEmptyString: true,
    }),
  password: Yup.string()
    .min(2, Strings.validations.emailOrPassword)
    .required(Strings.validations.requiredField),
});

export const editProfileSchema = Yup.object().shape({
  name: Yup.string().required(Strings.validations.requiredField),
  email: Yup.string()
    .required(Strings.validations.requiredField)
    .email(Strings.validations.emailOrPassword)
    .matches(emailRegex, {
      message: Strings.validations.emailOrPassword,
      excludeEmptyString: true,
    }),
});
