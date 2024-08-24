import React from "react";

function CurrencyExchanger() {
  return (
    <div className="bg-[#163300] text-center h-[100vh]">
       
      <div className="p-60  ">
      <h1 className="font-bold text-6xl text-[#9FE870] mb-11 ">CURRENCY CONVERTER</h1>
      <div className=" w-[900px] h-[250px] mx-auto rounded-3xl bg-white">
      
      <div className="flex p-[80px] justify-between">

      <div className="flex flex-col ">
      <label htmlFor="amount" className="text-start ml-2">Amount</label>
      <div className="border-red-200 border-4 p-6 rounded-lg">
      <input
      type="number" name="amount"
        placeholder="Enter the amount"
        className=" mr-2 p-1"

        />
        <select>
          <option >1</option>
          <option >1</option>
          <option >1</option>
          <option >1</option>
          <option >1</option>
        </select>
      </div>
        
      
      </div>
      <p className="mt-12">To</p>
      <div className="flex flex-col">

      <label htmlFor="amount" className="text-start ml-2">Convert To</label>
      <div className="border-red-200 border-4 p-6 rounded-lg">
      <input
      type="number" name="amount"
        placeholder="Converted the amount"
        className="mr-2 p-1 "

        />
        <select>
          <option >1</option>
          <option >1</option>
          <option >1</option>
          <option >1</option>
          <option >1</option>
        </select>
      </div>
      
      </div>
      </div>
      </div>
      </div>

    </div>
  )
}

export default CurrencyExchanger