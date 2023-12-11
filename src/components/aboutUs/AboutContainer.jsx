import { connect } from "react-redux";
import { setPeopleAC } from "../../redux/aboutUsPageReducer";
import AboutUs from "./AboutUs";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const AboutUsAPI = (props) => {

    const { setPeople } = props;

    const [isShowForm, setShowing] = useState(false);
    const [idUpdate, setID] = useState(0);

    useEffect(() => {
        axios.get('http://localhost/essedis/api/about-us/about-us.php')
            .then(response => {
                setPeople(response.data.items);
                console.log(response.data.items);
            })
    }, [setPeople]);

    let onHandleDelete = (personID) => {
        axios.get('http://localhost/essedis/api/about-us/delete-person.php/?id=' + personID)
            .then(response => {
                console.log(response.data);
                if (response.status === 200) {
                    alert("Person is deleted!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    let onHandleUpdate = (personID) => {
        setShowing(true);
        setID(personID);
    }


    return (
        <AboutUs 
            aboutUsData={props.aboutUsData}
            onHandleDelete={onHandleDelete}
            onHandleUpdate={onHandleUpdate}

            isShowForm={isShowForm}
            idUpdate={idUpdate}
        />
    );
}



const mapStateToProps = (state) => {
    return {
        aboutUsData: state.aboutPage.aboutUsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPeople: data => {
            dispatch(setPeopleAC(data));
        }
    }
}
export const AboutUsContainer = connect(mapStateToProps , mapDispatchToProps)(AboutUsAPI);