import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as Img1 } from 'asset/Auth_main.svg'
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 80%;
    background-color: rgb(248, 250, 251);
    box-sizing: border-box;
    box-shadow: 0px 0px 3px gray;
    border-radius: 5px;
`

const Left = styled.div`
    width:60%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const SvgImage = styled(Img1)`
    width: 30vw;
    height: auto;
    margin: auto 0;
    padding: 20px;
   


  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const Right = styled.div`
    width:40%;
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        margin: 0px;
        margin-right: auto;
        font-size: 3rem;
        font-weight: 300;
        margin-left: 10%;
    }

    span {
        margin-top: 5%;
        margin-right: auto;
        margin-left: 10%;
    }
`

const Form = styled.form`
    display: flex;
    height: 40%;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    
    #First{
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        width: 80%;
        background-color: rgb(239, 242, 245);
        height: 30%;
        margin-left: 10%;
        display: flex;
        align-items: center;

        svg {
            margin-left: 20px;
            font-size: 2em;
        }

        input {
            background-color: rgb(239, 242, 245);
            height:95%;
            width: 100%;
            border: none;
            font-size: 1.4em;
            padding-left: 20px;
        }
    }

    #Second{
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        width: 80%;
        background-color: #ffffff;
        height: 30%;
        margin-left: 10%;
        display: flex;
        align-items: center;

        svg {
            margin-left: 20px;
            font-size: 2em;
        }

        input {
            height:95%;
            width: 100%;
            border: none;
            font-size: 1.4em;
            padding-left: 20px;
        }
    }

    #Save-pwd {
        display:flex;
        width: 100%;
        height: 20%;
        flex-direction: row;
        align-items: center;

        a {
            margin-left: auto;
            margin-right: 10%;
            text-decoration: none;
            color: black;
        }

        .round {
            position: relative;
            margin-left: 10%;
        }

        .round label {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 50%;
            cursor: pointer;
            height: 28px;
            left: 0;
            position: absolute;
            top: 0;
            width: 28px;
        }       

        .round label:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 7px;
            opacity: 0;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
        }

        .round input[type="checkbox"] {
            visibility: hidden;
        }

        .round input[type="checkbox"]:checked + label {
            background-color: #66bb6a;
            border-color: #66bb6a;
        }

        .round input[type="checkbox"]:checked + label:after {
            opacity: 1;
        }

        span {
            margin: 0px;
            margin-top: 5px;
            margin-left: 20px;
        }

        button {
        }
    }

    #btn {
        display: flex;
        width: 100%;
        height: 50%;
        flex-direction: row;
        margin-left: 10%;
        margin-top: 5%;

        #Login {
            box-shadow: 0px 0px 3px gray;
            border: none;
            width: 30%;
            height: 50%;
            border-radius: 50px;
            font-size: 1.5em;
            margin-right: 20px;
            color: white;
            background-color: rgb(80, 142, 242);            
            outline: none;
        }

        #Register {
            box-shadow: 0px 0px 3px gray;
            border: none;
            width: 30%;
            height: 50%;
            border-radius: 50px;
            font-size: 1.5em;
            background-color: rgb(255, 255, 255);
            outline: none;
        }
    }

    
`

class Signin extends Component {
    
    render () {
        return (
            <Wrapper>
                <LoginBox>
                    <Left>
                        <SvgImage />
                    </Left>
                    <Right>
                        <h1>WelCome Back :)</h1>
                        <span>
                            To keep Connect with us please login with your personal
                            <br/>
                            information by email address and password 🔔
                        </span>
                        <Form>
                            <div id="First">
                                <EmailIcon/>
                                <input placeholder="Email Address" />
                            </div>
                            <div id="Second">
                                <VpnKeyIcon/>
                                <input placeholder="Email Address" />
                            </div>
                            <div id="Save-pwd">
                                <div class="round">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox"></label>
                                </div>
                                <span>Remember Me</span>
                                <Link to="/">Forget Password?</Link>
                            </div>
                            <div id="btn">
                            <button id="Login" type="submit">Login Now</button>
                            <button id="Register" type="button">Create Account</button>
                            </div>
                        </Form>
                    </Right>
                </LoginBox>
            </Wrapper>
        )
    }
}


export default Signin;