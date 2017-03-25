import React from 'react';

export default class ChatMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { textMessage: '' };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const messageText = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: messageText
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted, message: ', this.state.textMessage);
  }
  render() {
    return (
      <div className="chat-message">
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="textMessage"
            id="message-to-send"
            placeholder="Type your message"
            rows="3"
            value={this.state.textMessage}
            onChange={this.handleChange}
          />
          <div className="actions">
            <i className="fa fa-file-o"></i>
            <i className="fa fa-file-image-o"></i>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}