import { players } from "../playersList";
import { teamInfo } from "../teamName";

export default function TeamList() {
const listPlayers = players.map(player => 
    <li key={player.name}>
        Name: {player.name}
        <br/>
        Postion: {player.position}
        <br />
        <br />
    </li>
);

return (
    <div>
    <h1>{teamInfo[0].name}</h1>
    <ul>{listPlayers}</ul>
    </div>
);
}