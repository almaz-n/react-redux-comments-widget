import React from 'react';

const addComment = (props) => { 
    const {handleAuthor, handleComment} = props;

    return (
        <form>         
            <p>
                <label> 
                    Автор: 
                    <input  
                        type="text" 
                        name="author"
                        value={props.author} 
                        onChange={(ev) => {
                            handleAuthor(ev)
                        }}
                    />
                </label>
            </p>
            <p>
                <label> 
                    Комментарий: 
                    <textarea 
                        type="text" 
                        name="comment" 
                        value={props.comment} 
                        onChange={(ev) => {
                            handleComment(ev)
                        }}
                    ></textarea>
                </label>
            </p>
            <p>
                <button type="submit" className="form-button">Добавить комментарий</button>
            </p>
        </form>
    )
}

export default addComment;