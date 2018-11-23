import React from 'react';

const AddComment = (props) => { 
    const {handleAuthor, handleComment, addComment} = props;

     // дата и время комментария
     const getDateComment = () => {
        var m = new Date();
        const date = `${m.getDate()}.${m.getMonth()}.${m.getFullYear()}`;
        const time = `${m.getHours()}:${m.getMinutes()}:${m.getSeconds()}`;
        const dateTime = `${date} ${time}`;

        return dateTime;
    }

    // валидация полей ввода 
    const validateInput = (str) => {
        if(str.match(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig)) {
            return false;
        } 
        return true;        
    }

    // общая проверка
    const validateComment = (ev) => {
        ev.preventDefault();
        const authorVal = props.author.trim()
        const commentVal = props.comment.trim()
        
        // проверяем на заполненность полей автор комментарий
        if(authorVal && commentVal) {
            if(validateInput(props.author) && validateInput(props.comment)) {
                return true;
            } else {
                alert('поля содержат недопустимые символы');
            }     
        } else {
            alert('поля является обязательным! вы ввели пустое значение');
        }       		
    }

    return (
        <form onSubmit={
            (ev) => {
                if(validateComment(ev)) {
                    addComment({
                        id: Date.now(),
                        author: props.author,
                        comment: props.comment,
                        date: getDateComment()
                    }); 
                }                            
            }
        }>         
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

export default AddComment;