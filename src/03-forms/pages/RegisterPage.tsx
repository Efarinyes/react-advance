import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const {onChange, formData, resetForm, isValidEmail, name, email, password1, password2} =  useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log( formData );
    }

  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={ onSubmit} noValidate >
            <input 
                type="text" 
                placeholder="Name"
                value = {name}
                name="name"
                onChange = {onChange}
                className = { `${name.trim().length <= 0 && 'has-error'}` } 
            />
           { name.trim().length <= 0 &&  <span> Aquest camp es necessari </span>}
            <input 
                type="email" 
                placeholder="Email"
                value = {email}
                name="email"
                onChange = {onChange}
                className = { `${!isValidEmail && 'has-error'}` }
            />
            { !isValidEmail(email) && <span> El correu no és vàlid </span>}
            <input 
                type="password" 
                placeholder="Password1"
                value = {password1}
                name="password1"
                onChange = { onChange }
            />
            { password1.trim().length <= 0 &&  <span> Aquest camp es necessari </span>}
            { password1.trim().length < 6 && password1.trim().length > 0 && <span> La contrasenya ha de ser de 6 caracters mínim </span>}
            <input 
                type="password" 
                placeholder="Confirm Password"
                value = {password2}
                name="password2"
                onChange = {onChange}
            />
            { password2.trim().length <= 0 &&  <span> Aquest camp es necessari </span>}
            { password2.trim().length > 0 && password1 !== password2 && <span> La contrassenya no coincideix </span>}

            <button type = 'submit'>Create</button>
            <button type = 'button' onClick={ resetForm }>  Reset Form</button>
        </form>
    </div>
  )
}
