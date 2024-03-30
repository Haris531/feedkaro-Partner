import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const NewNotification = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%]">Partner Dashboard</Link>
                    <Link to='/notifications' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Notifications</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />New Notification</Link>
                </div>
            </div>
            <div className="bg-[#FFFFFF] w-[50%] mt-12 mx-auto rounded-xl">
                <textarea name="" id="" cols="30" rows="10" className="w-[100%] px-4 py-4 text-[#000000] opacity-[70%] font-medium">
                    Write the notification text here
                </textarea>
            </div>

            <div className="mt-14 mb-16 flex justify-center">
                <button className="bg-[#546159] w-[20%] h-[45px] text-[#FFFFFF] text-xl font-medium rounded-full
                     ">Send</button>
            </div>
        </>
    )
}

export default NewNotification