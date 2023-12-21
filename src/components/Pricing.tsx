import Card from "../partials/Card"

const pricing = [
    {
        title: "Freebie",
        price: 0,
        description:"Ideal for individuals who need quick acess to basic features",
        features:2
    },
    {
        title: "Professional",
        price: 25,
        description:"Ideal for individuals who need advanced features and tools for client work.",
        features:5
    },
    {
        title: "Enterprise",
        price: 100,
        description:"Ideal for businesses who need personalized services and security for large teams.",
        features:8
    },
 ]

const Pricing = () => {
  return (
    <section className=" bg-[url(./assets/Gradient.png)] bg-center bg-no-repeat bg-cover w-full  py-[80px]">
        <h1 className="mt-[52px] text-center text-gray-800 text-5xl font-satoshi-bold leading-10">
        Pricing made for collaborative support.
        </h1>

        <p className="my-4 text-center text-gray-600 text-center font-satoshi-medium text-xl leading-loose">
        Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.
        </p>

        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
            {pricing.map((price) => (
                <Card key={price.title} title={price.title} price={price.price} description={price.description} feature={price.features}/>
            ))}
            </div>
        </div>
        {/* <Card/> */}
    </section> 
  )
}

export default Pricing