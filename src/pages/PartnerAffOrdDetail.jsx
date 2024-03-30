import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PartnerAffOrdDetail = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mb-12 pl-14'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%]">Partner Dashboard</Link>
                    <Link to='/partneraffiliate' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Partner's Affiliates</Link>
                    <Link to='/partnerafforder' className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Affiliate orders</Link>
                    <Link className="mr-5 text-[#43A0AF] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Affiliate orders</Link>
                </div>
            </div>
            <div class="box w-[85%] h-[630px] mt-4 flex flex-row mx-auto">
                <div class="box-left w-[42%] flex flex-col">
                    <div class="box-top bg-[#FFFFFF] h-[40%] flex flex-row justify-around py-4">
                        <div class="left">
                            <ul class="text-[#000000] font-medium opacity-[100%]">
                                <li class="pb-1">Order No</li>
                                <li class="pb-1">Customer ID</li>
                                <li class="pb-1">Name of Customer</li>
                                <li class="pb-1">Address</li>
                                <li class="pb-1">Delivery Type</li>
                                <li class="pb-1">Payment Method</li>
                                <li class="pb-1">Coins Used</li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul class="text-[#000000]">
                                <li class="pb-1">1234</li>
                                <li class="pb-1">CA-1234</li>
                                <li class="pb-1">Ibrahim Khan</li>
                                <li class="pb-1">Hayatabad</li>
                                <li class="pb-1">Quick</li>
                                <li class="pb-1">Easypaisa</li>
                                <li class="pb-1">100</li>
                            </ul>
                        </div>
                    </div>
                    <div class="box-botm mt-4 bg-[#FFFFFF] h-[60%] flex flex-col">
                        <div className='flex flex-row justify-around py-6'>
                            <div class="left">
                                <ul class="text-[#000000] font-medium opacity-[100%]">
                                    <li class="pb-4">Payment Confirmation</li>
                                    <li class="pb-4">Rider ID</li>
                                    <li class="pb-4">Rider Name</li>
                                    <li class="pb-4">Dispatch Time</li>
                                    <li class="pb-4">Delivery Date</li>
                                </ul>
                            </div>
                            <div class="right">
                                <ul class="text-[#000000]">
                                    <li class="pb-4">Done</li>
                                    <li class="pb-4">R-123</li>
                                    <li class="pb-4">Daniyal</li>
                                    <li class="pb-4">10:45 am</li>
                                    <li class="pb-4">26/05/2023</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 bg-[#FE5555] w-[60%] h-[55px] flex justify-center items-center mx-auto rounded-full ">
                            <button className="text-[#FFFFFF] text-2xl font-medium opacity-[100%]">Delivered</button>
                        </div>
                    </div>
                </div>

                <div class="box-right ml-12 bg-[#FFFFFF] w-[54%] h-[100%] flex flex-col">
                    <div class="heading flex flex-col justify-center items-center text-center">
                        <h1 class="text-[#444444] text-2xl font-medium">Receipt</h1>
                        <h2 class="text-[#444444] text-xl font-medium">ORDER NO : 1234</h2>
                        <h3 class="text-[#444444] text-lg font-medium">23-03-2023</h3>
                        <h4 class="text-[#444444] text-sm font-medium">Contact no: 03121234567</h4>
                        <h4 class="text-[#444444] text-sm font-medium">Address : House 23, street 5, Sector 7, <br />
                            phase 7 Hayatabad</h4>
                    </div>
                    <hr class="mt-4 mx-8" />
                    <div class="items-price flex flex-row justify-between px-10 py-4">
                        <div class="left">
                            <ul>
                                <li class="text-[#444444] font-medium opacity-[100%] pb-2">ITEM</li>
                                <li class="text-[#444444]">Product 1</li>
                                <li class="text-[#444444]">Product 1</li>
                                <li class="text-[#444444]">Product 1</li>
                                <li class="text-[#444444]">Product 1</li>
                                <li class="text-[#444444]">Product 1</li>
                                <li class="text-[#444444]">Product 1</li>
                                <li class="text-[#444444]">Product 1</li>
                                <li class="text-[#444444]">Product 1</li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul>
                                <li class="text-[#444444] font-medium opacity-[100%] pb-2">PRICE</li>
                                <li class="text-[#444444]">Rs. 200</li>
                                <li class="text-[#444444]">Rs. 200</li>
                                <li class="text-[#444444]">Rs. 200</li>
                                <li class="text-[#444444]">Rs. 200</li>
                                <li class="text-[#444444]">Rs. 200</li>
                                <li class="text-[#444444]">Rs. 200</li>
                                <li class="text-[#444444]">Rs. 200</li>
                                <li class="text-[#444444]">Rs. 200</li>
                            </ul>
                        </div>
                    </div>
                    <hr class="mx-8" />
                    <div class="total-Rs flex flex-row justify-between px-10 py-4">
                        <div class="left">
                            <ul>
                                <li class="text-[#444444] font-medium">Total</li>
                                <li class="text-[#444444] font-medium">Coins used</li>
                                <li class="text-[#444444] font-medium">Delivery</li>
                                <li class="text-[#444444] font-bold opacity-[100%] pt-2">Grand Total</li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul>
                                <li class="text-[#444444] font-medium">Rs. 2010</li>
                                <li class="text-[#FE5555] font-medium text-right">10</li>
                                <li class="text-[#444444] font-medium">Rs. 50</li>
                                <li class="text-[#444444] font-bold opacity-[100%] pt-2">Rs. 2050</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mx-auto text-center mt-4">
                        <h1 class="text-sm font-medium text-[#707070]">Payment method : Cash on delivery</h1>
                        <h1 class="text-lg font-medium text-[#707070]">Logo</h1>
                    </div>
                </div>
            </div>
            <h1 class="text-[#000000] text-2xl font-medium mt-12 px-24">Distribution</h1>
            {/* heekkakkakakakkkka */}
            <table className="table-fixed bg-[#FFFFFF] w-[85%] mt-8  mx-auto">
                <thead className="text-[#11141A] text-sm font-medium">
                    <tr>
                        <th className="py-2">Product ID</th>
                        <th className="py-2">Product Name</th>
                        <th className="py-2">Quantity</th>
                        <th className="py-2">Unit Price</th>
                        <th className="py-2">Vender Price</th>
                        <th className="py-2">Profit margin</th>
                        <th className="py-2">Total Price</th>
                        <th className="py-2">Net Margin</th>
                    </tr>
                </thead>
                <tbody className="text-center text-[#11141A] text-sm">
                    <tr>
                        <td className="px-2 py-2">VG-123</td>
                        <td className="px-2 py-2">Tomato</td>
                        <td className="px-2 py-2">5kg</td>
                        <td className="px-2 py-2">40</td>
                        <td className="px-2 py-2">38</td>
                        <td className="px-2 py-2 text-[#2DA157]">02</td>
                        <td className="px-2 py-2">200</td>
                        <td className="px-2 py-2 text-[#2DA157]">10</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2">VG-123</td>
                        <td className="px-2 py-2">Tomato</td>
                        <td className="px-2 py-2">5kg</td>
                        <td className="px-2 py-2">40</td>
                        <td className="px-2 py-2">38</td>
                        <td className="px-2 py-2 text-[#2DA157]">02</td>
                        <td className="px-2 py-2">200</td>
                        <td className="px-2 py-2 text-[#2DA157]">10</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2">VG-123</td>
                        <td className="px-2 py-2">Tomato</td>
                        <td className="px-2 py-2">5kg</td>
                        <td className="px-2 py-2">40</td>
                        <td className="px-2 py-2">38</td>
                        <td className="px-2 py-2 text-[#2DA157]">02</td>
                        <td className="px-2 py-2">200</td>
                        <td className="px-2 py-2 text-[#2DA157]">10</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2">VG-123</td>
                        <td className="px-2 py-2">Tomato</td>
                        <td className="px-2 py-2">5kg</td>
                        <td className="px-2 py-2">40</td>
                        <td className="px-2 py-2">38</td>
                        <td className="px-2 py-2 text-[#2DA157]">02</td>
                        <td className="px-2 py-2">200</td>
                        <td className="px-2 py-2 text-[#2DA157]">10</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2">VG-123</td>
                        <td className="px-2 py-2">Tomato</td>
                        <td className="px-2 py-2">5kg</td>
                        <td className="px-2 py-2">40</td>
                        <td className="px-2 py-2">38</td>
                        <td className="px-2 py-2 text-[#2DA157]">02</td>
                        <td className="px-2 py-2">200</td>
                        <td className="px-2 py-2 text-[#2DA157]">10</td>
                    </tr>
                </tbody>
            </table>

            <div className="box1 mt-8 bg-[#FFFFFF] h-[120px] w-[85%] flex flex-row justify-between mx-auto">
                <div className="box1-1 flex flex-row justify-around items-center w-[45%]">
                    <div className="box1-1-1">
                        <ul className="font-medium">
                            <li className="pb-2">No of products</li>
                            <li className="pb-2">Delivery Charges</li>
                            <li className="pb-2">Coins Used</li>
                        </ul>
                    </div>
                    <div className="box1-1-2">
                        <ul>
                            <li className="pb-2">10</li>
                            <li className="pb-2">50</li>
                            <li className="pb-2">10</li>
                        </ul>
                    </div>
                </div>
                <div className="box1-2 flex flex-row justify-around items-center w-[45%]">
                    <div className="box1-2-1">
                        <ul className="font-medium">
                            <li className="pb-2">Total Worth of Order</li>
                            <li className="pb-2">Net worth of Order</li>
                            <li className="pb-2">Net Margin</li>
                        </ul>
                    </div>
                    <div className="box1-2-2">
                        <ul>
                            <li className="pb-2">2060</li>
                            <li className="pb-2 text-[#FE5555]">2000</li>
                            <li className="pb-2 text-[#2DA157]">100</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="2nd-table mt-8 bg-[#FFFFFF] w-[85%] h-[380px] flex flex-row justify-between mx-auto px-10 py-10 ">
                <div className="partner">
                    <ul>
                        <li className="text-[#000000] font-medium opacity-[100%] pb-4">Partner ID</li>
                        <li className="pb-2 font-medium text-sm">FSP 123</li>
                        <li className="pb-2 font-medium text-sm">FCP 125</li>
                        <li className="pb-2 font-medium text-sm">FR 128</li>
                        <li className="pb-2 font-medium text-sm">FVD 123</li>
                        <li className="pb-2 font-medium text-sm">FMP 123</li>
                        <li className="pb-2 font-medium text-sm">FMP 124</li>
                        <li className="pb-2 font-medium text-sm">FMP 124</li>
                        <li className="pb-2 font-medium text-sm">FMP 124</li>
                        <li className="pb-2 font-medium text-sm">FMP 124</li>
                        <li className="pb-2 font-medium text-sm">FMP 124</li>
                    </ul>
                </div>
                <div className="Name">
                    <ul className="text-center">
                        <li className="text-[#000000] font-medium opacity-[100%] pb-4">Name of Partner</li>
                        <li className="pb-2 font-medium text-sm">Haneef Khan</li>
                        <li className="pb-2 font-medium text-sm">Azam Shah</li>
                        <li className="pb-2 font-medium text-sm">Muhammad Ali</li>
                        <li className="pb-2 font-medium text-sm">Hamza</li>
                        <li className="pb-2 font-medium text-sm">Wajahat Mufti</li>
                        <li className="pb-2 font-medium text-sm">Maxar Khan</li>
                        <li className="pb-2 font-medium text-sm">Management 1</li>
                        <li className="pb-2 font-medium text-sm">Management 2</li>
                        <li className="pb-2 font-medium text-sm">Management 3</li>
                        <li className="pb-2 font-medium text-sm">Management 4</li>
                    </ul>
                </div>
                <div className="Role">
                    <ul className="text-center">
                        <li className="text-[#000000] font-medium opacity-[100%] pb-4">Role Assigned</li>
                        <li className="pb-2 font-medium text-sm">FSP</li>
                        <li className="pb-2 font-medium text-sm">FCP</li>
                        <li className="pb-2 font-medium text-sm">FCP</li>
                        <li className="pb-2 font-medium text-sm">Feed Rider</li>
                        <li className="pb-2 font-medium text-sm">Vender Dealer</li>
                        <li className="pb-2 font-medium text-sm">Marketing</li>
                        <li className="pb-2 font-medium text-sm">Software</li>
                        <li className="pb-2 font-medium text-sm">Managment</li>
                        <li className="pb-2 font-medium text-sm">Management</li>
                        <li className="pb-2 font-medium text-sm">Management</li>
                    </ul>
                </div>
                <div className="Share">
                    <ul className="text-center">
                        <li className="text-[#000000] font-medium opacity-[100%] pb-4">% Share</li>
                        <li className="pb-2 font-medium text-sm">5%</li>
                        <li className="pb-2 font-medium text-sm">10%</li>
                        <li className="pb-2 font-medium text-sm">3%</li>
                        <li className="pb-2 font-medium text-sm">2%</li>
                        <li className="pb-2 font-medium text-sm">2%</li>
                        <li className="pb-2 font-medium text-sm">2%</li>
                        <li className="pb-2 font-medium text-sm">2%</li>
                        <li className="pb-2 font-medium text-sm">2%</li>
                        <li className="pb-2 font-medium text-sm">2%</li>
                        <li className="pb-2 font-medium text-sm">2%</li>
                    </ul>
                </div>
                <div className="amount">
                    <ul className="text-center">
                        <li className="text-[#000000] font-medium opacity-[100%] pb-4">Amount Per Percent</li>
                        <li className="pb-2 font-medium text-sm">05 FC</li>
                        <li className="pb-2 font-medium text-sm">05 FC</li>
                        <li className="pb-2 font-medium text-sm">10 FC</li>
                        <li className="pb-2 font-medium text-sm">03 FC</li>
                        <li className="pb-2 font-medium text-sm">02 FC</li>
                        <li className="pb-2 font-medium text-sm">02 FC</li>
                        <li className="pb-2 font-medium text-sm">02 FC</li>
                        <li className="pb-2 font-medium text-sm">02 FC</li>
                        <li className="pb-2 font-medium text-sm">02 FC</li>
                        <li className="pb-2 font-medium text-sm">02 FC</li>
                    </ul>
                </div>
            </div>

            <div className="box-alst mt-8 bg-[#FFFFFF] h-[120px] w-[85%] flex flex-row justify-between mx-auto mb-16">
                <div className="box1-1 flex flex-row justify-around items-center w-[40%]">
                    <div className="box1-1-1">
                        <ul className="font-medium">
                            <li className="pb-2">Net Margin</li>
                            <li className="pb-2">Partners Expenses</li>
                        </ul>
                    </div>
                    <div className="box1-1-2">
                        <ul>
                            <li className="pb-2">100</li>
                            <li className="pb-2">35</li>
                        </ul>
                    </div>
                </div>
                <div className="box1-2 flex flex-row justify-around items-center w-[40%]">
                    <div className="box1-2-1">
                        <ul className="font-medium">
                            <li className="pb-2">Net Feed Profit</li>
                        </ul>
                    </div>
                    <div className="box1-2-2">
                        <ul>
                            <li className="pb-2 text-[#2DA157]">65</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerAffOrdDetail