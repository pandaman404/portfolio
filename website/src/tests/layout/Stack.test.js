import { Stack } from '../../layout';
import { shallow } from 'enzyme';

describe('Tests in <Stack />', () => {
	test('should render <Stack /> ', () => {
		const wrapper = shallow(<Stack />);
		expect(wrapper).toMatchSnapshot();
	});
});
