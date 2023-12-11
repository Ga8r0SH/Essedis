import axios from "axios";
import React, { useEffect } from "react";
import { setItemsDataAC } from "../../../redux/galleryPageReducer";
import { connect } from "react-redux";
import GalleryElement from "./GalleryElement";

const GalleryElementAPI = ({galleryItemID, setItemsData, galleryItemData})  => {

    useEffect(() => {
        axios.get('http://localhost/essedis/api/gallery/galleryItem.php/?id=' + galleryItemID)
            .then(response => {
                setItemsData(response.data.items[0].imagePaths);
            })
    }, [galleryItemID, setItemsData])

    return (
        <GalleryElement 
            galleryItemData={galleryItemData}
            galleryItemID={galleryItemID}
        />
    );
}


const mapStateToProps = state => {
    return {
        galleryItemData: state.galleryPage.galleryItemData,
        galleryItemID: state.galleryPage.galleryItemID
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setItemsData: data => {
            dispatch(setItemsDataAC(data));
        }
    }
}

export const GalleryElementContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryElementAPI);

