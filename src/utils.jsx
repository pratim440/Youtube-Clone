import { NavLink } from "react-router-dom";
import "./utils.css";

const getTime = (time) => {
  let publishTime = new Date(time);
  let date;
  if (new Date().getUTCFullYear() - publishTime.getUTCFullYear() < 1) {
    if (new Date().getUTCMonth() - publishTime.getUTCMonth() < 1) {
      if (new Date().getUTCDay() - publishTime.getUTCDay() < 1) {
        if (new Date().getHours() - publishTime.getHours() < 1) {
          if (new Date().getMinutes() - publishTime.getMinutes() < 1) {
            date = `${
              new Date().getSeconds() - publishTime.getSeconds()
            } seconds ago`;
          } else {
            date = `${
              new Date().getMinutes() - publishTime.getMinutes()
            } minutes ago`;
          }
        } else {
          date = `${new Date().getHours() - publishTime.getHours()} hours ago`;
        }
      } else {
        date = `${new Date().getUTCDay() - publishTime.getUTCDay()} days ago`;
      }
    } else {
      date = `${
        new Date().getUTCMonth() - publishTime.getUTCMonth()
      } months ago`;
    }
  } else {
    date = `${
      new Date().getUTCFullYear() - publishTime.getUTCFullYear()
    } years ago`;
  }
  return date;
};

const ToggleNav = (props) => {
  return (
    <NavLink
      exact
      activeClassName="fixed_link_active"
      className="fixed_link"
      to={props.path}
    >
      <div className="individual_item">
        <props.icon className="fixed_icon" />
        <p>{props.name}</p>
      </div>
    </NavLink>
  );
};

export default getTime;
export { ToggleNav };
