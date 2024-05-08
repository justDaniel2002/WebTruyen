import PropTypes from 'prop-types';
export const DropdownNav = ({content, list}) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        {content}
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content text-black">
        {list.map((content,index) => (<div key={index} className="hover:bg-blue-700 hover:text-white p-3 border-gray-300 border-[1px]">{content}</div>))}
      </div>
    </div>
  );
};


DropdownNav.propTypes = {
  content: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired // Add PropTypes validation for the 'list' prop
};
