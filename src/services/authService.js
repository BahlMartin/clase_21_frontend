async function login(email,password){
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

export default login