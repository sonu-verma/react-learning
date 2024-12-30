import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: {
        id: 1,
        name: "Sonu Verma"
    }
});

export default UserContext