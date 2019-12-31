import React from 'react';
import ReactDOM from 'react-dom';
import {User} from "./model"

interface UsersProps {
    users: User[]
    onAddUser: () => void
    onEditUser: (user: User) => void
    onDeleteUser: (user: User) => void
}

function Users({users, onAddUser, onEditUser, onDeleteUser}: UsersProps) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="panel-title">
                            Users
                            <span onClick={onAddUser} className="btn btn-success btn-small pull-right" style={{marginTop: '-6px'}}>Add New User</span>
                        </div>
                    </div>
                    <div className="panel-body">

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th style={{textAlign: 'right'}}>Option</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.map((user, idx) => (
                                        <tr key={idx}>
                                            <th>{user.firstName}</th>
                                            <th>{user.lastName}</th>
                                            <th>
                                                <span onClick={() => onDeleteUser(user)} className="btn btn-small btn-danger pull-right">Delete</span>
                                                <span onClick={() => onEditUser(user)} className="btn btn-small btn-success pull-right" style={{marginRight: '10px'}}>Edit</span>
                                            </th>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;