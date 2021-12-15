import { ProjectCard } from '../../components';
import { shallow } from 'enzyme';
import { frontendMentorProjects } from '../../data/projects';

describe('Tests in <ProjectCard />', () => {
	const props = {
		...frontendMentorProjects[0],
		index: 1,
		length: 3,
		fadeUp: 'default',
	};
	const wrapper = shallow(<ProjectCard {...props} />);

	test('should render <ProjectCard /> ', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
