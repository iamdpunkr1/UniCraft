const links = [
    {
        to: "/#features",
        label: "Features",
    },
    {
        to: "/#solution",
        label: "Solution",
    },
    {
        to: "/#reviews",
        label: "Reviews",
    },
];
const Navbar = () => {
  return (
    <header className="w-full bg-transparent py-4">
      <nav className="px-[90px]">
        <div className="flex items-center justify-between h-16">
            <h1 className="text-center text-gray-700 text-2xl font-satoshi-bold font-bold">UniCraft</h1>
            <ul className="flex items-center gap-12 text-lg font-medium text-gray-700">
                <li className="">How it works</li>
                <li className="">Pricing</li>
                <li className="">FAQ</li>
            </ul>
            <button className="text-gray-600 text-md font-satoshi-bold font-bold w-40 h-12 px-8 py-4 rounded-lg shadow-inner border border-gray-600 justify-center items-center gap-2.5 inline-flex"> Contact Us </button>
        </div>
      </nav>
    </header>

  )
}

export default Navbar