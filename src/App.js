import logo from './logo.svg';
import './App.css';
import TeamList from './components/lists/TeamList';
import Header from './components/headers/PlayerHeader';
import TeamHeader from './components/headers/TeamHeader';
import Footer from './components/footers/appFooter';
import { useState } from "react"



export default function MyApp() {

  const [blist, setBlist] = useState([])

  return (
    <div>
      <TeamHeader />
      <TeamList /> 
      <Footer />
    </div>
  );
}
