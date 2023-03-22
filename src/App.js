
import './App.css';
import TeamList from './components/lists/TeamList';
import TeamHeader from './components/headers/TeamHeader';


export default function MyApp() {

  return (
    <div>
      <TeamHeader />
      <TeamList /> 
    </div>
  );
}
