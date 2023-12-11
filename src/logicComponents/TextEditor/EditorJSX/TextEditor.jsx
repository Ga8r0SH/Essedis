import React from "react";
import { Editor } from "react-draft-wysiwyg";
import classes from "./TextEditor.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = (props) => {
    return (
        <div className={classes.newsForm}>
            {!props.isShowUpdateForm && (
            <form method="POST" onSubmit={props.onHandleSubmit}>
                <div className={classes.creatorPage}>
                    <div className={classes.editor}>
                        <Editor
                            editorState={props.editorState}
                            wrapperClassName={classes.wrapperClass}
                            editorClassName={classes.editorClass}
                            toolbarClassName={classes.toolbarClass}
                            onEditorStateChange={props.onEditorStateChange.bind(this)}

                            toolbar={{
                                options: ['inline', 'blockType', 'list', 'emoji', 'link', 'remove', 'history'],
                                inline: {
                                    inDropdown: false,
                                    options: ['bold', 'underline', 'italic'],
                                },
                                blockType: {
                                    inDropdown: true,
                                    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
                                    className: undefined,
                                    component: undefined,
                                },
                                list: {
                                    inDropdown: false,
                                    className: undefined,
                                    component: undefined,
                                    dropdownClassName: undefined,
                                    options: ['unordered', 'ordered', 'indent', 'outdent'],
                                },
                                link: {
                                    inDropdown: false,
                                    className: undefined,
                                    component: undefined,
                                    popupClassName: undefined,
                                    dropdownClassName: undefined,
                                    showOpenOptionOnHover: true,
                                    defaultTargetOption: '_self',
                                    options: ['link', 'unlink'],
                                    linkCallback: undefined
                                },
                            }}
                        />
                    </div>
                    <div className={classes.imageGainer}>
                        <input type="file" name="images[]" id={classes.fileUpload} className={classes.fileUploadInput} multiple onChange={props.onFilesChange} />
                    </div>
                    <input type="submit" className={classes.sendingPost} />
                </div>
            </form>
            )}
    
            {props.isShowUpdateForm && (
            <form method="POST" onSubmit={props.onHandleSubmit}>
                <div className={classes.creatorPage}>
                    <div className={classes.editor}>
                        <Editor
                            editorState={props.updateEditorState}
                            wrapperClassName={classes.wrapperClass}
                            editorClassName={classes.editorClass}
                            toolbarClassName={classes.toolbarClass}
                            onEditorStateChange={props.onEditorUpdateStateChange.bind(this)}

                            toolbar={{
                                options: ['inline', 'blockType', 'list', 'emoji', 'link', 'remove', 'history'],
                                inline: {
                                    inDropdown: false,
                                    options: ['bold', 'underline', 'italic'],
                                },
                                blockType: {
                                    inDropdown: true,
                                    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
                                    className: undefined,
                                    component: undefined,
                                },
                                list: {
                                    inDropdown: false,
                                    className: undefined,
                                    component: undefined,
                                    dropdownClassName: undefined,
                                    options: ['unordered', 'ordered', 'indent', 'outdent'],
                                },
                                link: {
                                    inDropdown: false,
                                    className: undefined,
                                    component: undefined,
                                    popupClassName: undefined,
                                    dropdownClassName: undefined,
                                    showOpenOptionOnHover: true,
                                    defaultTargetOption: '_self',
                                    options: ['link', 'unlink'],
                                    linkCallback: undefined
                                },
                            }}
                        />
                    </div>
                    <div className={classes.imageGainer}>
                        <input type="file" name="images[]" className={classes.chooseFile} multiple onChange={props.onFilesChange} />
                    </div>
                    <input type="submit" onClick={props.onHandleSubmitUpdate} className={classes.updatePost} value='Редактировать'/>
                </div>
            </form>
            )}
        </div>
    )
}

export default TextEditor;