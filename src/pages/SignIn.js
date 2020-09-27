import React from 'react'
import signInImage from '../images/sign/Vector Smart Object.png'
const SignIn = () => {
    return (
        // start signin section 
        <section className="signin pt-5 pb-5 roboto-font">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={signInImage} className="signinimage ml-5" alt="smartObject"/>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center mt-5">
                        <h2 className="signinheader">Welcome back !</h2>
                        <form>
                            <div className="form-group">
                                <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"
                                    />
                            </div>
                            <div className="form-group">
                                <input type="password" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button className="btn my-2 my-sm-0" type="submit">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
    )
}

export default SignIn
