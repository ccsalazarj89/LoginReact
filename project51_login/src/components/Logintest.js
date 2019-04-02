import React, {Component} from 'react';

class Logintest extends Component{
    render(){
        return(
                <div class="login-page">
                <div class="form">
                <form class="login-form">
                    <div class="photo">
                    </div>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit">Ingresar</button>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
                </div>
            </div>  
        );
    }
}
    

export default Logintest