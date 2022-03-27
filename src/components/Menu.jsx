import { NavLink } from 'react-router-dom';

const Menu = ({ title, menuItems }) => {
  return (
    <div className="menuContainer">
      <p className="title">{title}</p>
      <ul>
        {menuItems?.map((item) => {
          const { id, icon, name, path } = item;

          return (
            <li key={id}>
              <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                <i>{icon}</i>
                <span>{name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export { Menu };
