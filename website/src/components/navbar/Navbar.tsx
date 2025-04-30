import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Menu } from "./Menu";

export function Navbar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const isMenuOpen = Boolean(anchorEl);
	const icon = isMenuOpen ? <CloseIcon /> : <MenuIcon />;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "white" }}>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						color: "black",
					}}
				>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleMenuToggle}
					>
						{icon}
					</IconButton>
					<Menu
						open={isMenuOpen}
						anchorEl={anchorEl}
						onClose={handleMenuClose}
					/>
					<Button
						sx={{ display: "flex", justifyContent: "right" }}
						color="inherit"
					>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
