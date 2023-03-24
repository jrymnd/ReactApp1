import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Button} from 'reactstrap';
import { players } from "../../playersList";


export default function TeamList() {

const [blist, setBlist] = useState([])
const [sortedBlist, setSortedBlist] = useState([])



const lineUp = blist.map(player => 
    <div classname="grid-item" key={player.name}>
        Name: {player.name}
        <br />
        <img
          className='avatar'
          src={player.imageUrl}
          alt={'Photo of ' + player.name}
          style={{
          width: player.imageSize,
          height: player.imageSize
        }}
          />
        <br />
        Postion: {player.position}
        <br />
        <br />
    </div>
    );


const listPlayers = players.map(player => 
<div classname="grid-item" key={player.name}>
        Name: {player.name}
        <br />
        <img
          className='avatar'
          src={player.imageUrl}
          alt={'Photo of ' + player.name}
          style={{
          width: player.imageSize,
          height: player.imageSize
        }}
          />
        <br />
        {player.position}
        <br />
        {player.male ? 'Male' : 'Female'}

    <br />
        <Button color="secondary" outline  onClick={() => onClick({player})}>Add to lineup</Button>

        </div>
);

const sortedLineup = sortedBlist.map(player => 
    <div classname="grid-item" key={player.name}>
            <img
          className='avatar'
          src={player.imageUrl}
          alt={'Photo of' + player.name}
          style={{
            width: player.imageSize,
            height: player.imageSize
          }}
          />
    {player.name}
    <br/>
    {player.position}
    <br />
    {player.male ? 'Male' : 'Female'}
    <br />
</div>
);



function onClick({player}){

    const battingList = blist.concat(player)

    setBlist(battingList)
};

function onButtonClick({blist}){


    const males = blist.filter((person) => person.male === true );
    const females = blist.filter((person) => person.male === false);
    const boygirl = males.reduce((acc, curr, index) => {
        if (index < females.length) {
        return[...acc,curr,females[index]];
    } 
    else {
        return[...acc,curr];
    }
    },[]);

    const genderSortedBlist = sortedBlist.concat(boygirl)


    setSortedBlist(genderSortedBlist)

    };





return (

    <div className="textCenter">
    <h1>Players</h1>
    <br />
    <div className="textCenter grid-container">{listPlayers}</div>
    <br />
    <br />
    <br />
    <br />
<h1>Players Present</h1>
    <div className="textCenter grid-container">{lineUp}</div>
    <Button className='buttonCenter' onClick={() => onButtonClick({blist})}>
        Create Lineup
    </Button>
    <br />
    <br />
    <br />
    <br />
    <h1>Line Up</h1>
    <br />
    <div className="textCenter grid-container">{sortedLineup}</div>
    <br />
    <br />
    <br />
    <br />
    </div>

);
}