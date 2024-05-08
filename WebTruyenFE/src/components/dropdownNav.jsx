export const DropdownNav = ({content, list}) => {
  return (
    <div className="dropdownav">
      <button className="dropbtn">
        {content}
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content text-black bg-neutral-200">
        {list.map((l,index) => <div key={index} className="hover:bg-blue-700 hover:text-white p-3"><a href={l?.link}>{l.content}</a></div>)}
      </div>
    </div>
  );
};
