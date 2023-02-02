import React, { createContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import AddBloodBankForm from './Components/AddBloodBankForm';
import Footer from './Components/Shared/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Navigation from './Components/Shared/Navigation';
import Profile from './Components/Profile';
import SearchBlood from './Components/SearchBlood';
import SearchBloodBank from './Components/SearchBloodBank';
import SearchBloodCamp from './Components/SearchBloodCamp';
import SignUp from './Components/SignUp';
import AboutUs from './Components/AboutUs';
import NotFound404 from './Components/NotFound404';
import Logout from './Components/Logout';

import { initialState, reducer } from './reducer/UseReducer';

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />


      <Route path="/search-blood" element={<SearchBlood />} />


      <Route path="/about" element={<AboutUs />} />


      <Route path="/login" element={<Login />} />


      <Route path="/signup" element={<SignUp />} />




      <Route path="/add-blood-bank" element={<AddBloodBankForm />} />




      <Route path="/search-blood-bank" element={<SearchBloodBank />} />


      <Route path="/search-blood-camps" element={<SearchBloodCamp />} />

      <Route path="/admin-login" element={<Login />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/logout" element={<Logout />} />
      <Route path="/blood-bank/add" element={<AddBloodBankForm />} />

      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <React.StrictMode>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navigation />
        <Routing />
      </UserContext.Provider>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
