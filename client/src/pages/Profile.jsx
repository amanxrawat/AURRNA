import Layout from '../components/layout/Layout'
import React from "react";

import { sampleUser, Orders } from '../constants/sampleData';


const Profile = () => {
  return (
   <div>
    <div className='text-5xl px-8 font-Corm text-purple pt-8 pb-2 border-b border-gray-700'>Profile Page</div>
     <div className='grid grid-cols-3 md:grid-rows-2 py-12'>
      <div className='col-span-1 md:grid-row-1 p-2 border m-4'><div className='flex flex-col'>
        <div className='mx-auto'>
          <img src='./../../public/Images/Profile.jpg' className='border rounded-full h-24 w-24 mx-auto my-8' />
          <div className=''>
            <div> Name :  {sampleUser.Name}</div>
            <div> Email : {sampleUser.Email}</div>
            <div> Address : {sampleUser.Address}</div>
          </div>
          <button className='bg-purple text-white border px-4 py-2 rounded-md font-medium my-2'>Edit Details</button>
        </div>
      </div>
      </div>
      <div className='col-span-2 md:row-span-1 p-2'><div className='text-4xl font-Corm text-purple flex justify-center py-8 '>Previous Orders</div>
        <div className='border p-2 max-w-4xl mx-auto'>
          {
            Orders.length > 0 ?
              <div className='flex flex-col gap-4 mx-auto'>
                {
                  Orders.map((item, index) =>
                  (
                    <div className='border rounded-lg flex flex-row gap-4'>
                      <div className='m-auto p-2'>
                        <img src={item.Images[0]} className='h-16 w-40'></img>
                      </div>
                      <div className='py-4'>
                        {
                          item.Name
                        }
                        <div className=''>
                          {item.Description}
                        </div>
                      </div>

                    </div>
                  )
                  )
                }
              </div>
              :
              <div className='text-4xl font-Corm  p-10 flex justify-center mx-auto'><div> No Orders Here</div> </div>
          }
        </div>
      </div>
    </div>
   </div>
  )
}

export default Layout()(Profile)
