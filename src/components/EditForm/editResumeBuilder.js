import React, { useState } from 'react'
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

function EditResumeBuilder() {

  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    // Implement delete logic here
    setEditMode(false);
    setSelectedOption('');
    setInputValue('');
  };

  const handleAdd = () => {
    // Implement add logic here
    setEditMode(false);
    setSelectedOption('');
    setInputValue('');
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (

    <>
      <div className='w-full h-screen flex flex-col col-auto'>

        <div className='flex m-3 text-2xl justify-center w-full'>
          Edit Resume Builder;
        </div>
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md w-1/3">
          <div className="mb-4 ">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select Option</option>
            </select>
          </div>
          <div className="mb-4 ">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select Option</option>
            </select>
          </div>
          <div className="relative flex justify-normal items-center mt-12">

            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {inputValue && <button
              className="absolute right-28 top-2 p-2 text-gray-600 hover:text-red-500"
              onClick={handleClear}
            >
              <AiOutlineClose />
            </button>}
            <div>
              {inputValue &&

                <div className="flex space-x-2">

                  <button
                    className="p-2 text-gray-600 hover:text-blue-500"
                    onClick={handleEdit}
                  >
                    <AiOutlineEdit />
                  </button>
                  <button
                    className="p-2 text-gray-600 hover:text-red-500"
                    onClick={handleDelete}
                  >
                    <AiOutlineDelete />
                  </button>
                  <button
                    className="p-2 text-gray-600 hover:text-green-500"
                    onClick={handleAdd}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditResumeBuilder;