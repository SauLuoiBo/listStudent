import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globals";
import theme from "../themes/default";

const Theme = ({ children }) => (
	<ThemeProvider theme={theme.light}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
);

export default Theme;
