import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import FilterComponent from '../components/FilterComponent';
import { useState } from 'react';

const SpAffiliatesOrder = () => {
    const [rowData, setrowData] = useState()
    const fetchData = async () => {
        const data = await fetch("./data.json")
        const wholeData = await data.json();
        setrowData(wholeData)
    }
    fetchData();
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mb-12 pl-14'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%]">Partner Dashboard</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Live Status</Link>
                    <Link to='/salepartner' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />S.P Sale Partners</Link>
                    <Link to='/spaffiliates' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />S.P Affiliates</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />S.P Affiliates Orders</Link>
                </div>
                <div>
                    <FilterComponent />
                </div>
            </div>
            {rowData && rowData.map(() => (
                <div className="box bg-[#FFFFFF] w-[90%] h-[105px] mb-4 flex flex-row justify-between items-center mx-auto rounded-xl px-10">
                    <div className="flex flex-row justify-between w-[100%]">
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Order No</li>
                            <li className="flex justify-center">1234</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Customer ID</li>
                            <li className="flex justify-center">CA-1234</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Customer Name</li>
                            <li className="flex justify-center">Ibrahim Khan</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Date</li>
                            <li className="flex justify-center">26/05/2023</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">No of Products</li>
                            <li className="flex justify-center">10</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Worth of order</li>
                            <li className="text-[#000000] flex justify-center">2010</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Commision</li>
                            <li className="text-[#2DA157] flex justify-center">05</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Detail</li>
                            <button className="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg
               ">Open</button>
                        </ul>
                    </div>
                </div>
            ))}

        </>
    )
}

export default SpAffiliatesOrder