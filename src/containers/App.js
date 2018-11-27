import React from 'react'
import { connect } from 'react-redux';
import AddComment from '../components/add-comment';
import CommentList from '../components/comments-list';
import { handleAuthor, handleComment } from '../actions/form'
import { addComment,deleteComment,getComment } from "../actions/comments" 

import '../App.css'

const App = (props) => {
  const { 
    comments, 
    form, 
    handleAuthor, 
    handleComment,
    addComment,
    deleteComment
  } = props;

  return ( 
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React + Redux</h1>
      </header>
      <div className="form-box">
        <AddComment
          author={form.author}
          comment={form.comment}
          handleAuthor={handleAuthor}
          handleComment={handleComment}
          addComment={addComment}
        />
        <CommentList 
            commentList={comments}
            deleteComment={deleteComment}
        />
      </div>
    </div>
  )
}

// передача данных из store в App при помощи connect
const mapStateToProps = store => {
  return {
    comments: store.comments,
    form: store.form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAuthor: (ev) => dispatch(handleAuthor(ev)),
    handleComment: (ev) => dispatch(handleComment(ev)),
    addComment: (comment) => dispatch (addComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    getComment: () => dispatch(getComment())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);