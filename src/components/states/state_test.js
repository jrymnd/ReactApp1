import { players } from "../../playersList";

export default function TestState (){

    const playerTest = players

    return (
        <div>
            <p> you clicked {playerTest[0].name} </p>
        </div>
    );
}
