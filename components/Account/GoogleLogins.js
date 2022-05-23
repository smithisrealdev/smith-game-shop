import React from 'react'
import {GoogleLogin} from 'react-google-login';
import GoogleIcon from '../../assets/images/login/google.png'
import Images from 'next/image'
export default function GoogleLogins() {
    const responseGoogle = (response) => {
        console.log("response ::",response);
    }
    return (
        <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            render={renderProps => (
                <button onClick={renderProps.onClick} className='w-7 h-7 active:scale-90 cursor-pointer' disabled={renderProps.disabled}><Images alt='' src={GoogleIcon} /></button>
            )}
            // buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            autoLoad={false}
            scope={'profile'}

        // isSignedIn={true}
        />
    )
}
