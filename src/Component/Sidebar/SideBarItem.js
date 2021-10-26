import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarItem = ({ name, link, icon }) => {
  return (
    <li>
      <NavLink activeClassName="active" exact to={link}>
        {icon}
        {name}
      </NavLink>
    </li>
  );
};

export default SideBarItem;
