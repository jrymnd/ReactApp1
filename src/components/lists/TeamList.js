import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Button } from 'reactstrap';
import { players } from "../../playersList";
import { teamInfo } from "../../teamName";


export default function TeamList() {

const [blist, setBlist] = useState([])



const lineUp = blist.map(player => 
    <li key={player.name}>
        Name: {player.name}
        <br />
        Postion: {player.position}
        <br />
        <br />
    </li>
    );


const listPlayers = players.map(player => 
    <li key={player.name}>
        Name: {player.name}
        <br/>
        Postion: {player.position}
        <br />
        {player.male ? 'Male' : 'Female'}
        <br />
        <Button color="secondary" outline 
        
        
        
        onClick={() => onClick({player})}>Add to lineup</Button>




        
        <br />
        <br />
    </li>
);

function onClick({player}){


    const battingList = blist.concat(player)

    setBlist(battingList)
    alert(player.name);
    // alert(blist);
};



return (
    <div className="textCenter">
    <h1>Players</h1>
    <ul>{listPlayers}</ul>
    <ul>{lineUp}</ul>
    </div>
);
}