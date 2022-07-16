import { createContext, useState } from 'react';

export const ThemeContext = createContext({
	theme: null,
	setTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');
	const value = { theme, setTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
