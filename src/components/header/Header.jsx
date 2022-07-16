import { useContext } from 'react';
import LogoIcon from '../../assets/logo.png';
import { ThemeContext } from '../../contexts/themeContext';

import './Header.styles.jsx';
import {
	HeaderContainer,
	HeaderTitle,
	InnerHeaderContainer,
	Input,
	Logo,
	Slider,
	Switch,
} from './Header.styles.jsx';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<HeaderContainer>
			<InnerHeaderContainer>
				<Logo src={LogoIcon} alt='Logo' />
				<HeaderTitle>Weather Now</HeaderTitle>
			</InnerHeaderContainer>
			<InnerHeaderContainer>
				<Switch>
					<Input type='checkbox' value={theme} onChange={changeTheme} />
					<Slider></Slider>
				</Switch>
			</InnerHeaderContainer>
		</HeaderContainer>
	);
};

export default Header;
