import React from 'react'

const Hero = ({cities,setSelectedCountry}) => {
  return (
    <div className="hero bg-[url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F445715694348307543%2F&psig=AOvVaw12oazxTGirAn05uraTl1bN&ust=1698174625778000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiJxMzvjIIDFQAAAAAdAAAAABAI)] w-auto flex justify-center items-center text-white text-xl">
      <div className="content">
        <h1>Welcome to a Global Journey</h1>
        <label for="cities" class="block mb-2 text-sm font-medium text-white dark:text-white">Select an option</label>
        <select onChange={(e) => setSelectedCountry(e.target.value)} id="cities" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a country</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Hero
