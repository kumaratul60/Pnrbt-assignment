import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  state = {
    menuItems: [
      { id: 0, name: 'Profile', route: 'profile' },
      { id: 1, name: 'Posts', route: 'posts' },
      { id: 2, name: 'Gallery', route: 'gallery' },
      { id: 3, name: 'ToDo', route: 'todo' }
    ]
  };

  componentDidMount() {}

  render() {
    const pageR = window.location.href.split('/').pop();

    return (
      <div className="sidebar-cont">
        {this.state.menuItems.map(item => (
          <Link
            to={this.props.matchUrl + '/' + item.route}
            className={'sidebar-item ' + (pageR === item.route ? 'active' : '')}
            key={item.id}
          >
            <span className="item-title">{item.name}</span>
            {pageR === item.route ? (
              <span className="active-icon">*
               </span>
            ) : null}
          </Link>
        ))}
      </div>
    );
  }
}
