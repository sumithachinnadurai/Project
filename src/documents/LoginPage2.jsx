/*import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0); // Initialize value state
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // Map the pages to their corresponding index in the Tabs
  const pageToTabIndex = {
    Products: 0,
    Services: 1,
    AboutUs: 2,
    ContactUs: 3,
  };

  // Map the index in Tabs to the corresponding page
  const tabIndexToPage = {
    0: "Products",
    1: "Services",
    2: "AboutUs",
    3: "ContactUs",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <img src="/logo192.png" alt="" width="50px" />
          {isMatch ? (
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
              Shoppee
            </Typography>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={handleChange}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <Link to="/login">
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button sx={{ marginLeft: "10px" }} variant="contained">
                  SignUp
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      {!isMatch && (
        /* Render content based on the selected page */
/* <div style={{ padding: "10px" }}>
          <Typography variant="h4">
            {`Content for ${tabIndexToPage[value]} page `}
          </Typography>
          {/* Add your page-specific content here */ //}
//</div>
// )}
/* </React.Fragment>
  );
};
export default Header;
*/
import React, { useState } from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Loginpage2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
    navigate("/home");
  };

  return (
    <Container
      maxWidth="100%"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "teal",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={8}
        style={{ padding: "30px", width: "600px", height: "300px" }}
      >
        <Typography variant="h6" align="center">
          LOGIN
        </Typography>

        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
export default Loginpage2;
