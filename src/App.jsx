import React, { useState } from 'react'
import { emoges } from './emojs'
import Modals from './Modals'
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
function App() {
  const [emoge, seteMoge] = useState()
  const [maincharacters, setMaincharakters] = useState(JSON.parse(localStorage.getItem('active')) || emoges[0])
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  const clickNavigate = (characters) => {
    setMaincharakters(characters)
    localStorage.setItem('active', JSON.stringify(characters))
  }

  const getEmojis = (emoge) => {
    seteMoge(emoge)
    setOpen(true)
  }

  return (
    <div className='text-white flex min-h-screen'>
      <div className=" py-5 px-3 w-[20%]">

        <div className='flex justify-between mb-3 px-3'>
          <IoIosSearch onClick={() => setOpenSearch(!openSearch)} className='cursor-pointer' size={24} />
          <h1 className='text-xl font-bold'>Characters</h1>
          <IoMenu size={24} />
        </div>

        {openSearch && <input type="text" className={`border-2 border-transparent transition-all duration-200 bg-[#585858] rounded-[4px] outline-0 py-1 px-2 w-full focus:border-orange-400 mb-3`} placeholder='Search characters' />}

        {emoges?.map((item, index) => (
          <div onClick={() => clickNavigate(item)} className={`${maincharacters.title == item.title ? 'bg-[#464444]' : 'border-transparent'} bg-[#333] mb-2 p-2 rounded-[8px] cursor-pointer border-2 border-transparent hover:bg-[#464444]  transition-all`} key={index}>
            <p className='px-2'>{item?.icon} <span className='ml-3'>{item?.title}</span></p>
          </div>
        ))}
      </div>
      <main className='p-5 bg-[#232323] flex-1'>
        <h1 className='text-center mb-3 text-2xl'>{maincharacters?.title}</h1>
        <div className='p-2 w-full flex flex-wrap gap-4'>
          {maincharacters?.emoges.map((item, index) => (
            <div key={index}>
              <p onClick={() => getEmojis(item)} className='text-7xl'>{item}</p>
            </div>
          ))}
        </div>
      </main>

      <Modals emoge={emoge} open={open} setOpen={setOpen} />

    </div>
  )
}

export default App