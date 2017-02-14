import React, { Component, PropTypes } from 'react'

class FormGroup extends Component {
  static propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    type: 'text',
    value: '',
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
      touched: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(event) {
    const value = event.target.value

    this.props.onChange(value)

    this.setState({
      value,
    })
  }

  handleBlur() {
    this.setState({
      touched: true,
    })
  }

  render() {
    const error = this.props.validate(this.state.value)
    const showError = error !== true && this.state.touched

    return (
      <div className="form-group">
        <label htmlFor={this.props.id} className="col-sm-3 control-label">
          {this.props.label}
        </label>
        <div className={`col-sm-9 ${showError ? 'has-error' : ''}`}>
          <input
            type={this.props.type}
            className="form-control"
            id={this.props.id}
            placeholder={this.props.label}
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {
            showError &&
            <p className="text-danger no-margin-bottom">
              {error}
            </p>
          }
        </div>
      </div>
    )
  }
}

export default FormGroup
