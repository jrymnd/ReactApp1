import { players } from "../../playersList";
import { teamInfo } from "../../teamName";

export default function TeamHeader() {
    const teamHeader = teamInfo.map(team =>

      <section className="headerSection">
      <img
        className='avatar'
        src={team.imagegUrl}
        alt={'Photo of ' + team.name}
        style={{
          width: team.imageSize,
          height: team.imageSize
        }}
        />
      <h1>{'Welcome to ' + team.name + `'s Team Page`}</h1>
    </section>

    )

    return (
        <div>{teamHeader}</div>
    );
  }