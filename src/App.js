import logo from './logo.svg';
import './App.css';
import TeamList from './components/TeamList';
import Header from './components/headers/PlayerHeader';
import TeamHeader from './components/headers/TeamHeader';

function MyButton() {
  return (
      <button>
          I'm a button 
      </button>
  );
}


export default function MyApp() {
  return (
    <div>
      <TeamHeader />
      <MyButton />
      <TeamList /> 
    </div>
  );
}
