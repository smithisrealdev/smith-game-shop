import React, { useState } from 'react'
import AnimationLottie from '../../utils/animationLottie'
import RegisterAnimation from '../../assets/json/register.json'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
export default function Register({ setAlreadyAccount }) {
    const { category } = useSelector((state) => state.main);
    const [password, setPassword] = useState()
    const [confrimPassword, setConfrimPassword] = useState()
    const [showPassword, setShowPassword] = useState(true)
    const [showConfrimPassword, setShowConfrimPassword] = useState(true)
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleChangeConfrimPassword = (event) => {
        setConfrimPassword(event.target.value)
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    const handleClickShowConfrimPassword = () => {
        setShowConfrimPassword(!showConfrimPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const TextFields = styled(TextField)({
        '& label.Mui-focused': {
            color: 'gray',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: category === 'arcade' ? '#fb923c' :
                category === 'strategy' ? '#f43f5f' :
                    category === 'action' ? '#12b981' :
                        '#a855f7',
        },
        '& fieldset': {
            borderRadius: 12,
            borderWidth: 2,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: category === 'arcade' ? '#fb923c' :
                    category === 'strategy' ? '#f43f5f' :
                        category === 'action' ? '#12b981' :
                            '#a855f7',
            },
            '&.Mui-focused fieldset': {
                borderColor: category === 'arcade' ? '#fb923c' :
                    category === 'strategy' ? '#f43f5f' :
                        category === 'action' ? '#12b981' :
                            '#a855f7',
            },
        },
    });
    const Checkboxs = styled(Checkbox)({
        color: category === 'arcade' ? '#fb923c' :
            category === 'strategy' ? '#f43f5f' :
                category === 'action' ? '#12b981' :
                    '#a855f7',
        '&.Mui-checked': {
            color: category === 'arcade' ? '#fb923c' :
                category === 'strategy' ? '#f43f5f' :
                    category === 'action' ? '#12b981' :
                        '#a855f7',
        },
    });
    const ButtonCreate = styled(Button)({
        '&:hover': {
            backgroundColor: category === 'arcade' ? '#fb923c' :
                category === 'strategy' ? '#f43f5f' :
                    category === 'action' ? '#12b981' :
                        '#a855f7',
        }
    });
    const LinearProgressPassword = styled(LinearProgress)(({ theme }) => ({
        borderRadius: 5,
        height: 6,
        borderWidth: 1,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: 'white',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: category === 'arcade' ? '#fb923c' :
                category === 'strategy' ? '#f43f5f' :
                    category === 'action' ? '#12b981' :
                        '#a855f7',
        },
    }));
    return (
        <div className="flex flex-1 h-full items-center justify-center ">
            <div className="flex flex-1 flex-col">
                <h1 className={`font-bold text-4xl mb-3 ${category === 'arcade' ? 'text-orange-500' :
                    category === 'strategy' ? 'text-rose-500' :
                        category === 'action' ? 'text-green-500' :
                            'text-purple-500'
                    }`}>
                    Create Account
                </h1>
                <div className="flex pr-4 flex-col mt-2 gap-4">
                    <TextFields id="name" label={<h1>Your Name</h1>} variant="outlined" />
                    <TextFields id="email" label={<h1>Email</h1>} variant="outlined" />
                    <TextFields id="phoneNumber" label={<h1>Phone Number</h1>} variant="outlined" />
                    <FormControl sx={{
                        '& label.Mui-focused': {
                            color: 'gray',
                        },
                        '& fieldset': {
                            borderRadius: 3,
                            borderWidth: 2,
                        }, '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: category === 'arcade' ? '#fb923c' :
                                    category === 'strategy' ? '#f43f5f' :
                                        category === 'action' ? '#12b981' :
                                            '#a855f7',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: category === 'arcade' ? '#fb923c' :
                                    category === 'strategy' ? '#f43f5f' :
                                        category === 'action' ? '#12b981' :
                                            '#a855f7',
                            },
                        },
                    }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password"><h1>Password</h1></InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleChangePassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={<h1>Password</h1>}
                        />
                    </FormControl>
                    <div className={`${password ? 'flex flex-1 justify-between pl-2 -mt-3 pr-4 items-center' : 'hidden'} `}>
                        <LinearProgressPassword sx={{
                            borderRadius: 12,
                        }} className="w-52" variant="determinate" value={40} />
                        <h1>
                            week
                        </h1>
                    </div>
                    <FormControl sx={{
                        '& label.Mui-focused': {
                            color: 'gray',
                        },
                        '& fieldset': {
                            borderRadius: 3,
                            borderWidth: 2,
                        }, '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: category === 'arcade' ? '#fb923c' :
                                    category === 'strategy' ? '#f43f5f' :
                                        category === 'action' ? '#12b981' :
                                            '#a855f7',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: category === 'arcade' ? '#fb923c' :
                                    category === 'strategy' ? '#f43f5f' :
                                        category === 'action' ? '#12b981' :
                                            '#a855f7',
                            },
                        },
                    }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password"><h1>Confrim Password</h1></InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showConfrimPassword ? 'text' : 'password'}
                            value={confrimPassword}
                            onChange={handleChangeConfrimPassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfrimPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConfrimPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={<h1>Confrim Password</h1>}
                        />
                    </FormControl>
                    <div className={`${confrimPassword ? 'flex flex-1 justify-between pl-2 -mt-3 pr-4 items-center' : 'hidden'} `}>
                        <LinearProgressPassword sx={{
                            borderRadius: 12,
                        }} className="w-52" variant="determinate" value={40} />
                        <h1>
                            week
                        </h1>
                    </div>
                </div>
                <div className="mt-2 flex flex-1 flex-col">
                    <FormControlLabel control={<Checkboxs />} label={<h1 className="text-sm">I have read and accept Terms of Use and Privacy Notice</h1>} />
                </div>
                {/* <div className='flex flex-1 items-center justify-center'>
                    <div onClick={() => setAlreadyAccount(false)} className=' underline cursor-pointer'>
                        Do you have an account?
                    </div>
                </div> */}
                <div className='flex mt-10 flex-1 items-center justify-around'>
                    <div className={` cursor-pointer active:scale-95
                    ${category === 'arcade' ? 'text-orange-500' :
                            category === 'strategy' ? 'text-rose-500' :
                                category === 'action' ? 'text-green-500' :
                                    'text-purple-500'
                        }`} onClick={() => setAlreadyAccount(false)}>
                        Login
                    </div>
                    <ButtonCreate className={`active:scale-95 px-12 ${category === 'arcade' ? 'bg-orange-500' :
                        category === 'strategy' ? 'bg-rose-500' :
                            category === 'action' ? 'bg-green-500' :
                                'bg-purple-500'
                        }`} variant="contained"><h1>Create</h1></ButtonCreate>
                </div>

            </div>
            <div className="flex  w-3/5 items-center justify-center ">
                <AnimationLottie
                    animationData={RegisterAnimation}
                    height={'100%'}
                    width={'100%'} />
            </div>
        </div>
    )
}
