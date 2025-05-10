import { FaSearch } from "react-icons/fa";
export default function SearchInput() {
  return (
    <>
      <div
        className='bg-[#ddebe0] mb-4 relative 
      rounded px-2 py-1.5 text-sm'>
        <div className='flex gap-1.5 px-2 items-center text-[#8aa197]'>
          <FaSearch />
          <input
            type='text'
            name='search'
            placeholder='Search'
            className='w-full border-none bg-transparent 
            placeholder:text-[#8aa197]
          focus:outline-none'
            id='search'
          />
        </div>
      </div>
    </>
  );
}
