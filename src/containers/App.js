import React from 'react'
import { connect } from 'react-redux';
import AddComment from '../components/add-comment';
import { handleAuthor,handleComment } from '../actions/form'

import '../App.css'

const App = (props) => {
  const { comments, form, handleAuthor, handleComment } = props;

  return ( 
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Redux</h1>
      </header>
      <div className="form-box">
        <AddComment
          author={form.author}
          comment={form.comment}
          handleAuthor={handleAuthor}
          handleComment={handleComment}
        />
      </div>
    </div>
  )
}

// передача данных из store в App при помощи connect
const mapStateToProps = store => {
  console.log(store.form);
  return {
    comments: store.comments,
    form: store.form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAuthor: (ev) => dispatch(handleAuthor(ev)),
    handleComment: (ev) => dispatch(handleComment(ev))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);