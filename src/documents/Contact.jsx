import React from "react";

const Contact = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/empty-blackboard-surrounded-by-shopping-bags_23-2148288236.jpg?w=900&t=st=1700502157~exp=1700502757~hmac=4830d0de770d44a9223171bbc509adc5cac019b0ab7bd77f1beeb8d15d16c7a8')", // replace with the actual path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>CONTACT</h1>
      <h4>
        CONTACT: 9123456780
        <br />
        E-MAIL: favshop@gmail.com
        <br />
        INSTAGRAM: https://www.instagram.com/
        <br />
        FACEBOOK: https://www.facebook.com/
      </h4>
    </div>
  );
};

export default Contact;
