import React from 'react';
import EditForm from './EditForm'

 const Book = ({book, id, deleteBook}) => {
  return (
    <div className="book">
      <div className="book__img">
        <img src={book.img} alt=""/>
      </div>
      <div className="book__about">
        <p className="book_title">{book.title}</p>
        <p className="book_author">{book.author}</p>
        <p className="book_year">{book.year}</p>
      </div>
      <div className="book__btn">
        <button className="book__btn_edit">Редактировать</button>
        <button className="book__btn_delete" onClick={i=>deleteBook(i)}>Удалить</button>
      </div>
    </div>
  )
}
export default Book;