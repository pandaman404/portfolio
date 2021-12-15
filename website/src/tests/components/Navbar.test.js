import { Navbar } from '../../components';
import { shallow } from 'enzyme';

describe('Tests in <Navbar />', () => {
	test('should render <Navbar /> ', () => {
		const wrapper = shallow(<Navbar />);
		expect(wrapper).toMatchSnapshot();
	});
});
