import Logo from '../assets/companies/Logo.svg'
import Logo1 from '../assets/companies/Logo(1).svg'
import Logo2 from '../assets/companies/Logo(2).svg'
import Logo3 from '../assets/companies/Logo(3).svg'
import Logo4 from '../assets/companies/Logo(4).svg'
import Logo5 from '../assets/companies/Logo(5).svg'
const Hero = () => {
  return (
    <section className="py-11 px-44 flex flex-col mt-16 items-center justify-center">
        <h1 className="text-gray-800 text-7xl font-satoshi-black font-black text-center leading-110 tracking-tight">
         Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="my-4 text-gray-600 text-center font-satoshi-medium text-xl leading-loose">From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</p>
        <button className="mt-4 shadow-inner justify-center items-center gap-2.5 inline-flex rounded-lg bg-gray-800 text-gray-50 text-xl font-bold px-8 py-4 h-14 w-52">View Pricing</button>
        <p className="text-center text-gray-400 text-sm font-medium mt-28 mb-3">Trusted By 250+ Companies</p>
        <div className="flex items-center justify-center gap-x-3.5">
            <img src={Logo} alt="zapier logo" className='my-3.5 mx-7'/>
            <img src={Logo1} alt="coinbase logo" className='my-3.5 mx-7' />
            <img src={Logo2} alt="dropbox logo" className='my-3.5 mx-7' />
            <img src={Logo3} alt="google logo" className='my-3.5 mx-7' />
            <img src={Logo4} alt="netflix logo" className='my-3.5 mx-7' />
            <img src={Logo5} alt="netflix logo" className='my-3.5 mx-7' />
        </div>
    </section>
  )
}

export default Hero