import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">
                                {loggedInUser}
                            </h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                {/* <User name={"Amit (Function)"} location={"New Delhi (Function)"} /> */}
                <UserClass
                    name={"Amit (Class)"}
                    location={"New Delhi (Class)"}
                />
            </div>
        );
    }
}

export default About;
