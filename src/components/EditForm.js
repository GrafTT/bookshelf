import React, { Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.book.title,
      author: this.props.book.author,
      year: this.props.book.year,
      img: this.props.book.img,
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitBook = () => {
    const editedBook = this.state;
    if (Number(editedBook.year) >= 2017 || isNaN(Number(editedBook.year))) {
      editedBook.year = "";
    }
    this.props.editBook(editedBook, this.props.id);
    this.props.editFormHandler();
  };

  onCencelInput = () => {
    this.setState({
      title: this.props.book.title,
      author: this.props.book.author,
      year: this.props.book.year,
      img: this.props.book.img,
    });
  };

  render() {
    const { title, author, year, img } = this.state;
    return (
      <div className="add-form">
        <h2>Редактирование книги</h2>
        <label>
          Наименование
          <input
            type="text"
            name="title"
            className="add-form__title"
            value={title}
            onChange={this.onInputChange}
          />
        </label>
        <label>
          Автор
          <input
            type="text"
            name="author"
            className="add-form__author"
            value={author}
            onChange={this.onInputChange}
          />
        </label>
        <label>
          Год выпуска
          <input
            type="text"
            name="year"
            className="add-form__year"
            value={year}
            onChange={this.onInputChange}
          />
        </label>
        <label>
          Изображение
          <input
            type="text"
            name="img"
            className="add-form__image"
            value={img}
            onChange={this.onInputChange}
          />
        </label>
        <div className="add-form__btns">
          <button type="submit" className="save" onClick={this.onSubmitBook}>
            Сохранить
          </button>
          <button className="cencel" onClick={this.onCencelInput}>
            Отменить
          </button>
        </div>
      </div>
    );
  }
}
export default EditForm;
