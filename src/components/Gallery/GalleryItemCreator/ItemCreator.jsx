import React from "react";
import classes from './ItemCreator.module.css';

const ItemCreator = props => {

    let onNameChange = e => {
        props.setItemName(e.target.value);
    }

    return (
        <div className={classes.creator}>
            <form method="POST" onSubmit={props.onHandleSubmit}>
                <div className={classes.creatorForm}>
                    <div className={classes.text}>
                        <div>Название:</div>
                        <div>Фото для обложки:</div>
                        <div>Все фото:</div>
                    </div>
                    <div className={classes.textEnter}>
                        <div><input onChange={onNameChange} value={props.itemName} placeholder="Название альбома" type="text" name="name" required /></div>
                        <div><input onChange={props.onCoverChange} type="file" name="cover" required /></div>
                        <div><input onChange={props.onFilesChange} type="file" name="file[]" multiple required /></div>
                    </div>
                </div>
                <div className={classes.submit}>
                    <input type="submit" className={classes.addPerson} value="Добавить" />
                </div>
            </form>
        </div>
    )
}

export default ItemCreator;