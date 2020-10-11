class Auth{
    constructor(){
    }

    loginUser = (userid, password, cb) => {
        if(userid === 'LM001' && password === '001'){
            alert('User login successful')
            cb(true)
        }
        else{
            alert('Access Denied!, Invalid Credentials!')
            cb(false)
        }
       
    }

    logoutUser = (cb) => {
        alert('User logged out')
        cb(false)
    }
}

export default new Auth()