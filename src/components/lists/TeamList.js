import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Button, Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { players } from "../../playersList";


export default function TeamList() {

const [blist, setBlist] = useState([])
const [sortedBlist, setSortedBlist] = useState([])



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
    <Card style={{
        width: '9rem'
    }}>
        <img
          className='avatar'
          src={player.imageUrl}
          alt={'Photo of ' + player.name}
          />
    <CardBody>
    <CardTitle>{player.name}</CardTitle>

    <CardSubtitle>{player.position}
        <br />
        {player.male ? 'Male' : 'Female'}
    </CardSubtitle>
    <br />
        <Button color="secondary" outline  onClick={() => onClick({player})}>Add to lineup</Button>
        </CardBody>
    </Card>
);

const sortedLineup = sortedBlist.map(player => 
    <li key={player.name}>
            <img
          className='avatar'
          src={player.imageUrl}
          alt={'Photo of' + player.name}
          />
    Name: {player.name}
    <br/>
    Postion: {player.position}
    <br />
    {player.male ? 'Male' : 'Female'}
    <br />
    <br />
</li>
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
    } else {
        return[...acc,curr];
    }
    },[]);

    const genderSortedBlist = sortedBlist.concat(boygirl)


    setSortedBlist(genderSortedBlist)

    alert(`${females.length} & ${males.length}`)

    };





return (
    <Container>
    <div className="textCenter">
        <Row>
            <Col>
    <h1>Players</h1>
    <Container>
    <ul>{listPlayers}</ul>
    </Container>
    </Col>
<Col>
<h1>Players Present</h1>
    <ul>{lineUp}</ul>
    <Button className='buttonCenter' onClick={() => onButtonClick({blist})}>
                Create Lineup
    </Button>
    </Col>
    <Col>
    <h1>Line Up</h1>
    <ul>{sortedLineup}</ul>
    </Col>
    </Row>
    <Row>
        <h1>Hello</h1>
    </Row>
    </div>

    </Container>
);
}