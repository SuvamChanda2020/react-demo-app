import {Link} from 'react-router-dom';
function MainNavigation(){
    return <header>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All MeetUps</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favoiites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation