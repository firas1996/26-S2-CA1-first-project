import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  //   console.log(userData);
  const loginHandler = () => {
    console.log(userData);
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <input
        type="text"
        value={userData.email}
        name="email"
        onChange={onChangeHandler}
      />
      <input
        type="text"
        value={userData.password}
        name="password"
        onChange={onChangeHandler}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
