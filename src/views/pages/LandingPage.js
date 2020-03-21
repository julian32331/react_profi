import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from "../../components/Header/Header"
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        );
    }
}

export default withRouter(LandingPage);