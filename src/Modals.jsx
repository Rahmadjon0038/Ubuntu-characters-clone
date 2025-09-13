import React, { useState } from 'react'

function Modals({ emoge, open, setOpen }) {

  const [copied, setCopied] = useState(false)

  const copyemojis = (emojis) => {
    navigator.clipboard.writeText(emojis)
    setCopied(true)
    setInterval(() => {
      setCopied(false)
    }, 1000);

  }

  const closeModal = (e) => {
    if (e.target.className == 'block fixed bg-[rgba(0,0,0,0.7)] transition-all duration-500 w-full h-full top-0 left-0') setOpen(false)
    console.log(e.target.className)
  }


  return (
    <div onClick={closeModal} className={`${open ? 'block' : 'hidden'} fixed bg-[rgba(0,0,0,0.7)] transition-all duration-500 w-full h-full top-0 left-0`}>
      <div className='border-2 border-orange-500 overflow-hidden bg-[#232323] rounded-xl p-3 w-[300px] py-6 absolute top-[50%] left-[50%] translate-[-50%]'>
        <button onClick={() => setOpen(false)} className='absolute right-2 top-2 text-2xl cursor-pointer'>✘</button>
        {/* <p className='text-xl text-center font-bold'>Lion</p> */}
        <h1 className='text-9xl text-center mt-12'>{emoge}</h1>
        <button onClick={() => copyemojis(emoge)} className='mt-12 bg-[#333] py-2 px-6 rounded-4xl font-bold block mx-auto active:scale-95 cursor-pointer'>Copy Character</button>

        <div className={`${copied ? 'translate-0 scale-100' : 'translate-y-20 scale-0'} transition-all duration-200 bg-[#333] mt-6 mx-6 py-2 px-6 rounded-3xl font-bold text-center `}>
          Character copied
        </div>

      </div>
    </div>
  )
}

export default Modals