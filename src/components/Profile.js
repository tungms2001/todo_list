import React from "react";
import {Link} from "react-router-dom";

const Profile = () => {
    return(
        <div className="pro">
            <h3>Họ và tên: MAI SƠN TÙNG</h3>
            <h3>Mã số sinh viên: 4501104270</h3>
            <h3>Lớp: COMP103101</h3>
            <div className="toback">
                <Link to="/">To back...</Link>
            </div>
        </div>
    );
};
export default Profile;