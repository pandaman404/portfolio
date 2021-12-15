import { About } from '../../layout';
import { shallow } from 'enzyme';

describe('Tests in <About />', () => {
	test('should render <About /> ', () => {
		const wrapper = shallow(<About />);
		expect(wrapper).toMatchSnapshot();
	});
});
