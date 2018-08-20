import React from 'react'

import contacts from '../../data/contacts.json'

console.log(contacts)

export default class Contacts extends React.Component {
  renderItems() {
    return contacts.map(({ label, href, icon }) => (
      <li className="contacts__item">
        {icon && <i className="contacts__icon">{icon}</i>}
        <a href={href} target="_blank">
          {label}
        </a>
      </li>
    ))
  }

  render() {
    return <ul className="contacts">{this.renderItems()}</ul>
  }
}
