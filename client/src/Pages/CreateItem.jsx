import { useState } from "react";
import DashSidebar from "../compponents/DashSidebar";

export default function createItem() {
  const api = "/api/item/create";
  const [formData, setFormData] = useState({});
  const [errorMassage, setErrorMessage] = useState(null);

  const responsiveCenter = "md:max-w-xl sm:max-w-[30rem] sm:mx-auto";

  console.log(formData);

  const loadFormData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.itemName || !formData.priceTag || !formData.category) {
      setErrorMessage("Please fill out the field");
    }

    try {
      const res = await fetch(`${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemName: formData.itemName,
          priceTag: parseFloat(formData.priceTag),
          category: formData.category,
        }),
      });
      const data = await res.json();
      if (data.success === false) setErrorMessage(data.message);
      if (!res.ok) {
        setErrorMessage(data.message);
        return;
      }
      if (res.ok) {
        setErrorMessage("succesm");
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return (
    <div className=' min-w-full flex  min-h-screen'>
      <div
        className=' md:w-[22rem] hidden lg:w-[18rem] bg-red-500
       flex-shrink md:flex'>
        <DashSidebar />
      </div>
      <div
        className='bg-gray-500 flex-shrink md:hidden
       lg:flex lg:w-[22rem] hidden '>
        <DashSidebar />
      </div>

      {/* flex 3 */}
      <div
        className={` form flex-1   bg-white
        sm:mx-auto sm:max-w-[30rem] lg:flex items-center flex-col lg:justify-center
         lg:w-30rem`}>
        <h1 className='title text-center mt-6 text-2xl font-semibold'>
          Create an Item
        </h1>
        <form
          onSubmit={handleSubmit}
          className=' flex flex-col mx-aut w-full mt-7 
      md:px-6 px-6 gap-5 lg:w-[30rem]'>
          <div className='itemName '>
            <label className=' font-semibold'> Item Name</label>
            <input
              className=' w-full p-[12px] '
              type='text'
              id='itemName'
              placeholder='Enter Item Name'
              onChange={loadFormData}
              // value
              required
            />
          </div>
          <div className='priceTag '>
            <label> Price</label>
            <input
              type='text'
              id='priceTag'
              placeholder='Enter the price of the item'
              onChange={loadFormData}
              // value
              required
            />
          </div>
          <div
            className='category'
            id='category'
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}>
            <label> Category</label>
            <select className='different'>
              <option value=''>Select category</option>
              <option value={formData.category}>Departmental fee</option>
              <option value={formData.category}>Books and Manuals</option>
              <option value={formData.category}>Field Trip</option>
            </select>
          </div>

          <button
            type='submit'
            className='bg-[#222] text-white p-[12px] rounded-lg mt-4'>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "50px auto",
    backgroundColor: "red",
  },
};
