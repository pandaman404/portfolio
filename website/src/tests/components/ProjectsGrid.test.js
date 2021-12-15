import { ProjectsGrid } from '../../components';
import { shallow } from 'enzyme';
import { frontendMentorProjects } from '../../data/projects';

describe('Tests in <ProjectsGrid />', () => {
	const props = {
		title: 'Frontend Mentor',
		subtitle: 'Hola Mundo...',
		projects: frontendMentorProjects,
		fadeUp: 'default',
	};

	const wrapper = shallow(<ProjectsGrid {...props} />);

	test('should render <ProjectsGrid /> ', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
