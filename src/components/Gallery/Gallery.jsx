import React, { useState, useContext } from "react";
import classes from "./Gallery.module.css";
import Modal from "../../logicComponents/Modal/Modal";
import { ItemCreatorContainer } from "./GalleryItemCreator/ItemCreatorContainer";
import { GalleryElementContainer } from "./GalleryElement/GalleryElementContainer";
import AdminContext from "../../redux/adminContext";

const Gallery = (props) => {

    const isAdmin = useContext(AdminContext);

    const [galleryID, setID] = useState(null);
    const [isShowItems, setShowing] = useState(true);
    const [nameOfItem, setName] = useState(null);

    if (Array.isArray(props.galleryData)) {
        props.galleryData.sort((a, b) => b.id - a.id);
    }

    const [modalActive, setModalActive] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleDelete = () => {
        props.onHandleDelete(selectedId);
        setModalActive(false);
    }

    return (
        <div className={classes.gallery}>
            <div className="container ZenKaku">
                {isShowItems && (
                    <div>
                        <div className={classes.items}>
                            {
                                props.galleryData.map(item =>
                                    <div key={item.id} className={classes.itemWrapper} onClick={() => {
                                        setID(item.id);
                                        props.setGalleryItemID(item.id);
                                        setName(item.name)
                                    }}>
                                        <div className={classes.imageContainer} onClick={() => { setShowing(false) }}>
                                            <img src={`http://localhost/essedis/upload/gallery/galleryMain/${item.image}`} alt="gallery" />
                                            <div className={classes.caption}>
                                                <p>{item.itemsQuantity} фотографий</p>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                        <div className={classes.title}>
                                            {item.name}
                                        </div>

                                        {isAdmin && <div>
                                            <span className={classes.delete}><button onClick={() => { setModalActive(true); setSelectedId(item.id) }}>Удалить</button></span>
                                            <Modal active={modalActive} setModalActive={setModalActive}>
                                                <p>Вы действительно хотите удалить?</p>
                                                <br />
                                                <p>
                                                    <span><button onClick={handleDelete}>Да</button></span>
                                                    <span><button onClick={() => setModalActive(false)}>Нет</button></span>
                                                </p>
                                            </Modal>
                                        </div>}
                                    </div>
                                )

                            }
                        </div>

                        {isAdmin && <ItemCreatorContainer />}

                    </div>
                )}

                {galleryID && !isShowItems && (
                    <div className="sliderGallery">
                        <div className={classes.itemName}>{nameOfItem}</div>

                        <GalleryElementContainer />

                        <div className={classes.turnBack}>
                            <button onClick={() => { setID(null); setShowing(true) }}>Назад</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}


export default Gallery;