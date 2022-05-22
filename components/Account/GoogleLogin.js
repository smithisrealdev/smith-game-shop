import React from 'react'
import Google from 'react-google-login';
import GoogleIcon from '../../assets/images/login/google.png'
import Images from 'next/image'
const CLIENT_ID = '757696538840-nltbikdebvb4p8q9fstip5jou3euu3j3.apps.googleusercontent.com'
export default function GoogleLogin() {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <Google
            clientId={CLIENT_ID}
            render={renderProps => (
                <button onClick={renderProps.onClick} className='w-7 h-7 active:scale-90 cursor-pointer' disabled={renderProps.disabled}><Images alt='' src={GoogleIcon} /></button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            autoLoad={false}

        // isSignedIn={true}
        />
    )
}
