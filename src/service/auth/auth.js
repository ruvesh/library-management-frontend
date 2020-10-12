class Auth{
    constructor(){
        this.authenticated = false
        this.userid = ""
    }

    loginUser = (userid, password) => {
        if(userid === 'LM001' && password === '001'){
            alert('User login successful')
            this.authenticated = true
            this.userid = userid
        }
        else{
            alert('Access Denied!, Invalid Credentials!')
            this.authenticated = false
            this.userid = ""
        }
    }

    logoutUser = () => {
        alert('User logged out')
        this.authenticated = false
        this.userid = ""
    }

    isAuthenticated = () => (this.authenticated)

    getUserId = () => (this.userid)
}

export default new Auth()