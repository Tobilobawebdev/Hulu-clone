import React from 'react'

const Modal = ({ setShowModal }) => {
  return (
    <div className='fixed scrollbar-hide overflow-y-hidden top-0 z-50 h-full w-full bg-black/50'>
        <div className='my-[10%] mx-auto w-[450px] md:w[500px] bg-white text-[#333] relative'>
            <div className='p-[50px]'>
            <span onClick={() => setShowModal(false)} className='pl-[90%] cursor-pointer text-black'>x</span>
                <h3 className="text-2xl font-bold">Log In</h3>
                <form>
                    <div className='my-5'>
                        <label htmlFor='email' className='block uppercase'>Email</label>
                        <input type="email"
                        placeholder=""
                        className='w-full border-2 border-[#333] rounded-[5px] h-[50px] p-[5px]' />
                    </div>
                    <div className='my-5'>
                        <label htmlFor='password' className='block uppercase'>Email</label>
                        <input type="password"
                        placeholder=""
                        className='w-full border-2 border-[#333] rounded-[5px] h-[50px] p-[5px]' />
                    </div>
                    <p href="#" className='text-gray-500 cursor-pointer'>Forgot your email and password?</p>
                    <button className='bg-black text-white w-full px-6 py-2  mt-[30px]'>Log In</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal