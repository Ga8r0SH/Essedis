import React from "react";
import classes from './AboutUsCreator.module.css';

const AboutUsCreator = (props) => {
    
    let onNameChange = (e) => {
        let text = e.target.value;
        props.updatePersonName(text);
    }

    let onPositionChange = (e) => {
        let text = e.target.value;
        props.updatePosition(text);
    }

    return (
        <div className={classes.aboutUs}>
            {!props.isShowForm && (
                <form method="POST" onSubmit={props.onHandleSubmit}>
                    <div className={classes.creator}>
                        <div className={classes.text}>
                            <div>Имя сотрудника:</div>
                            <div>Опция сотрудника:</div>
                            <div>Фото:</div>
                        </div>
                        <div className={classes.textEnter}>
                            <div><input onChange={onNameChange} placeholder="Введите имя сотрудника" value={props.personName} type="text" name="name" required /></div>
                            <div><input onChange={onPositionChange} placeholder="Должность сотрудника" value={props.personPosition} type="text" name="position" required /></div>
                            <div><input onChange={props.onFileChange} type="file" name="file" required /></div>
                        </div>
                    </div>
                    <div className={classes.submit}>
                        <input type="submit" className={classes.addPerson} value="Добавить"/>
                    </div>
                </form>
            )}

            {props.isShowForm && (
                <form method="POST" onSubmit={props.onHandleUpdate}>
                    <div className={classes.creator}>
                        <div className={classes.text}>
                            <div>Имя сотрудника:</div>
                            <div>Опция сотрудника:</div>
                            <div>Фото:</div>
                        </div>
                        <div className={classes.textEnter}>
                            <input type="hidden" name="id" value={props.idUpdate}/>
                            <div><input onChange={onNameChange} value={props.personName} placeholder="Введите имя сотрудника" type="text" name="name" required /></div>
                            <div><input onChange={onPositionChange} value={props.personPosition} placeholder="Должность сотрудника" type="text" name="position" required /></div>
                            <div><input onChange={props.onFileChange} type="file" name="file" required /></div>
                        </div>
                    </div>
                    <div className={classes.submit}>
                        <input type="submit" className={classes.editPerson} value="Отредактировать" />
                    </div>
                </form>
            )}
        </div>
    )
}

export default AboutUsCreator;