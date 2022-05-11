import { FormikProps } from 'formik';

export interface FormValues {
  name: string;
  email: string;
  password: string;
}
export interface FormProps {
  name: string;
  email: string;
  password: string;
}

export type TSignUpContainer = {} & FormikProps<FormValues>;

export type TSignUpScreen = {
  isLoading: boolean;
  isButtonDisabled: boolean;
  onSignUpPress: () => void;
  onBackPress: () => void;
} & Pick<
  FormikProps<FormValues>,
  'values' | 'errors' | 'handleChange' | 'handleBlur'
>;
