import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Button } from 'semantic-ui-react'

export default function ToastPage() {

    function test() {
        toast.success("successfuly")
    }
    return (
        <div>
            <ToastContainer position="bottom-right"></ToastContainer>
            <Button onClick={()=>test()}>Çalıştır</Button>
            
        </div>
    )
}
