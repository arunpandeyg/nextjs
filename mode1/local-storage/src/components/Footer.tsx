import { Link } from "react-router"


const Footer = () => {
  return (
    <div className="flex w-full justify-between p-2 bg-purple-100  dark:bg-gray-900 dark:text-white text-gray-800 text-xl ">
      <Link to="/">
      <img src="rtk.png" alt="redux toolkit" className="w-30 h-10 rounded-lg" />
      </Link>
      <div className="flex gap-4">
        <h3>All &copy; 2026 Rights Reserved <Link to="/about" className="text-2xl"> ReduxToolkit</Link> </h3>
      </div>
      <div >        
        <Link to="/contact" className="text-2xl">Arun Pandey</Link>
      </div>
    </div>
  )
}

export default Footer
