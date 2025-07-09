import React from "react";

export default function CreateItem() {
  return (
    <div className=' flex flex-col'>
      <h1
        className='text-center text-2xl font-medium
      sm:text-3xl sm:font-semibold text-[#04663b] '>
        Create Item
      </h1>
      <form className='mt-10 flex flex-col gap-5'>
        <div className=''>
          <label />
          <input
            type='text'
            name='item_name'
            id='item_name'
            placeholder='Item Name'
            className='bg-[#ddebe0] w-full py-3 rounded-lg px-5
            placeholder:text-[#8aa197] shadow font-medium'
          />
        </div>
        <div className=''>
          <label />
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='Amount'
            className='bg-[#ddebe0] w-full py-3 rounded-lg px-5
            placeholder:text-[#8aa197] focus:outline-none 
            shadow font-medium'
          />
        </div>
        <div className=''>
          <div
            className='category'
            id='category'
            // onChange={(e) => {
            //   setFormData({ ...formData, category: e.target.value });
            // } }
          >
            <div
              className='different bg-[#ddebe0] w-full py-3 rounded-lg px-5
            placeholder:text-[#8aa197] shadow font-medium'>
              <select className='w-full bg-transparent outline-none'>
                <option value=''>Select category</option>
                <option
                // value={ formData.category }
                >
                  Departmental fee
                </option>
                <option
                // value={ formData.category }
                >
                  Books and Manuals
                </option>
                <option
                // value={ formData.category }
                >
                  Field Trip
                </option>
              </select>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='bg-[#3e5a4e]
           font-medium text-white p-[12px] rounded-lg mt-4'>
          Add Item
        </button>
      </form>
    </div>
  );
}
