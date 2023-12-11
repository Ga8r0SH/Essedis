import React from "react";
import classes from './AdminList.module.css';

const AdminList = (props) => {
    let i = 1;

    return (
        <div className={classes.wrapper}>
            <div className={classes.items}>
                {
                    props.adminList.map(items =>
                        <div key={items.id} className={classes.itemWrapper}>
                            <div className={classes.id}>
                                {i++}
                            </div>
                            <div className={classes.adminName}>
                                {items.adminName}
                            </div>
                            <div className={classes.delete}>
                                <button onClick={() => props.onHandleDelete(items.id)}>Удалить</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={classes.deletingMessage}>{props.message}</div>
        </div>
    );
}

export default AdminList;