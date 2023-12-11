import { useState, useEffect } from "react";
import { setAdminListAC } from "../../../../redux/adminReducer";
import { connect } from "react-redux";
import axios from "axios";
import AdminList from "./AdminList";


const AdminListAPI = (props) => {

    const { setAdminList, adminList } = props;

    const [message, setMessage] = useState(null);

    useEffect(() => {
        axios.get("http://localhost/essedis/api/admin/adminList/adminList.php")
        .then(response => {
            setAdminList(response.data.items);
        })
    }, [setAdminList])

    let onHandleDelete = id => {
        axios.get("http://localhost/essedis/api/admin/adminList/adminDelete.php/?id=" + id)
        .then(response => {
            console.log(response);
            setMessage(response.data.message);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <AdminList 
            adminList={props.adminList}
            message={message}

            onHandleDelete={onHandleDelete}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        adminList: state.adminState.adminList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAdminList: list => {
            dispatch(setAdminListAC(list));
        }
    }
}

export const AdminListContainer = connect(mapStateToProps, mapDispatchToProps)(AdminListAPI);