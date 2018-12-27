import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.less';

class Tabbar extends Component {
  render() {
    let tabs = this.props.tabs;
    return (
      <ul className="tab-bar">
        {
          tabs.map(item => {
            return (
              <li
                className="tab-bar__item"
                key={item.key}>
                <NavLink to={item.href}>
                  <i className={`iconfont ${item.icon}`}></i>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

Tabbar.proptypes = {
  tabs: PropTypes.array
}

export default Tabbar;
