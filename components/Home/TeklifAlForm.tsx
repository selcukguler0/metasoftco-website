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
        <button aria-disabled={pending} type='submit' className='rounded-full bg-black text-white mt-4 px-8 py-3 font-bold'>{pending ? "Gönderiliyor" : "Gönder"}</button>
    )
}
export default function TeklifAlForm() {
    const [formState, formAction] = useFormState(sendMail, initialState);
    const formRef = React.useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!formState.error && formRef.current) {
            formRef.current.reset();
        }
    }, [formState])
    return (
        <form ref={formRef} action={formAction} className="mt-8">
            {formState && formState.error && formState.message && <div className='p-4 rounded-md bg-red-400 text-red-900 max-w-fit'>{formState.message}</div>}
            {formState && !formState.error && formState.message && <div className='p-4 rounded-md bg-green-400 text-green-900'>{formState.message}</div>}
            <div className='mt-3'>
                <label className="text-lg font-medium" htmlFor="email">E-posta Adresiniz*</label>
                <input type="email" id="email" name='email' className="w-full border-2 bg-metasoftco-bg/50 border-gray-300 p-3" />
            </div>
            <div className="mt-4">
                <label className="text-lg font-medium" htmlFor="message">Mesajınız*</label>
                <textarea id="message" name='message' className="w-full border-2 bg-metasoftco-bg/50 border-gray-300 p-3" />
            </div>
            <SubmitButton />
        </form>
    )
}