import {Component} from 'react'

import {
  Div,
  DivForText,
  DivForSaveAndEidt,
  Input,
  Button,
} from './StyledComponents'

class EditableText extends Component {
  state = {inputText: '', isTextEdited: true}

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickToChange = () => {
    this.setState(prevState => ({isTextEdited: !prevState.isTextEdited}))
  }
  render() {
    const {isTextEdited, inputText} = this.state

    return (
      <Div>
        <DivForText>
          <h1>Editable Text Input</h1>
          {isTextEdited ? (
            <DivForSaveAndEidt>
              <Input
                value={inputText}
                type="text"
                onChange={this.onChangeText}
              />
              <Button onClick={this.onClickToChange}>Save</Button>
            </DivForSaveAndEidt>
          ) : (
            <DivForSaveAndEidt>
              <p>{inputText}</p>
              <Button onClick={this.onClickToChange}>Edit</Button>
            </DivForSaveAndEidt>
          )}
        </DivForText>
      </Div>
    )
  }
}
export default EditableText
