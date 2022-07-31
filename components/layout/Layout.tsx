import React, { ReactElement } from "react";
import NavBar from "../navBar/NavBar";

const Layout: React.FC<{ children: ReactElement }> = props => {
    return (
        <>
            <NavBar />
            {props.children}
        </>
    );
};

export default Layout;
