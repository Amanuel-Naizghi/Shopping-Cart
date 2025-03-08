import Header from './header';

export default function Login(){
    return(
        <div className='login-page-container'>
            <Header></Header>
            <div className="login-container">
                <form className="login-content" action="">
                    <legend>Sign in</legend>
                    <label name='email'>Email:</label>
                    <input type="email" id='email' required/>
                    <label name='password'>Password:</label>
                    <input type="password" id='password' required/>
                    <button>Login</button>
                    <p>Don't have an account? <span>Register here</span></p>
                </form>
            </div>
        </div>
    )
}