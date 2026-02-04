import React, { useState } from 'react'
import CustomButton from '../components/common/CustomButton'


function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
    };
  return (
    <div className='bg-surface-ink rounded-lg p-4 size-auto md:max-w-2/4 mx-auto my-4'>
        <form className='w-full flex  flex-col items-center gap-3' onSubmit={handleSubmit}>

            <div className='text-center w-full flex  flex-col items-center'>
                <label className='font-bold' >Username</label>
                <input className='bg-surface-paper w-9/10 rounded-md text-center' type="text"  value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Your username'/>
            </div>

            <div className='text-center w-full flex  flex-col items-center'>
                <label className='font-bold'>Password</label>
                <input className='bg-surface-paper w-9/10 rounded-md text-center' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
            </div>
            <div>
                <CustomButton type="submit" variant="primary">
                    Login
                </CustomButton>
            </div>
        </form>
    </div>
  )
}

export default Login