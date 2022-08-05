import React from "react";
import { Component } from "react";


import UserService from "../services/user.service";

// Get ID from URL


type Props = {};

type State = {
  email: any;
}

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: []
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        console.log(response.data.data)
        this.setState({
          email: response.data.data
        });
      },
      error => {
        this.setState({
          email:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          {/* <h3>{this.state.email}kdjfdviejdgiu</h3> */}
          <ul>
        {
          this.state.email
            .map((person: { id: React.Key; email: string; }) =>
              <div key={person.id}>{person.email}</div>
            )
        }
      </ul>
        </header>
      </div>
    );
  }
}
