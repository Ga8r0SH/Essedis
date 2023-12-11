import { connect } from "react-redux";
import { updatePersonNameAC, updatePositionAC } from "../../../redux/aboutUsPageReducer";
import AboutUsCreator from "./AboutUsCreator";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const AboutUsCreatorAPI = (props) => {
    const [files, setFile] = useState(null);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [id, setID] = useState(0);

    const scrollRef = useRef(null);

    let onFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        setName(props.personName);
        setPosition(props.personPosition);
    }, [props.personName, props.personPosition]);

    useEffect(() => {
        setID(props.idUpdate);
    }, [props.idUpdate]);

    let onHandleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('file', files);
        formData.append('name', name);
        formData.append('position', position)

        axios.post('http://localhost/essedis/api/about-us/submit-data.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                if (response.status === 200) {
                    alert('Форма добавлена!')
                }
            })
            .catch(error => {
                console.log(error);
            })

        props.updatePersonName('');
        props.updatePosition('');
    }


    let onHandleUpdate = e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('id', id);
        formData.append('file', files);
        formData.append('name', name);
        formData.append('position', position)

        axios.post('http://localhost/essedis/api/about-us/update-person.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                if (response.status === 200) {
                    alert('Форма обновлена!')
                }
            })
            .catch(error => {
                console.log(error);
            })

        props.updatePersonName('');
        props.updatePosition('');

    }

    return (
        <AboutUsCreator 
            onFileChange={onFileChange}
            onHandleSubmit={onHandleSubmit}
            onHandleUpdate={onHandleUpdate}
            ref={scrollRef}

            isShowForm={props.isShowForm}
            idUpdate={props.idUpdate}

            personName={props.personName}
            personPosition={props.personPosition}

            updatePersonName={props.updatePersonName}
            updatePosition={props.updatePosition}

        />
    );
}


const mapStateToProps = (state) => {
    return {
        personName: state.aboutPage.personName,
        personPosition: state.aboutPage.personPosition
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePersonName: (text) => {
            dispatch(updatePersonNameAC(text));
        },
        updatePosition: text => {
            dispatch(updatePositionAC(text))
        }
    }
}

export const AboutUsCreatorContainer = connect(mapStateToProps, mapDispatchToProps)(AboutUsCreatorAPI);