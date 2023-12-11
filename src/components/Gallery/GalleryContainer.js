import { useEffect } from "react";
import { setGalleryItemIdAC, setItemsAC, setItemsQuantityAC } from "../../redux/galleryPageReducer";
import Gallery from "./Gallery";
import { connect } from "react-redux";
import axios from "axios";


const GalleryAPI = props => {

    const { setItems, galleryData, formSubmitted } = props;

    useEffect(() => {
        axios.get('http://localhost/essedis/api/gallery/gallery.php')
            .then(response => {
                setItems(response.data.items);
            })
    }, [setItems, formSubmitted]);

    let onHandleDelete = id => {
        axios.get('http://localhost/essedis/api/gallery/delete-gallery-item.php/?id=' + id)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    alert("Item has deleted!");
                    setItems(galleryData.filter((item) => item.id !== id));
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Gallery 
            galleryData={props.galleryData}
            setGalleryItemID={props.setGalleryItemID}

            onHandleDelete={onHandleDelete}
        />
    );
}


const mapStateToProps = state => {
    return {
        galleryData: state.galleryPage.galleryData,
        itemsQuantity: state.galleryPage.itemsQuantity,
        formSubmitted: state.galleryPage.formSubmitted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setItems: data => {
            dispatch(setItemsAC(data));
        },
        setGalleryItemID: id => {
            dispatch(setGalleryItemIdAC(id));
        },
        setItemsQuantity: number => {
            dispatch(setItemsQuantityAC(number));
        }
    }
}

export const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryAPI);