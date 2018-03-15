import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Dropdown.css';

export class DropdownItem extends Component {
  render() {
    return (
      <li className={(this.props.selected? 'active':'')}>
        <a onClick={this.props.onClick}
           href="/">{this.props.children}</a>
      </li>
      )
  }
}

export const DropdownItemDivider = (props) => {
  return (
    <li className="divider">
    </li>
  )
}

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      opened: false
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  options(selectedItem) {
    return React.Children.map(
      this.props.children,
      (child, i) => {
        let props = {}
        if (child.type === DropdownItem) {
          props = Object.assign(
            {},
            child.props,
            {
              onClick:this.handleOptionClick(child),
              selected: selectedItem.props.value === child.props.value
            }
          )
        }
        return Object.assign({}, child, {props})
      },
      this
    )
  }
  handleOptionClick(dropdownitem) {
    return (evt) => {
      this.setState({selectedOption: dropdownitem.props.value, opened: false})
      evt.preventDefault()
      const cloneEvt = Object.assign(
        {}, evt, {target: {value: dropdownitem.props.value}})
      this.props.onChange(cloneEvt)
    }
  }
  selectedDropdownItem() {
    const emptyVal = {props: {value: '', children: ''}}
    if (this.props.children.length === 0)
      return emptyVal
    let selVal = ''
    if (this.state.selectedOption)
      selVal = this.state.selectedOption
    else if (this.props.defaultValue)
      selVal = this.props.defaultValue
    else
      selVal = this.props.children[0].props.value
    const sel = this.props.children.filter(c => c.props.value === selVal)
    return sel.length? sel[0]:emptyVal
  }
  handleToggleClick(evt) {
    this.setState({opened: !this.state.opened})
  }
  handleBlur(evt) {
    const isDescendant = (parent, child) => {
     let node = child.parentNode
     while (node != null) {
       if (node === parent)
        return true;
       node = node.parentNode
     }
     return false
    }
    evt.persist()
    const focusedEl = evt.relatedTarget // element where the focus went
    const dropdownEl = ReactDOM.findDOMNode(this._el)
    if (focusedEl === null || !isDescendant(dropdownEl, focusedEl)) {
      this.setState({opened: false})
    }
  }
  render() {
    const selectedDropdownItem = this.selectedDropdownItem()
    const cssClasses = classNames({
      "dropdown": true,
      "open": this.state.opened
    })
    return (
      <div className={cssClasses} ref={(c) => this._el = c}>
        <div
          className="btn btn-block btn-default dropdown-toggle"
          onClick={this.handleToggleClick}
          onBlur={this.handleBlur}>
          <span className="dropdown-text">
            {selectedDropdownItem.props.children}
          </span>
          &nbsp;<span className="caret"></span>
        </div>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          {this.options(selectedDropdownItem)}
        </ul>
      </div>
    )
  }
}
