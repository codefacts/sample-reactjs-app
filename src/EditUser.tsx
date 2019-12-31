import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {User} from "./model"

export interface EditUserProps {
    user: User
    onViewUsers: () => void
    onSubmit: (user: User, isEdit: boolean) => void
}

function EditUser({user, onViewUsers, onSubmit}: EditUserProps) {

    const isEdit = !!(user && user.id)
    const [userData, setUserData] = useState<User>(user || {id: Math.random(), firstName: "", lastName: ""})

    const {firstName, lastName}: User = userData;

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="panel-title">
                            {isEdit ? 'Edit User' : "Add User"}
                            <span onClick={onViewUsers} className="btn btn-success btn-small pull-right" style={{marginTop: '-6px'}}>View Users</span>
                        </div>
                    </div>
                    <div className="panel-body">

                        <form onSubmit={e => {e.preventDefault(); onSubmit(userData, isEdit)}}>

                            <div className="form-group">
                                <label>First Name</label>
                                <input 
                                    value={firstName} onChange={e => setUserData({
                                        ...userData,
                                        ...{firstName: e.target.value}
                                    })}
                                    type="text" className="form-control" placeholder="First Name"/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    value={lastName} onChange={e => setUserData({
                                        ...userData,
                                        ...{lastName: e.target.value}
                                    })}
                                    type="text" className="form-control" placeholder="Last Name"/>
                            </div>

                            <button type="submit" className="btn btn-default">{isEdit ? "Update" : "Add"}</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser;