
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    nom: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    nom: Yup.string().max(15, 'Màxim 15 caràcters').min(2, 'Minim dos lletres').required('Camp Obligatori'),
                    email: Yup.string().email('Email no vàlid').required('Camp Obligatori'),
                    password1: Yup.string().min(6, 'Mínim 6 caràcters').required('Camp Obligatori'),
                    password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords no son iguals').required('Camp Obligatori'),
                })}
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput
                                label="Nom"
                                name="nom"
                                placeholder='Nom'
                            />
                            <MyTextInput
                                label="Email"
                                name="email"
                                type='email'
                                placeholder='jonh@doe.es'
                            />
                            <MyTextInput
                                label="Password"
                                name="password1"
                                placeholder='Password'
                                type='password'
                            />
                            <MyTextInput
                                label="Confirmar Password"
                                name="password2"
                                placeholder='Confirmar Password'
                                type='password'
                            />

                            <button type="submit">Enviar</button>
                            <button type = 'button' onClick={ handleReset }>  Reset Form</button>

                        </Form>
                    )}

            </Formik>
        </div >
    )
}
