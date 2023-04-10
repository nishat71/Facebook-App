import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [checkedIsLogin, setCheckedIsLogin,] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);





    const handleLogin = () => {
        setIsLogin(!isLogin);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);

        // isLogin ? processToLogin(email, password) : processToRegister(email, password);


        const userInfo = await fetch('http://localhost:3333/user', {
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        })
        setName('');
        setEmail('');
        setPassword('');
    }



    
    const handleEmailLogin = () => {
        
    }


    const processToRegister = () => {
        let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (password.length > 6 && validEmail.test(email)) {
            setIsLoading(true);

        
        }
    }



    return (
        <div className="login">
            <form className="inputs col-lg-4 mx-auto py-4 px-5 login_form" onSubmit={handleSubmit}>
                <h2 className="fw-bold text-center mb-3">
                    {isLogin ? "Login into your account" : "Register here"}
                </h2>
                <div className="">
                    {
                        isLogin && (
                            <input className="login_input fw-bold" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        )
                    }
                    <input className="login_input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="login_input" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div className='check_field'>
                        <input type="checkbox" id="registered" value="registered" onChange={handleLogin} />
                        <label className="registered-link" htmlFor="registered"> Already Registered ?</label>
                    </div>
                    <br />
                    <div className="text-center">
                        <div className="buttons text-center">
                            {isLogin ? (
                                <button type="submit" className="btn__regular rounded-2" onClick={handleEmailLogin}>
                                    Login
                                </button>
                            ) : (
                                <button type="submit" className="btn__regular rounded-2" onClick={processToRegister}>
                                    Register
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Login;