import { Hamburger } from '../../components';
import { mount } from 'enzyme';
import { GlobalContext } from '../../contexts/globalContext';

describe('Tests in <Hamburger />', () => {
	let mobileNavIsOpen = false;
	const showMobileNav = jest.fn();

	const wrapper = mount(
		<GlobalContext.Provider value={{ mobileNavIsOpen, showMobileNav }}>
			<Hamburger />
		</GlobalContext.Provider>
	);

	test('should render <Hamburger /> ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should call "ShowMobileNav()"', () => {
		wrapper.find('button').prop('onClick')();
		expect(showMobileNav).toHaveBeenCalled();
	});

	test('if "mobileNavIsOpen" is true, should change the icon', () => {
		mobileNavIsOpen = true;

		const wrapper = mount(
			<GlobalContext.Provider value={{ mobileNavIsOpen, showMobileNav }}>
				<Hamburger />
			</GlobalContext.Provider>
		);

		expect(wrapper.find('MdClose').exists()).toBe(true);
	});
});
