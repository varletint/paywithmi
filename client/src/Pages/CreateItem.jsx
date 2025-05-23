import { useEffect, useState } from "react";
import DashSidebar from "../compponents/DashSidebar";
import { useNavigate } from "react-router-dom";
import ItemCard from "../compponents/ItemCard";
import { useSelector } from "react-redux";

export default function createItem() {
  const { currentUser } = useSelector((state) => state.user);
  const api = "/api/item/create";
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [errorMassage, setErrorMessage] = useState(null);
  const responsiveCenter = "md:max-w-xl sm:max-w-[30rem] sm:mx-auto";

  const [items, setItems] = useState([]);
  const apiCreate = "/api/item/getitems";
  document.title = "Create item";

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(`${apiCreate}`);
      const data = await res.json();

      setItems([...data.items]);
    };
    fetchItem();
  }, []);

  const loadFormData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!formData.itemName || !formData.priceTag || !formData.category) {
  //     setErrorMessage("Please fill out the field");
  //   }

  //   const res = await fetch(`${api}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       itemName: formData.itemName,
  //       priceTag: parseFloat(formData.priceTag),
  //       category: formData.category,
  //     }),
  //   });
  //   const newData = await res.json();

  //   setItems((oldData) => [...oldData, newData]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      const res = await fetch(`${apiCreate}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemName: formData.itemName,
          priceTag: formData.priceTag,
          category: formData.category,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.message);
        return;
      }
      if (data.success === false) {
        setErrorMessage(data.message);
      }
      if (res.ok) {
        setErrorMessage(null);
        setItems(data.items);
      }
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };
  return (
    <div className=' min-w-full flex  min-h-screen'>
      <div
        className='bg-[#ebe9e9e0] flex-shrink md:hidden
       lg:flex lg:w-[22rem] hidden p-3 border-r-[2px] border-[#dddcdc]'>
        {/* <DashSidebar /> */}
        <div className='md:w-full lg:w-full  '>
          {items && items.length > 0 && (
            <div className=''>
              <h1 className='title mt-top py-6 px-4 font-bold mt-10'>
                My Items
              </h1>
              <div className='lis mt-4 flex-col flex gap-5'>
                {items.map((item) => (
                  <ItemCard key={item._id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div
        className=' md:w-[20rem] hidden lg:w-[22rem] bg-[#f7f6f6]
       flex-shrink md:flex p-3 border-r-[2px]'>
        <DashSidebar />
      </div> */}

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
