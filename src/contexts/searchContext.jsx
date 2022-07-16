import { createContext, useState } from 'react';

export const SearchContext = createContext({
	searchData: null,
	setSearchData: () => null,
});

export const SearchProvider = ({ children }) => {
	const [searchData, setSearchData] = useState(null);
	const value = { searchData, setSearchData };

	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
};
