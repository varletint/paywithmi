export default function createItem() {
  console.log(2);
  return (
    <div className={` md:max-w-xl sm:max-w-[30rem] mx-auto mt-5 bg-white`}>
      <h1 className='title text-center text-2xl font-semibold'>
        Create an Item{" "}
      </h1>
      <form
        className=' flex flex-col  w-full mt-7 
      md:px-6 px-6 gap-5'>
        <div className='itemName '>
          <label className=' font-semibold'> Item Name</label>
          <input
            className=' w-full p-[12px] '
            type='text'
            placeholder='Enter Item Name'
            onChange
            // value
            required
          />
        </div>
        <div className='priceTag '>
          <label> Price</label>
          <input
            type='text'
            placeholder='Enter the price of the item'
            onChange
            // value
            required
          />
        </div>
        <div className='custom-select'>
          <label> Category</label>
          <select className='different'>
            <option value=''>Select category</option>
            <option>Departmental fee</option>
            <option>Books and Manuals</option>
            <option>Field Trip</option>
          </select>
        </div>

        <button
          type='submit'
          className='bg-[#222] text-white p-[12px] rounded-lg mt-4'>
          Add Item
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    margin: "50px auto",
    backgroundColor: "red",
  },
};
