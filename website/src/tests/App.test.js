import App from '../App';
import { mount } from 'enzyme';
import { GlobalContext } from '../contexts/globalContext';

describe('Tests in <App />', () => {
	let mobileNavIsOpen = false;
	const showMobileNav = jest.fn();

	const wrapper = mount(
		<GlobalContext.Provider value={{ mobileNavIsOpen, showMobileNav }}>
			<App />
		</GlobalContext.Provider>
	);

	test('should render <App /> ', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
