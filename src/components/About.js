import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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
