import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Users from "./Users"
import EditUser from "./EditUser"
import { User } from './model';

const defaultUsers = [
    {firstName: 'Aria', lastName: 'Stark', id: 1}, 
    {firstName: 'Richard', lastName: 'Benin', id: 2}, 
    {firstName: 'Devid', lastName: 'Pearson', id: 3}
];

class App extends React.Component {

    EditView = ({user}: {user: User}) => (
        <EditUser user={user} onViewUsers={this.onViewUsers} onSubmit={this.onSubmit}/>
    )

    ListView = ({users}: {users: User[]}) => (
        <Users users={users} 
            onAddUser={this.onAddUser} onEditUser={this.onEditUser} onDeleteUser={this.onDeleteUser}/>
    )

    constructor(props: any) {
        super(props);
        console.log(this.props);

        this.state = {
            user: null,
            users: defaultUsers,
            ContentView: this.ListView
        }

        this.onViewUsers = this.onViewUsers.bind(this)
        this.onAddUser = this.onAddUser.bind(this)
        this.onDeleteUser = this.onDeleteUser.bind(this)
        this.onEditUser = this.onEditUser.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.getUsers = this.getUsers.bind(this)
    }

    getUser() {
        return (this.state as any).user
    }

    getUsers() {
        return (this.state as any).users as User[]
    }

    doEdit(user: User) {
        const users = this.getUsers().slice()
        const userIndex = users.findIndex(u => u.id === user.id)
        users[userIndex] = user
        this.setState({users})
    }

    doAdd(user: User) {
        const users = this.getUsers().slice()
        users.push(user)
        this.setState({users})
    }

    onSubmit(user: User, isEdit: boolean) {
        console.log('### submit: ', user, {isEdit});
        if (isEdit) {
            this.doEdit(user)
        } else {
            this.doAdd(user)
        }
        this.setState({user: null, ContentView: this.ListView})
    }

    onViewUsers() {
        console.log('#click View User');
        this.setState({ContentView: this.ListView})
    }

    onAddUser() {
        console.log('#click Add User');
        this.setState({ContentView: this.EditView})
    }

    onDeleteUser(user: User) {
        console.log('#click Delete User');
        const users = this.getUsers().filter(u => u.id !== user.id)
        this.setState({users})
    }

    onEditUser(user: User) {
        console.log('#click Edit User');
        this.setState({user, ContentView: this.EditView})
    }

    render() {
        const {users, user, ContentView}: {users: User[], user: User, ContentView: any} = this.state as any;
    
        console.log('###', {ContentView});
    
        return (
            <div id="App" className="container-fluid" style={{marginTop: '18px'}}>
    
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">Simple React CRUD Application</div>
                    </div>
                </div>
    
                <ContentView user={user} users={users}/>
            </div>
        )
    }
  }

export default App;