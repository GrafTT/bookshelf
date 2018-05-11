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


  onSubmitBook = ()=>{
    const newBook = this.state;
    this.props.addNewBook(newBook)
  }

  render() {
    return (
      <div className="add-form">
        <h2>Добавление книги</h2>
        <label>
          <p>Наименование</p>
          <input
            type="text"
            name="title"
            className="add-form__title"
            onChange={this.onInputChange}
          />
        </label>
        <label>
          <p>Автор</p>
          <input
            type="text"
            name="author"
            className="add-form__author"
            onChange={this.onInputChange}
          />
        </label>
        <label>
          <p>Год выпуска</p>
          <input
            type="text"
            name="year"
            className="add-form__year"
            onChange={this.onInputChange}
          />
        </label>
        <label>
          <p>Изображение</p>
          <input
            type="text"
            name="img"
            className="add-form__image"
            onChange={this.onInputChange}
          />
        </label>
        <div className="add-form__btns">
          <button className="save" onClick={this.onSubmitBook}>Сохранить</button>
          <button className="cencel">
            Отменить
          </button>
        </div>
      </div>
    );
  }
}
export default AddForm;
