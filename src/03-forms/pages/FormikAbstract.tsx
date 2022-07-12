
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
// import { MySlect } from '../components/MySelect';
// import { MyTextInput } from '../components/MyTextInput';
// import { MyCheckBox } from '../components/MyCheckBox';
 import {MySelect, MyCheckBox, MyTextInput } from '../components' // barrell tecnica
import '../styles/styles.css';


export const FormikAbstract = () => {

    return (
        <div>
            <h1> Formik Abstract Tutorial </h1>

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
                    (formik) => (
                        <Form>
                            <MyTextInput 
                                label="Nom" 
                                name="firstName"
                                placeholder='Nom'
                            />
                            
                            <MyTextInput 
                                label="Cognom" 
                                name="lastName" 
                                placeholder='Cognom' 
                            />
                           
                            <MyTextInput 
                                label='Email' 
                                name='email' 
                                type='email' 
                                placeholder='Email' 
                            />
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Opcions</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Internship">Internship</option>
                                <option value="Volunteer">Volunteer</option>
                            </MySelect>

                            <MyCheckBox label='Termes i condicions' name = 'terms' />
                            <button type='submit'>Enviar</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    )
}
