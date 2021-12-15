import { MobileNavbar } from '../../components';
import { mount } from 'enzyme';
import { GlobalContext } from '../../contexts/globalContext';

describe('Tests in <MobileNavbar />', () => {
	let mobileNavIsOpen = true;
	const showMobileNav = jest.fn();

	const wrapper = mount(
		<GlobalContext.Provider value={{ mobileNavIsOpen, showMobileNav }}>
			<MobileNavbar />
		</GlobalContext.Provider>
	);

	test('should render <MobileNavbar /> ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should call showMobileNav() at clicking a <Link />', () => {
		wrapper.find('Link').at(0).prop('onClick')();
		expect(showMobileNav).toHaveBeenCalled();
	});

	test('if "mobileNavIsOpen" is false, should hide', () => {
		mobileNavIsOpen = false;

		const wrapper = mount(
			<GlobalContext.Provider value={{ mobileNavIsOpen, showMobileNav }}>
				<MobileNavbar />
			</GlobalContext.Provider>
		);

		expect(wrapper.find('nav').prop('className').includes('hide')).toBe(true);
	});
});
