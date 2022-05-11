import { FormikProps } from 'formik';

export interface FormValues {
  name: string;
  email: string;
}

export interface FormProps {
  name: string;
  email: string;
}

export type TProfileContainer = {
  // signIn: () => void;
} & FormikProps<FormValues>;

export type TProfileScreen = {
  isLoading: boolean;
  isButtonDisabled: boolean;
  onDonePress: () => void;
  onLogOutPress: () => void;
} & Pick<
  FormikProps<FormValues>,
  'values' | 'errors' | 'handleChange' | 'handleBlur'
>;
