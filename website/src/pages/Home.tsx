import { ThemeProvider } from "@emotion/react";
import { LandingPage } from "../components/landingPage/LandingPage";
import { Navbar } from "../components/navbar/Navbar";
import { theme } from "../components/theme/theme";

export default function Home() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Navbar />
				<LandingPage />
			</ThemeProvider>
		</div>
	);
}
