import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';

import {ReactComponent as Img1 } from 'asset/Auth_main.svg'


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
    height: 30%;
    flex-direction: column;
    justify-content: center;
    input {
        width: 80%;
        height: 30%;
        outline: none;
        border: none;
        margin-left: 10%;
        font-size: 1.5rem;
        padding-left: 20px;
        
        &::placeholder {
            font-size: 1rem;
        }
    }

    #Frist {
        background-color: rgb(239, 242, 245);
        border-top-left-radius: 6px; 
        border-top-right-radius: 6px;
    }

    #Last {
        border-bottom-left-radius: 6px; 
        border-bottom-right-radius: 6px;
    }

    div {
        display: flex;
        flex-direction: row;
        margin-left: 10%;
        margin-top: 20px;
        button {
            margin-right: 25px;
            border-radius: 50px;
            height: 50px;
            border: none;
            width: 25%;
            box-shadow: 0px 0px 3px gray;
            font-size: 1rem;            
        }

        #Login {
            background-color: rgb(83, 141, 244);
            color: white;
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
                            information by email address and password
                        </span>
                        <Form>
                            <input id="Frist" placeholder="Email Address"/>
                            <input id="Last" placeholder="PassWord"/>

                            <div>
                            <button id="Login">Login Now</button>
                            <button>Create Account</button>
                            </div>
                        </Form>
                    </Right>
                </LoginBox>
            </Wrapper>
        )
    }
}


export default Signin;