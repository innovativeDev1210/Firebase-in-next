

"use client";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import signUp from '@/lib/SignUp';
import { useRouter } from 'next/navigation';
import React from 'react'

const SignUp = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }
    return (<div className=" flex justify-center items-center  h-full -w-full">
        <div className=" justify-center flex items-center">

            <form onSubmit={handleForm} className="form flex gap-6  flex-col">
                <Label htmlFor="email" className=' gap-2 flex flex-col '>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </Label>
                <Label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </Label>
                <Button type="submit" className=' text-start w-full'>Sign up</Button>
            </form>
        </div>
    </div>);
}

export default SignUp