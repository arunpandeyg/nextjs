const HomePage = () => {
  return (
    <div className="w-full h-89 items-center justify-center mt-30 dark:text-white dark:bg-gray-900">
      <div className="mx-auto flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome Arun Pandey&apos;s Redux Toolkit
        </h1>
        <p className="text-xl text-center">
          ‘ "My name is Ozymandias, king of kings: 
          Look on my works, ye Mighty, and despair!” <br />
          Nothing beside remains. 
          Round the decay Of that colossal wreck, <br />
          boundless and bare The lone and <br />
          level sands stretch far away. ’
        </p>
        <button className="bg-orange-500 hover:bg-orange-700 hover:scale-110 duration-300 w-30 shadow-2xl cursor-pointer text-white font-bold py-2 px-4 rounded self-center">Subscribe</button>
      </div>
    </div>
  );
};

export default HomePage;
