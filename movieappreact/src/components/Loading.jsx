import loader from '../assets/loading.gif'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-[#16151A]'>
        <img className='w-[10%] h-[25%]' src={loader} alt="" />
            <h1 className='text-white text-2xl font-semibold'>
                Rukja Bhai!
                <br />
                <span className='text-lg'>I mean to say Please Wait 😊</span>
            </h1>
    </div>
  )
}

export default Loading
