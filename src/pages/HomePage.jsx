import React from 'react'
import { IoSearch } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className='pt-12 px-2 sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 w-full min-h-[91.8vh] bg-gradient-to-b from-sky-100 to-blue-200 dark:from-transparent dark:to-transparent dark:bg-[#192d49de] pb-32 sm:pb-32 md:pb-36 lg:pb-32 xl:pb-36 2xl:pb-36 '>
      <div className='w-full flex flex-col justify-center items-center gap-y-4'>
        <h2 className='font-Inter text-6xl text-center font-bold bg-gradient-to-b h-full from-blue-300 to-blue-500 bg-clip-text text-transparent mt-10'>Track every coin with Ease</h2>
        <p className='font-Inter text-xl text-center dark:text-zinc-200 2xl:w-[53%] xl:w-[53%] lg:w-[53%] md:w-full sm:w-full w-full'>Explore live crypto prices and trends effortlessly across currencies like USD, EUR, and more. Your real-time crypto companion is here.</p>
      </div>

      {/* Input field */}
      <div className='overflow-x-hidden flex justify-center gap-x-16 items-center mt-4'>
        <form className='flex justify-center items-center gap-x-2 bg-white rounded shadow px-4 py-2 w-96'>
          <input type="text" className='focus:outline-0 text-zinc-600 w-full' placeholder='Enter a coin name...'/>
          <IoSearch type='submit' />
        </form>

        <div className='flex gap-x-2'>
          {/* <label htmlFor="" className='dark:text-zinc-200'>Select Currency</label> */}
          <select name="" id="" className='bg-white px-2 py-2 rounded shadow selection:outline-0 focus:outline-0 cursor-pointer'>
            <option value="" selected disabled>Select Currency</option>
            <option value="" >INR</option>
            <option value="">USD</option>
            <option value="">EUR</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className='mt-6 w-full overflow-x-auto'>
        <table className='border-collapse table-auto w-full h-1/2 overflow-auto'>
          <thead>
            <tr>
              <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>#</th>
              <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>Coins</th>
              <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>Price</th>
              <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>24H Change</th>
              <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Malcolm Lockyer</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1961</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1961</td>
            </tr>
            <tr>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Witchy Woman</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>The Eagles</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1972</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1972</td>
            </tr>
            <tr>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Shining Star</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Earth, Wind, and Fire</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1975</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1975</td>
            </tr>
            <tr>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Shining Star</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Earth, Wind, and Fire</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1975</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1975</td>
            </tr>
            <tr>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Shining Star</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Earth, Wind, and Fire</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1975</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1975</td>
            </tr>
            <tr>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Shining Star</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>Earth, Wind, and Fire</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1975</td>
              <td className='px-4 p-2 text-center bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>1975</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default HomePage