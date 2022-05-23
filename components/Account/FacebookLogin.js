import React from 'react'
import FacebookIcon from '../../assets/images/login/facebook.png'
import Facebook from 'react-facebook-login/dist/facebook-login-render-props'
import Images from 'next/image'
export default function FacebookLogin() {
    console.log("FacebookLogin ::",process.env.NEXT_PUBLIC_APP_ID);
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <Facebook
            appId={process.env.NEXT_PUBLIC_APP_ID}
            scope='public_profile,email'
            callback={responseFacebook}
            render={renderProps => (
                <button onClick={renderProps.onClick} className='w-7 h-7 active:scale-90 cursor-pointer'><Images alt='' src={FacebookIcon} /></button>
            )}
        />
    )
}
