import {useHistory} from 'react-router-dom';

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpPage(){
    const history = useHistory();
    function addMeetUphandler(meetupData){
        
        fetch('https://react-getting-started-6c965-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(()=>{
            history.replace('/');
        });
    }
    return (
        <section>
            <h1>
                Add New Meetup
            </h1>
            <NewMeetUpForm onAddMeetUp={addMeetUphandler}></NewMeetUpForm>
        </section>
    );
}

export default NewMeetUpPage;