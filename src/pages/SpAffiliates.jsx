import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SpAffiliates = () => {
    const [rowData, setrowData] = useState()
    const fetchData = async () => {
        const data = await fetch("./data.json")
        const wholeData = await data.json();
        setrowData(wholeData)
    }
    fetchData();
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%]">Partner Dashboard</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Live Status</Link>
                    <Link to='/salepartner' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />S.P Sale Partners</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />S.P Affiliates</Link>
                </div>
            </div>
            <h1 className="text-2xl text-[#000000] font-medium mt-12 px-16">Sale Partner's Affiliate Details</h1>
            <div className="mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[45%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Partner ID</li>
                            <li className="pb-1">Contact No</li>
                            <li className="pb-1">Password</li>
                            <li className="pb-1">Address</li>
                            <li className="pb-1">Partner Type</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">FP-123</li>
                            <li className="pb-1">0313 1234567</li>
                            <li className="pb-1">********</li>
                            <li className="pb-1">House 23, street 7 hayatabad</li>
                            <li className="pb-1 text-[#FE5555]">FSP</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[45%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Customer Name</li>
                            <li className="pb-1">CNIC No</li>
                            <li className="pb-1">Email</li>
                            <li className="pb-1">Location</li>
                            <li className="pb-1">Date of joining</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">Mr. Khan</li>
                            <li className="pb-1">17301-1234567-1</li>
                            <li className="pb-1">abc@gmail.com</li>
                            <li className="pb-1">Peshawar</li>
                            <li className="pb-1">05/07/2023</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="w-[45%] flex flex-row justify-between items-center">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Total Affiliates</li>
                            <li className="pb-1">Type A Affiliates</li>
                            <li className="pb-1">Type B Affiliates</li>
                            <li className="pb-1">Active Affiliates</li>
                            <li className="pb-1">Active month</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium pr-32">
                            <li className="pb-1">100</li>
                            <li className="pb-1">40</li>
                            <li className="pb-1">60</li>
                            <li className="pb-1 text-[#2DA157]">45</li>
                            <li className="pb-1">12/06/2023</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[45%] flex flex-row justify-between items-center">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-2">Lifetime earnings</li>
                            <li className="pb-2">Type A Coins</li>
                            <li className="pb-2">Type B Coins</li>
                            <li className="pb-2">Total active coins</li>
                            <li className="pb-2">Coins Used</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium pr-14">
                            <li className="pb-2">5000 FC</li>
                            <li className="pb-2">5000 FC</li>
                            <li className="pb-2">1500 FC</li>
                            <li className="pb-2 text-[#2DA157]">2000 FC</li>
                            <li className="pb-2 text-[#FE5555]">250 FC</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl text-[#000000] font-medium mt-12 mb-8 px-12">Total affiliates of this Partner</h1>
            {rowData && rowData.map(() => (
                <div className="box bg-[#FFFFFF] w-[95%] h-[105px] mb-6 flex flex-row justify-between items-center mx-auto rounded-xl px-6">
                    <div className="img-part w-[10%]">
                        <img className="w-[70px] h-[70px]" src="./profil.png" alt="" />
                    </div>
                    <div className="flex flex-row justify-between w-[90%]">
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Customer ID</li>
                            <li className="flex justify-center">CA 1234</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Customer Name</li>
                            <li className="flex justify-center">Mr. Khan</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Total Orders</li>
                            <li className="flex justify-center">100</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Earnings</li>
                            <li className="flex justify-center">2500</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Type</li>
                            <li className="flex justify-center">A</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Status</li>
                            <li className=" text-[#2DA157] flex justify-center">Active</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Detail</li>
                            <button className="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg
            ">Open</button>
                        </ul>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default SpAffiliates