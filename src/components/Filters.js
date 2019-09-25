import React from 'react'

class Filters extends React.Component {

  handleChange = (event) => {
    this.props.onChangeType(event.target.value)
  }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type">
          <select onChange={(event) => {this.handleChange(event)}} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
@@ -15,7 +21,12 @@ class Filters extends React.Component {
        </div>

        <div className="field">
          <button className="ui secondary button">Find pets</button>
          <button
            className="ui secondary button"
            onClick={this.props.onFindPetsClick}
            >
            Find pets
            </button>
        </div>
      </div>
    )