import React from "react";
import News from "./News";
import { connect } from "react-redux";
import { setPostsAC } from "../../redux/newsPageReducer";
import axios from 'axios';

export default class NewsAPI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            idUpdate: 0,
            isShowUpdateForm: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost/essedis/api/news/news.php')
            .then(response => {
                this.props.setPosts(response.data.items);
            })
    }


    onHandleDelete = postID => {
        axios.get('http://localhost/essedis/api/news/delete-post.php/?id=' + postID)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    onHandleUpdate = postID => {
        this.setState({
            idUpdate: postID,
            isShowUpdateForm: true
        });
    }

    render() {
        return (
            <News 
                newsPostData={this.props.newsPostData}
                onHandleDelete={this.onHandleDelete}
                onHandleUpdate={this.onHandleUpdate}

                idUpdate={this.state.idUpdate}
                isShowUpdateForm={this.state.isShowUpdateForm}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        newsPostData: state.newsState.newsPostData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPosts: data => {
            dispatch(setPostsAC(data));
        }
    }
}

export const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsAPI);