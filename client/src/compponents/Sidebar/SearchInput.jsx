export default function SearchInput() {
  return (
    <>
      <div
        className='bg-[#ddebe0] mb-4 relative 
      rounded px-2 py-1.5 text-sm'>
        <input
          type='text'
          name='search'
          placeholder='Search me'
          className='w-full border-none bg-transparent placeholder:text-[#8aa197]
          focus:outline-none'
          id='search'
        />
      </div>
    </>
  );
}
