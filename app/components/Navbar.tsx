import { FC } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Shopify
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
