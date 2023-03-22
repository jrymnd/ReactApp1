import logo from './logo.svg';
import './App.css';
import TeamList from './components/lists/TeamList';
import Header from './components/headers/PlayerHeader';
import TeamHeader from './components/headers/TeamHeader';
import Footer from './components/footers/appFooter';


export default function MyApp() {

  return (
    <div>
      <TeamHeader />
      <TeamList /> 
    </div>
  );
}
