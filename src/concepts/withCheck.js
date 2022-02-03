const withCheck = (Component) => {
  return function (props) {
    return (
      <div>
        <Component {...props} valie={243} />
      </div>
    );
  };
};

export default withCheck;
