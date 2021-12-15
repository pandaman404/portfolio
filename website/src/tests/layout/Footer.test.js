import { Footer } from '../../layout';
import { shallow } from 'enzyme';

describe('Tests in <Footer />', () => {
	test('should render <Footer /> ', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper).toMatchSnapshot();
	});
});
