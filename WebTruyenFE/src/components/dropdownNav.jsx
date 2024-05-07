export const DropdownNav = ({content, list}) => {
  return (
    <div class="dropdown">
      <button class="dropbtn">
        {content}
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content text-black">
        {list.map(content => <div className="hover:bg-blue-700 hover:text-white p-3">{content}</div>)}
      </div>
    </div>
  );
};
