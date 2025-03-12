import React from 'react'
import AdminLayout from '../layout/AdminLayout'

import AddProductForm from './AddProduct'

const CreateProduct = () => {
  return (
    <AdminLayout>
      <div className='bg-dark'>
        <AddProductForm/>
      </div>
    </AdminLayout>
)
}

export default CreateProduct