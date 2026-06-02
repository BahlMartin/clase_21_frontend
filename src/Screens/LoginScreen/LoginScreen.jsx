import React from 'react'
import { Link , useSearchParams} from 'react-router'
import useForm from '../../hooks/useForm'
import {login} from '../../services/authService'


const LoginScreen = () => {

    
    const initial_form_state = {
        email: '',
        password: ''
    }
    function onSubmit(formData){
        console.log('un usuario intento iniciar sesion', formData)
        login(formData.email, formData.password)
    }
    const { formState, handleChange, handleSubmit } = useForm(initial_form_state, onSubmit)
    return (
        <div>
            <h1>Iniciar Sesión</h1>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' value={formState.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name='password' id='password' value={formState.password} onChange={handleChange} />
                </div>

                <button type='submit'>Iniciar Sesión</button>
            </form>
            <p>¿No tienes una cuenta? <Link to={'/register'}>Registrate</Link></p>
        </div>
    )
}

export default LoginScreen

