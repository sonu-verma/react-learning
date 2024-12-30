import { useContext } from "react"
import UserContext from "../utils/UserContext";
const About = () => {

    const { loggedInUser, setUserInfo } = useContext(UserContext);

    const handleContextInput = (e) => {
        setUserInfo({
            ...loggedInUser,
            name: e.target.value
        })
    }
    return <>
        <div className="m-10">
            <label>Update Context:</label>
            <input 
                className="border rounded-sm border-black p-1" 
                placeholder="update context" 
                type="text"
                value={loggedInUser?.name || ""}
                onChange={ handleContextInput }
            />
        </div>
    </>
}

export default About