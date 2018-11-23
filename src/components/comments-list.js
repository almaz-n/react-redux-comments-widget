import React from 'react';

const CommentList = (props) => {
    const {commentList, deleteComment} = props;
    let newsTemplate;

    if(commentList.comments.length) {
        newsTemplate = commentList.comments.map( (comment) => {
            return (
                <li className="articles-list__item" key={comment.id}>        
                    <p><b>Автор: {comment.author}</b></p>
                    <p>Комментарий: {comment.comment}</p>
                    <p>Дата: {comment.date}</p>
                    <button 
                            className="js-delete-comment" 
                            title="удалить" 
                            onClick={
                                () => {
                                    deleteComment(comment.id)
                                }
                            }
                    >x</button>
                </li>
            )
        })
    } else {
        newsTemplate = <p>Комментариев нет</p>
    }

    return ( 

        newsTemplate
        
    )
}

export default CommentList;