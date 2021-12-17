import { useMoralis } from "react-moralis";

function ChangeUserName() {

    const { user, setUserData, isUserUpdating, userError } = useMoralis();

    const setUserName = () => {
        
        const username = prompt(`Enter your new Username (current: ${user.getUsername()})`);

        // if(!userName) {
        //     return;
        // }

        setUserData({
            username,
        });
    }

    return (

        <div className="text-sm absolute top-5 right-5">

            <button 
                className="hover:text-pink-700" 
                disabled={isUserUpdating}
                onClick={setUserName}
            >
                Change your Username
            </button>
            
        </div>
    )
}

export default ChangeUserName
