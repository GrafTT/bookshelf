import React, { Component } from "react";
import EditForm from "./EditForm";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
    };
  }

  editFormHandler = () => {
    this.setState({
      showEditForm: !this.state.showEditForm,
    });
  };
  
  render() {
    const { book, id, deleteBook } = this.props;
    return (
      <div>
        {this.state.showEditForm ? (
          <EditForm
            book={book}
            id={id}
            editFormHandler={this.editFormHandler}
            editBook={this.props.editBook}
          />
        ) : (
          <div className="book">
            <div className="book__img">
              <img src={book.img} alt="" />
            </div>
            <div className="book__about">
              <p className="book_title">{book.title}</p>
              <p className="book_author">{book.author}</p>
              <p className="book_year">{book.year}</p>
            </div>
            <div className="book__btn">
              <button className="book__btn_edit" onClick={this.editFormHandler}>
                Редактировать
              </button>
              <button
                className="book__btn_delete"
                onClick={id => deleteBook(id)}
              >
                Удалить
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Book;
