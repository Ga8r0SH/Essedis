import React from "react";
import { connect } from "react-redux";
import { EditorState } from "draft-js";
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import TextEditor from "./EditorJSX/TextEditor";
import axios from 'axios';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class TextEditorAPI extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(), // Создание начального состояния редактора
            updateEditorState: EditorState.createEmpty(), // Создание начального состояния редактора
            files: [],
            htmlUpdate: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.isShowUpdateForm && this.props.isShowUpdateForm !== prevProps.isShowUpdateForm) {
            this.onHandleUpdate();
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    onEditorUpdateStateChange = (updateEditorState) => {
        this.setState({
            updateEditorState,
        });
    };

    onFilesChange = (e) => {
        this.setState({files: e.target.files});
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        const {editorState, files } = this.state;
        const contentState = editorState.getCurrentContent();
        const htmlText = stateToHTML(contentState);

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append(`images[]`, files[i]);
        };
        formData.append('htmlText', htmlText);

        axios.post('http://localhost/essedis/api/news/submit-data.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    alert("Post has added!");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    onHandleUpdate = () => {
        axios.get(`http://localhost/essedis/api/news/update-post.php/?id=${this.props.idUpdate}`)
            .then(response => {
                console.log(response.data);
                this.setState({htmlUpdate: response.data}, () => {
                    const contentState = stateFromHTML(this.state.htmlUpdate);
                    const updateEditorState = EditorState.createWithContent(contentState);
                    this.setState({ updateEditorState });
                    console.log(this.state.updateEditorState);
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    onHandleSubmitUpdate = (e) => {
        e.preventDefault();

        const { updateEditorState, files } = this.state;
        const contentState = updateEditorState.getCurrentContent();
        const htmlText = stateToHTML(contentState);

        const id = this.props.idUpdate;

        const formData = new FormData();
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                formData.append(`images[]`, files[i]);
            }; 
        } else {
            formData.append('images[]', null);
        }

        formData.append('htmlText', htmlText);
        formData.append('id', id);

        axios.post('http://localhost/essedis/api/news/update-post.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    alert("Post has edited!");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
    

    render() {

        const { editorState, updateEditorState } = this.state;
        return (
            <TextEditor 
                editorState={editorState}
                updateEditorState={updateEditorState}

                idUpdate={this.props.idUpdate}
                isShowUpdateForm={this.props.isShowUpdateForm}

                onHandleSubmit={this.onHandleSubmit}
                onHandleSubmitUpdate={this.onHandleSubmitUpdate}

                onEditorStateChange={this.onEditorStateChange}
                onEditorUpdateStateChange={this.onEditorUpdateStateChange}

                onFilesChange={this.onFilesChange}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {};
}


export const TextEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TextEditorAPI)

