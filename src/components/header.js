import React from "react";
const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row p-2 mb-2">
        <div
          className="col mx-2 upper"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1563941966509-ecab980be1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80)",
          }}
        ></div>

        <div
          className="col mx-2 upper"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577012325504-110f8df056c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80)",
          }}
        ></div>

        <div
          className="col mx-2 upper"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1586620316616-499accf86291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
