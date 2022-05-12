import { FormikProps } from 'formik';

export interface FormValues {
  email: string;
  password: string;
}

export interface FormProps {
  email: string;
  password: string;
}

export type TSignInContainer = {} & FormikProps<FormValues>;

export type TSignInScreen = {
  isLoading: boolean;
  isButtonDisabled: boolean;
  onSignInPress: () => void;
  onBackPress: () => void;
} & Pick<
  FormikProps<FormValues>,
  'values' | 'errors' | 'handleChange' | 'handleBlur'
>;
