import { connect } from "react-redux"
import { setFormSubmittedAC, setItemNameAC } from "../../../redux/galleryPageReducer"
import ItemCreator from "./ItemCreator"
import React, { useState, useEffect } from "react"
import axios from "axios"


const ItemCreatorAPI = props => {

    const [file, setFile] = useState(null);
    const [itemFiles, setItemFiles] = useState(null);
    const [name, setName] = useState('');

    let onCoverChange = e => {
        setFile(e.target.files[0]);
    }

    let onFilesChange = e => {
        setItemFiles(e.target.files);
    }

    useEffect(() => {
        setName(props.itemName);
    }, [props.itemName]);

    let onHandleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('cover', file);
        for (let i = 0; i < itemFiles.length; i++) {
            formData.append(`file[]`, itemFiles[i]);
        };

        axios.post('http://localhost/essedis/api/gallery/submit-data.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                console.log(response);
                alert(response.data);
                props.formSubmitted ? props.setFormSubmitted(false) : props.setFormSubmitted(true);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <ItemCreator
                onHandleSubmit={onHandleSubmit}
                onCoverChange={onCoverChange}
                onFilesChange={onFilesChange}

                setItemName={props.setItemName}
                itemName={props.itemName}
            />
        </div>
    )
}


const mapStateToProps = state => {
    return {
        itemName: state.galleryPage.itemName,
        formSubmitted: state.galleryPage.formSubmitted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setItemName: name => {
            dispatch(setItemNameAC(name));
        },
        setFormSubmitted: value => {
            dispatch(setFormSubmittedAC(value));
        }
    }
}

export const ItemCreatorContainer = connect(mapStateToProps, mapDispatchToProps)(ItemCreatorAPI)