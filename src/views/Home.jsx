import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setnameError] = useState(null);
  const { user, saveUser } = useContext(UserContext);

  const handleChange = (e) => {
    const newNameValue = e.target.value;
    setNameValue(newNameValue);
    if (newNameValue === '') setnameError('Name is required');
    else if (/^[A-Z][a-z ]{8,}$/i.test(newNameValue))
      setnameError('Only letters and blanks are allowed and should be 8 length');
    else setnameError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError) {
      saveUser(nameValue);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="text-center h-3/6 ">
          <div>
            <img src="/pokedex_img.png" alt="pokedex" />
          </div>
          <div className="text-center">
            <h1 className="text-red-500 text-center text-4xl font-bold">
              !Hello Trainer
            </h1>
            <p>Type your name to start</p>
          </div>
          <form
            className="flex flex-row justify-center items-center mt-8"
            onSubmit={handleSubmit}
          >
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
          {user && <Navigate to="/pokedex" replace />}
        </div>
        <div>
          <div className="bg-red-500 h-10"></div>
          <div></div>
          <div className="bg-black h-2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
