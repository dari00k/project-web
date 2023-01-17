import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import InstagramLogin from 'react-instagram-login';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const responseFacebook = (response) => {
        console.log(response);
    }

    const responseInstagram = (response) => {
        console.log(response);
    }

    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <br />
            <FacebookLogin
                appId="YOUR_APP_ID"
                callback={responseFacebook}
                render={renderProps => (
                    <Button variant="primary" onClick={renderProps.onClick}>
                        Login with Facebook
                    </Button>
                )}
            />
            <br />
            <br />
            <InstagramLogin
                clientId="YOUR_CLIENT_ID"
                buttonText="Login with Instagram"
                onSuccess={responseInstagram}
                onFailure={responseInstagram}
            />
        </div>
    );
};

export default Login;
