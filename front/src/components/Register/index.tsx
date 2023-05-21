import { FC } from 'react';
import styles from '../../styles/Username.module.css';
import Avatar from '../Avatar';
import { Formik, Field, FastField, Form } from 'formik';

import * as Yup from 'yup';

const Register: FC = ({}) => {
  /* const formik = useFormik({
    initialValues: {
      username: '',
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, 'Must be more than 3 character')
        .max(6, 'Name must be 20 characters or less.')
        .required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      terms: Yup.array().required('Terms of service must be checked'),
    }),

    onSubmit: (values: any) => {
      console.log('form submitted');
      console.log(values);
    },
  }); */

  return (
    <div className="container mx-auto border">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500"> Explore More by connecting with us.</span>
          </div>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().min(2, 'npapap 2').max(6, 'nanana 6').required(),
            })}
            onSubmit={(values) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
            render={(formikProps) => (
              <Form className="fpy-1 text-center">
                <div className="profile flex justify-center py-4">
                  <Avatar />
                </div>
                <div className="textbox flex flex-col items-center gap-6">
                  <label htmlFor="username">Username</label>
                  <FastField name="username" placeholder="Weezy">
                    {({ field, form, meta }: any) => (
                      <div>
                        <input placeholder="username" {...field} className={styles.textbox} />
                        {/**
                         * This updates normally because it's from the same slice of Formik state,
                         * i.e. path to the object matches the name of this <FastField />
                         */}
                        {meta.touched ? meta.error : null}

                        {/** This won't ever update since it's coming from
                  from another <Field>/<FastField>'s (i.e. firstName's) slice   */}
                        {form.touched.username && form.errors.username ? form.errors.username : null}

                        {/* Imperative methods still work as expected */}
                        <button className={styles.btn} type="submit">
                          Let's Go
                        </button>
                      </div>
                    )}
                  </FastField>
                  {/* <input
                    className={styles.textbox}
                    id="username"
                    type="text"
                    placeholder="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  <button className={styles.btn} type="submit">
                    Let's Go
                  </button> */}
                </div>
                <div className="text-center py-4">
                  <span className="text-gray-500">
                    Not a Member{' '}
                    <button type="submit" className="text-red-600 ml-1">
                      Register now
                    </button>
                  </span>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
