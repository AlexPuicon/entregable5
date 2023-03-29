import React, { useState } from 'react';

const Home = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setnameError] = useState(null);
  const handleChange = (e) => {
    const newNameValue = e.target.value;
    setNameValue(newNameValue);
    if (newNameValue === '') setnameError('Name is required');
    else if (/^[a-zA-Z ]{5,}$/i.test(newNameValue))
      setnameError('Only letters and blanks are allowed and should be 5 length');
    else setnameError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError) console.log('Save user name');
  };
  return (
    <div className="text-center">
      <div>
        <img src="/pokedex_img.png" alt="pokedex" />
      </div>
      <div className="text-center">
        <h1 className="text-red-500 text-center text-4xl font-bold">!Hello Trainer</h1>
        <p>Type your name to start</p>
      </div>
      <form className="flex flex-row justify-center items-center mt-8">
        <input
          type="text"
          className="shadow-md border-black p-2"
          value={nameValue}
          onChange={handleChange}
        />
        <button type="submit" className="bg-red-500 text-white font-bold p-2">
          Start
        </button>
      </form>
      {nameError && <p className="text-red-500">{nameError}</p>}
    </div>
  );
};

export default Home;
