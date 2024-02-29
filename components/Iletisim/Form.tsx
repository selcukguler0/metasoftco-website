"use client"

import { IPrevState, sendMail } from '@/app/actions'
import React, { useEffect, useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState: IPrevState = {
    error: undefined,
    message: undefined,
}
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <div className='w-full text-center'>
            <button aria-disabled={pending} type='submit' className='rounded-full bg-metasoftco-red text-white mt-4 px-8 py-3 font-bold transition-all delay-100 hover:scale-110'>{pending ? "Gönderiliyor" : "Gönder"}</button>
        </div>
    )
}
export default function Form() {
    const [formState, formAction] = useFormState(sendMail, initialState);
    const formRef = React.useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!formState.error && formRef.current) {
            formRef.current.reset();
        }
    }, [formState])
    return (
        <form ref={formRef} action={formAction} className='my-24'>
            {formState && formState.error && formState.message && <div className='p-4 rounded-md bg-red-400 text-red-900 max-w-fit'>{formState.message}</div>}
            {formState && !formState.error && formState.message && <div className='p-4 rounded-md bg-green-400 text-green-900'>{formState.message}</div>}
            <div className='mt-3'>
                <label htmlFor="email">E-posta Adresiniz*</label>
                <input required type="email" name='email' id="email" className='w-full border-2 bg-metasoftco-bg/80 text-black border-gray-300 p-3' />
            </div>
            <div className='mt-4'>
                <label htmlFor="message">Mesajınız*</label>
                <textarea required name='message' id="message" className='w-full border-2 bg-metasoftco-bg/80 text-black resize-none border-gray-300 p-3' />
            </div>
            <SubmitButton />
        </form>
    )
}