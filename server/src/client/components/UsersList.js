import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(item => {
      return <li key={item.id}>{item.name}</li>;
    });
  }

  render() {
    return (
      <div>
        UserList
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
