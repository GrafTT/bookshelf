import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
      img: "",
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitBook = () => {
    const newBook = this.state;
    if (Number(newBook.year) >= 2017 || isNaN(Number(newBook.year))) {
      newBook.year = "";
    }
    this.props.addNewBook(newBook);
    this.props.addFormHandler();
  };

  render() {
    return (
      <div className="form_wrap">
        <div className="add-form">
          <h2>Добавление книги</h2>
          <label>
            Наименование
            <input
              type="text"
              name="title"
              className="add-form__title"
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Автор
            <input
              type="text"
              name="author"
              className="add-form__author"
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Год выпуска
            <input
              type="text"
              name="year"
              className="add-form__year"
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Изображение
            <input
              type="text"
              name="img"
              className="add-form__image"
              onChange={this.onInputChange}
            />
          </label>
          <div className="add-form__btns">
            <button className="save" onClick={this.onSubmitBook}>
              Сохранить
            </button>
            <button className="cencel" onClick={this.props.addFormHandler}>
              Отменить
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddForm;
