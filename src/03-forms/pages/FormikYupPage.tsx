
import { useFormik } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
    
    const {  handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Màxim 15 caràcters').required('Camp Obligatori'),
            lastName: Yup.string().max(20, 'Màxim 20 caràcters').required('Camp Obligatori'),
            email: Yup.string().email('Email no vàlid').required('Camp Obligatori'),
        })
        
    });

  return (
    <div>
        <h1> Formik Yup Tutorial </h1>

        <form noValidate onSubmit = { handleSubmit }>
            <label htmlFor="firstName"> Nom</label>
            <input 
                type="text" {...getFieldProps('firstName')} />
            { touched.firstName && errors.firstName && <span> { errors.firstName } </span>}

            <label htmlFor="lastName"> Cognom</label>
            <input 
                type="text" {...getFieldProps('lastName')} />
           { touched.lastName && errors.lastName && <span> { errors.lastName }</span>}
            <label htmlFor="email"> Adreça Electrònica</label>
            <input 
                type="email" { ...getFieldProps('email')} />
           { touched.email &&  errors.email && <span> { errors.email} </span>}
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}
