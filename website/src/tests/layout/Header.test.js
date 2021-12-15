import { Header } from '../../layout';
import { shallow } from 'enzyme';

describe('Tests in <Header />', () => {
	test('should render <Header /> ', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper).toMatchSnapshot();
	});
});
