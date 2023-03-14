import { players } from "../../playersList";

export default function Header() {
    const user = {
      firstName: 'Jesse',
      lastName: 'Garcia',
      imageUrl: "https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1655843426/m3nb34ytqkhmbrkyrsgq.jpg",
      imageSize: 90,
    } 
  
    return (
      <section className="headerSection">
        <img
          className='avatar'
          src={user.imageUrl}
          alt={'Photo of' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
          />
        <h1>{'Welcome to ' + user.firstName + `'s App!`}</h1>
      </section>
    );
  }