import "./Widget.scss";

const Widget = ({ type }) => {
  let data;
  let backgroundColor;

  switch (type) {
    case "toDo":
      data = {
        title: "To-do User Stories",
      };
      backgroundColor = '#949494'
      break;
    case "inProgress":
      data = {
        title: "In progress User Stories",
      };
      backgroundColor = '#eab73e'
      break;
    case "completed":
      data = {
        title: "Completed User Stories",
      };
      backgroundColor = '#4081ca'
      break;
    case "poAccepted":
      data = {
        title: "PO Accepted User Stories",
      };
      backgroundColor = '#479b5f'
      break;

    default:
      break;
  }

  return (
    <div className="widget" style={{backgroundColor}}>
      <span className="counter">203243</span>
      <span className="title">{data.title}</span>
    </div>
  );
};

export default Widget;
