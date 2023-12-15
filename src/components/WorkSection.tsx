
const WorkSection = () => {
  return (
    <section className=" mx-[90px] mb-28 rounded-3xl shadow border border-gray-200">
        <h1 className="mt-[52px] text-center text-gray-800 text-5xl font-satoshi-bold leading-10">How it works</h1>
        <p className="my-4 text-gray-600 text-center font-satoshi-medium text-xl  leading-loose">
            Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.
        </p>
       
        <div className=" px-[40px] py-[123px]  flex justify-center items-center gap-4 ">
       
            <div className="text-center  ">
                <div className=" text-[200px] text-satoshi-bold font-bold leading-10">
                  <span className=" only-gradient relative top-8">1</span>
                </div>
                <div className="relative bottom-16">
                  <h2 className=" text-gray-800 text-satoshi-black font-bold text-4xl">Subscribe</h2>
                  <p className="">Subscribe to a plan & you’ll get an instant access to your private Slack channel.</p>
                </div>
            </div> 

            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="92" viewBox="0 0 88 92" fill="none">
            <path d="M66.1672 46.2985C65.0795 48.6782 62.2583 49.015 60.1955 50.1511C55.0722 52.203 49.9576 54.2695 45.0226 56.7821C44.1162 57.2919 44.3098 55.9191 44.5667 55.4366C45.4239 52.5399 48.4334 51.9336 50.7584 50.7392C53.1679 49.6104 55.6319 48.6254 58.1047 47.6622C55.8642 47.6404 53.5973 47.9335 51.3832 48.1119C42.3914 49.279 33.2658 51.1707 25.0448 55.229C24.0459 55.7676 23.0802 56.3696 22.1531 57.0315C21.9525 57.1844 21.5442 57.4575 21.3523 57.1353C21.113 56.1885 21.7906 55.2035 22.2622 54.4279C27.8731 48.4561 46.6048 44.9148 57.5802 44.8729C54.8821 43.187 52.309 41.2789 49.6619 39.5165C48.3279 38.5133 46.7509 37.7231 45.6685 36.4195C45.3675 35.4472 46.1842 34.2383 46.9779 33.7704C47.1522 33.7085 47.2806 33.8377 47.3422 33.9961C53.4741 37.7267 59.4915 41.9908 66.3239 44.2321C67.1387 44.5033 66.4066 45.7651 66.1672 46.3022V46.2985Z" fill="#4B5563"/>
            </svg>
            
            <div className="text-center  ">
                <div className=" text-[200px] text-satoshi-bold font-bold leading-10">
                  <span className=" only-gradient relative top-8">2</span>
                </div>
                <div className="relative bottom-16">
                  <h2 className=" text-gray-800 text-satoshi-black font-bold text-4xl">Request</h2>
                  <p className="">
                  Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours
                  </p>
                </div>
            </div> 
            
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="92" viewBox="0 0 88 92" fill="none">
            <path d="M66.1672 46.2985C65.0795 48.6782 62.2583 49.015 60.1955 50.1511C55.0722 52.203 49.9576 54.2695 45.0226 56.7821C44.1162 57.2919 44.3098 55.9191 44.5667 55.4366C45.4239 52.5399 48.4334 51.9336 50.7584 50.7392C53.1679 49.6104 55.6319 48.6254 58.1047 47.6622C55.8642 47.6404 53.5973 47.9335 51.3832 48.1119C42.3914 49.279 33.2658 51.1707 25.0448 55.229C24.0459 55.7676 23.0802 56.3696 22.1531 57.0315C21.9525 57.1844 21.5442 57.4575 21.3523 57.1353C21.113 56.1885 21.7906 55.2035 22.2622 54.4279C27.8731 48.4561 46.6048 44.9148 57.5802 44.8729C54.8821 43.187 52.309 41.2789 49.6619 39.5165C48.3279 38.5133 46.7509 37.7231 45.6685 36.4195C45.3675 35.4472 46.1842 34.2383 46.9779 33.7704C47.1522 33.7085 47.2806 33.8377 47.3422 33.9961C53.4741 37.7267 59.4915 41.9908 66.3239 44.2321C67.1387 44.5033 66.4066 45.7651 66.1672 46.3022V46.2985Z" fill="#4B5563"/>
            </svg>
            
            <div className="text-center  ">
                <div className=" text-[200px] text-satoshi-bold font-bold leading-10">
                  <span className=" only-gradient relative top-8">3</span>
                </div>
                <div className="relative bottom-16">
                  <h2 className=" text-gray-800 text-satoshi-black font-bold text-4xl">Revise</h2>
                  <p className="">Need changes? We guarantee unlimited revisions until you're 200% satisfied.</p>
                </div>
            </div>        
        </div>
    </section> 
  )
}

export default WorkSection