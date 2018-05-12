import React, { Component } from "react";

class EditForm extends Component {
  constructor(props){
    super(props);
      this.state = {
        title: this.props.book.title,
        author: this.props.book.author,
        year: this.props.book.year,
        img: this.props.book.img,
      }
    
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitBook = () => {
    const editedBook = this.state;
    this.props.editBook(editedBook, this.props.id);
    this.props.editFormHandler();
  };

  render() {
    return (
      <div className="add-form">
        <h2>Редактирование книги</h2>
        <label>
          Наименование
          <input
            type="text"
            name="title"
            className="add-form__title"
            defaultValue={this.props.book.title}
            onChange={this.onInputChange}
          />
        </label>
        <label>
          Автор
          <input
            type="text"
            name="author"
            className="add-form__author"
            defaultValue={this.props.book.author}
            onChange={this.onInputChange}
          />
        </label>
        <label>
          Год выпуска
          <input
            type="text"
            name="year"
            className="add-form__year"
            defaultValue={this.props.book.year}
            onChange={this.onInputChange}
          />
        </label>
        <label>
          Изображение
          <input
            type="text"
            name="img"
            className="add-form__image"
            defaultValue={this.props.book.img}
            onChange={this.onInputChange}
          />
        </label>
        <div className="add-form__btns">
          <button type="submit" className="save" onClick={this.onSubmitBook}>
            Сохранить
          </button>
          <button className="cencel" onClick={this.props.editFormHandler}>Отменить</button>
        </div>
      </div>
    );
  }
}
export default EditForm;
