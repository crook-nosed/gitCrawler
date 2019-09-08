import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// originally UserItem was a class based component. But since it has no state, we are going to refactor it to functional component.
// class UserItem extends Component {
//   render() {
//     const { login, avatar_url, html_url } = this.props.user;
//     return (
//       <div className='card text-center'>
//         <img
//           src={avatar_url}
//           alt=''
//           className='round-img'
//           style={{ width: "60px" }}
//         />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className='btn btn-dark btn-sm my-1'>
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

const UserItem = props => {
  // Now props are passed in as an argument.
  // eslint-disable-next-line
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
