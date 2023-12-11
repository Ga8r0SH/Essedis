import React, { useContext, useState } from "react"
import Modal from "../../logicComponents/Modal/Modal"
import './AboutUs.css'
import AdminContext from "../../redux/adminContext"

const Persons = (props) => {

    const isAdmin = useContext(AdminContext)

    const [modalActive, setModalActive] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleDelete = () => {
        props.onHandleDelete(selectedId);
        setModalActive(false);
    }

    return (
        <>
            {
                props.aboutUsData.map(people =>
                    <div key={people.id} className="person">
                        <img src={`http://localhost/essedis/upload/about-us-image/${people.imageAuthorURL}`} alt="person" />
                        <div className="namePerson">
                            <h1>{people.nameOfThePerson}</h1>
                            <p>{people.position}</p>
                            {isAdmin && <div>
                                <p><span className="update"><button onClick={() => props.onHandleUpdate(people.id)}>Редактировать</button></span></p>
                                <p><span className="delete"><button onClick={() => { setModalActive(true); setSelectedId(people.id) }}>Удалить</button></span></p>
                                <Modal active={modalActive} setModalActive={setModalActive}>
                                    <p>Вы действительно хотите удалить?</p>
                                    <br />
                                    <p>
                                        <span><button className="buttonPopUpYes" onClick={handleDelete}>Да</button></span>
                                        <span><button className="buttonPopUpNo" onClick={() => setModalActive(false)}>Нет</button></span>
                                    </p>
                                </Modal>
                            </div>}
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Persons;