import React from "react";

const UserContext = React.createContext()

export default UserContext

//every context is a provider and it is used as a wrapper 
{/* <UserContext>
    <Card>
        <Data>

        </Data>
    </Card>
<UserContext/> */}

//here every children under the wrapper of the userContext can acces the user context data 