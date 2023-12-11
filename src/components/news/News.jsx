import React, { useState, useContext } from "react";
import './News.css';
import NewsSlider from "./NewsSlider";
import parse from 'html-react-parser';
import { TextEditorContainer } from "../../logicComponents/TextEditor/TextEditorContainer";
import Modal from "../../logicComponents/Modal/Modal";
import AdminContext from "../../redux/adminContext";
import moment from 'moment';
import 'moment/locale/ru';

const News = (props) => {

    moment.locale('ru');
    const isAdmin = useContext(AdminContext);

    props.newsPostData.sort((a, b) => b.id - a.id);

    const [modalActive, setModalActive] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleDelete = () => {
        props.onHandleDelete(selectedId);
        setModalActive(false);
    }

    let makeDate = (date) => {
        const postDate = moment(date);
        const formattedDate = postDate.format('YYYY/MM/DD');
        const timeAgo = postDate.fromNow();

        return (
            <span>{formattedDate} ({timeAgo})</span>
        )
    }

    return (
        <div className="news-wrapper">
            <div className="container">
                {
                    props.newsPostData.map(post =>
                        <div key={post.id} className="newsElement">
                            <div className="info">
                                <div className="postOptions">
                                    <div className="date SegoeUI">
                                        { 
                                            makeDate(post.publicDate)
                                        }
                                    </div>
                                    <div className="adminOptions">
                                        {isAdmin && <div><span className="delete"><button onClick={() => {setModalActive(true); setSelectedId(post.id)}}>Удалить</button></span>
                                        <Modal active={modalActive} setModalActive={setModalActive}>
                                            <p>Вы действительно хотите удалить?</p>
                                            <br />
                                            <p>
                                                <span><button className="buttonPopUpYes" onClick={handleDelete}>Да</button></span>
                                                <span><button className="buttonPopUpNo" onClick={() => setModalActive(false)}>Нет</button></span>
                                            </p>
                                        </Modal>
                                        <span className="update"><button onClick={() => { props.onHandleUpdate(post.id) }}>Редактировать</button></span></div>}
                                    </div>
                                </div>
          
                                <div className="bodyNews">
                                    {parse(post.newsInfo)}
                                </div>
                            </div>
                            <div className="slider">
                                <NewsSlider images={post.images} />
                            </div>
                        </div>
                    )
                }
                {isAdmin &&<TextEditorContainer 
                    onHandleUpdate={props.onHandleUpdate}
                    isShowUpdateForm={props.isShowUpdateForm}
                    idUpdate={props.idUpdate}
                />}
            </div>
        </div>
    )
}

export default News;