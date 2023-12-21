type CardProps = {
    title: string;
    price: number;
    description: string;
    feature: number;
}

const featureStyle = (title:string, feature:number, index:number) => {
    
    if(title == "Professional") {
        if(index < feature) {
            return ["#f9fafb","text-gray-50"]
        } else {
            return ["#94a3b8","text-gray-400"]
        }
    }else {
        if(index < feature) {
            return ["#1e293b","text-gray-800"]
        } else {
            return ["#94a3b8","text-gray-400"]
        }
    }
}

const Card = ({title, price, description, feature}:CardProps) => {

    const features: string[] = [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4K",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs"
    ]

  return (


    <div className={`${title == "Professional" ? "bg-gray-800 text-white shadow-lg shadow-gray-300": "bg-white"} rounded p-6 `}>
      <h3 className="text-lg font-bold text-satoshi-regular">{title}</h3>
      <p className={`${title == "Professional"  ? "text-gray-200":"text-gray-500"} text-sm  mt-1`}>
        {description}
      </p>
      <div className="mt-6">
        <h2 className="text-4xl font-bold">
          ${price}<span className={`${title == "Professional"  ? "text-gray-50":"text-gray-600"} text-sm  ml-2`}>/ Month</span>
        </h2>
        <button
          type="button"
          className={`${title == "Professional"  ? "text-gray-800 bg-gray-50 border-gray-50":"text-gray-600 border-gray-600"} w-full h-11 mt-6 px-2 py-1.5 text-sm outline-none border-2  font-semibold  rounded-md`}
        >
          Get Started Now
        </button>
      </div>
      <div className="mt-6">
        <h4 className="text-base font-bold mb-4">Plan Includes</h4>
        <ul className="space-y-4">
         {
            features.map((feat, index) => {
                return (
                    <li key={feat} className={`${featureStyle(title, feature,  index)[1]} flex items-center text-sm`}>
                    
                    
                    <svg xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    className="mr-4 "
                    viewBox="0 0 21 20"
                     fill="none">
                    <path d="M18.4793 10.9376C17.8543 14.0626 15.498 17.0051 12.1918 17.6626C10.5793 17.9837 8.90655 17.7879 7.41179 17.103C5.91703 16.4182 4.67644 15.2792 3.86665 13.8483C3.05687 12.4174 2.71918 10.7674 2.90167 9.1334C3.08416 7.49938 3.77752 5.96459 4.88303 4.74756C7.15053 2.25006 10.9793 1.56256 14.1043 2.81256"
                     stroke={featureStyle(title, feature,  index)[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.85425 9.6875L10.9792 12.8125L18.4792 4.6875"
                     stroke={featureStyle(title, feature,  index)[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                      {feat}
                    </li>
                )
            }
         )}
        </ul>
      </div>
    </div>



  )
}

export default Card
