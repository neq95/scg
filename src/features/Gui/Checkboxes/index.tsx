import {useState} from 'react';

import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import Checkbox from 'components/Checkbox';

const GuiCheckboxes = () => {
	const [one, setOne] = useState(false);
	const [two, setTwo] = useState(false);
	const [three, setThree] = useState(true);
	const [four, setFour] = useState(true);
  
	return (
		<GuiSection title="Чекбоксы">
			<GuiSectionBlock title="компонент Checkbox">
				<Checkbox label="Label" checked={one} onChange={(e) => setOne(e.target.checked)} />

				<Checkbox label="Label" checked={two} disabled onChange={(e) => setTwo(e.target.checked)} />

				<Checkbox label="Label" checked={three} onChange={(e) => setThree(e.target.checked)} />

				<Checkbox label="Label" checked={four} disabled onChange={(e) => setFour(e.target.checked)} />
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiCheckboxes;