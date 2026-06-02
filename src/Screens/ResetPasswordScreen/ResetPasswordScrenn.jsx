import React from 'react'
import { Navigate, useSearchParams } from 'react-router'
import resetPassword from '../../services/authService'

const ResetPasswordScrenn = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const reset_password_token = searchParams.get('reset_password_token')

    if(!reset_password_token){
        return <Navigate to={'/login'} />
    }
    function onSubmit(formData){
        if (formData.password !== formData.password_confirmation){
            alert('Las contraseñas no coinciden')
            return <Navigate to={'/reset-password?reset_password_token=' + reset_password_token} />
        }
        resetPassword(formData.password, reset_password_token)
    }
    const { handleSubmit } = useForm(initial_form_state, onSubmit)
    return (
        <div>
            <h1>Restablecer Contraseña</h1>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password">Nueva contraseña</label>
                    <input type="password" name='password' id='password' value={formState.password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirmar contraseña</label>
                    <input type="password" name='password_confirmation' id='password_confirmation' value={formState.password_confirmation} onChange={handleChange} />
                </div>

                <button type='submit'>Restablecer Contraseña</button>
            </form>
        </div>
    )
}

export default ResetPasswordScrenn
