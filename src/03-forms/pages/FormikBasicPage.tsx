
import { useFormik, FormikErrors } from 'formik'

import '../styles/styles.css';

interface FormValues {
    firstName: string
    lastName: string
    email: string
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {

        const errors: FormikErrors<FormValues> = {}

        if (!firstName) {
            errors.firstName = 'El nom és necessari'
        } else if (firstName.length > 15 ) {
            errors.firstName = 'EL nom ha de ser de menys de 15 caràcters'
        }
        if(!lastName) {
            errors.lastName = 'El cgnom és necessari'
        } else if (lastName.length > 20) {
            errors.lastName = 'El cgnom ha de ser de menys de 20 caràcters'
        }
        if(!email) {
            errors.email = 'El email és necessari'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'El format del email no és correcte'
        }

        return errors

    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },

        onSubmit: (values) => {
            console.log(values);
        },
        validate
        
    });

  return (
    <div>
        <h1> Formik Basic Tutorial </h1>

        <form noValidate onSubmit = { handleSubmit }>
            <label htmlFor="firstName"> Nom</label>
            <input 
                type="text" 
                name = 'firstName'
                onBlur={ handleBlur }
                onChange={handleChange}
                value={ values.firstName}
            />
            { touched.firstName && errors.firstName && <span> { errors.firstName } </span>}

            <label htmlFor="lastName"> Cognom</label>
            <input 
                type="text" 
                name = 'lastName'
                onBlur={ handleBlur }
                onChange={handleChange}
                value={ values.lastName}
            />
           { touched.lastName && errors.lastName && <span> { errors.lastName }</span>}
            <label htmlFor="email"> Adreça Electrònica</label>
            <input 
                type="email" 
                name = 'email'
                onBlur={ handleBlur }
                onChange={handleChange}
                value={ values.email}
            />
           { touched.email &&  errors.email && <span> { errors.email} </span>}
            
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}
