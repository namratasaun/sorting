const withCheck = (Component) => {
  return function (props) {
    return (
      <div>
        <Component {...props} valie={23} />
      </div>
    );
  };
};

export default withCheck;
