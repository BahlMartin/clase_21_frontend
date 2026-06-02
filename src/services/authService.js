export async function login(email,password){
    try{
        const response_http = await fetch('http://localhost:8080/api/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    const response = await response_http.json()
    console.log(response)
    }catch(error){
        throw new Error('Error al iniciar sesion')
    }
    
    
}

export async function resetPassword(password, reset_password_token){
    try{
            const response_http = await fetch('https://clase-21-backend.vercel.app/api/auth/reset-password',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${reset_password_token}`
            },
            body: JSON.stringify({
                password: password
            })
     })
    const response = await response_http.json()
    console.log(response)
    }catch(error){
        throw new Error('Error al restablecer la contraseña')
    }
}    