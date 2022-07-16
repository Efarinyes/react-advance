import {Formik, Form } from 'formik';
import { MyTextInput } from '../components';

import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: { [x: string]: any } = {};
const requiredFileds: { [x: string]: any } = {};


for (const input of formJson) {
    initialValues[input.name] = input.value;
    if (!input.validations) continue;

    let schema = Yup.string()


    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Aquest camp es necessari')
        }
        if(rule.type === 'minLength'){
            schema = schema.min((rule as any).value || 2, `El camp ha de tenir una longitud mínima de ${( rule as any).value || 2}`)
        }
        if(rule.type === 'email'){
            schema = schema.email('El camp ha de ser un email vàlid')
        }
        if(rule.type === 'minLengthPassword'){
            schema = schema.max((rule as any).value, `El camp ha de tenir una longitud màxima de ${( rule as any).value}`)
        }
        if(rule.type === 'equalTo') {
            schema = schema.oneOf([Yup.ref((rule as any).value), null], `Els camps no són iguals`)
        }
    }
    requiredFileds[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFileds})

export const DynamicFormPage = () => {
  return (
    <div>
        <h1> Dynamic Form Page</h1>
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = { (values) => {
                console.log(values);
            }}
        >
            { (formik) => (
                <Form noValidate>
                    { formJson.map( ({ type, name, label, placeholder, options })  => {

                        if( type === 'input' ||  type === 'email' || type === 'password') { 
                            return <MyTextInput 
                            key={name}
                            type = {( type as any)} 
                            name = {name} 
                            label = {label} 
                            placeholder = {placeholder}/> 
                        } else if ( type === 'select') {
                            return (
                                <MySelect 
                                    key={name}
                                    name = {name}
                                    label = {label}
                                >
                                    <option value="">Selecciona una opció</option>
                                   {
                                    options?.map( ({label, id}) => (
                                        <option key={id} value={id}>{label}</option>
                                    ))
                                   } 

                                </MySelect>
                            )
                        }
                         throw new Error('Tipo de input no soportado');
                      
                    })}
                    <button type = 'submit'>submit</button>
                </Form>
                
            ) }
        </Formik>

    </div>
  )
}
