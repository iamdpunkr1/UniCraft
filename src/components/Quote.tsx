import Logo from '../assets/quote/Logomark.svg'
import LogoType from '../assets/quote/Logotype.svg'
import Avatar from '../assets/quote/Avatar.png'

const Quote = () => {
  return (
    <section className='bg-gray-50 px-24 py-20 flex flex-col gap-y-10 items-center mb-28'>
      <div className='flex gap-2'>
        <img src={Logo} alt='logo' />
        <img src={LogoType} alt='logo type' />
      </div>
      <h2 className=' text-center text-gray-800 text-4xl font-satoshi-bold font-bold leading-100'>
       We’ve been with unicraft to kick start every new project and can’t imagine working without it.
      </h2>
      <div className='flex flex-col items-center'>
        <img src={Avatar} alt='avatar' width="64px" height="64px"/>
        <p className='text-gray-900 text-center font-satoshi-medium text-lg leading-7'>
          Candice Wu
        </p>
        <p className='text-center text-gray-500 text-base font-satoshi-regular font-normal  leading-normal'>
        Product Manager, Sisyphus  
        </p>
      </div>
    </section>
  )
}

export default Quote