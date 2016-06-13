import React, { Component, propTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import className from 'classnames'
import s from './Tabs.scss'

class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      classes: [s.home, s.dribbble , s.behance, s.linkedin, s.twitter, s.instagram, s.vimeo],
      prevClasses: [s.prehome, s.predribbble , s.prebehance, s.prelinkedin, s.pretwitter, s.preinstagram, s.previmeo],
      prevSelected: [0]
    }
  }

  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index,
      prevSelected: this.state.prevSelected.concat([index])
    });
  }

  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? s.active : '');
      return (
        <li className={s.li} key={index}>
          <a className={className(s.link, activeClass)} onClick={this.handleClick.bind(this, index)}><FontAwesome name={child.props.label} /></a>
        </li>
      );
    }
    return (
      <div>
        <a key={0} className={s.goback} onClick={this.handleClick.bind(this, 0)}><FontAwesome name='arrow-left' /></a>
        <ul className={s.ul}>
          {this.props.children.map(labels.bind(this))}
        </ul>
      </div>
    );
  }
  _renderContent() {
    return (
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div className={className(s.wrap, this.state.prevClasses[this.state.prevSelected[this.state.prevSelected.length - 2]])}>
        <div className={className(s.content, this.state.classes[this.state.selected])}>
          {this._renderContent()}
          {this._renderTitles()}
        </div>
      </div>
    );
  }
}

export default Tabs