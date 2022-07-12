
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1> Formik Components Tutorial </h1>

            <Formik
                initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Màxim 15 caràcters').required('Camp Obligatori'),
                    lastName: Yup.string().max(20, 'Màxim 20 caràcters').required('Camp Obligatori'),
                    email: Yup.string().email('Email no vàlid').required('Camp Obligatori'),
                    terms: Yup.boolean().oneOf([true], 'Acceptar termes i condicions').required('Camp Obligatori'),
                    jobType: Yup.string().notOneOf(['Volunteer'], 'Opcio no disponible').required('Camp Obligatori'),
                })}
            >
                {
                    formik => (
                        <Form>
                            <label htmlFor="firstName"> Nom</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component='span' />

                            <label htmlFor="lastName"> Cognom</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component='span' />

                            <label htmlFor="email"> Adreça Electrònica</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component='span' />

                            <label htmlFor="jobType">Job type</label>
                            <Field name="jobType" as="select">
                                <option value="">Select</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Internship">Internship</option>
                                <option value="Volunteer">Volunteer</option>
                            </Field>
                            <ErrorMessage name="jobType" component='span' />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Termes i condicions</label>

                            <ErrorMessage name="terms" component='span' />

                            <button type='submit'>Enviar</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    )
}
