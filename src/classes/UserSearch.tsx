import { Component } from 'react';

// Describe user
interface User {
  name: string;
  age: number;
}

// Describe class props
interface UserSearchProps {
  // array of objects
  users: User[];
}

// Describe class state
interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => user.name === this.state.name);
    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h3>Search User by name</h3>
        <div>{user && `${user.name} - Age:${user.age}`}</div>
        <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={this.onClick}>Find</button>
      </div>
    );
  }
}

export default UserSearch;
