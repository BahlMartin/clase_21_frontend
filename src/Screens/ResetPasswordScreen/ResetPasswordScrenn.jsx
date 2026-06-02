import React from 'react'
import { Navigate, useSearchParams } from 'react-router'

const ResetPasswordScrenn = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const reser_password_token = searchParams.get('reset_password_token')
    if(!reser_password_token){
        return <Navigate to={'/login'} />
    }
    return (
        <div>
            <h1>Reset Password Screen</h1>
            <form>
                
            </form>
        
        </div>
    )
}

export default ResetPasswordScrenn
