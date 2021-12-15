import { Projects } from '../../layout';
import { shallow } from 'enzyme';

describe('Tests in <Projects />', () => {
	test('should render <Projects /> ', () => {
		const wrapper = shallow(<Projects />);
		expect(wrapper).toMatchSnapshot();
	});
});
