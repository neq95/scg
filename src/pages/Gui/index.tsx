import React from 'react';

import GuiInputs from 'features/Gui/GuiInputs';
import GuiButtons from 'features/Gui/GuiButtons';
import GuiCheckboxes from 'features/Gui/Checkboxes';
import GuiTaskCards from 'features/Gui/Task/GuiTaskCards';
import GuiStatus from 'features/Gui/GuiStatus';

const GuiPage : React.FC = () => {
	return (
		<div>
			<GuiInputs />

			<GuiButtons />

			<GuiCheckboxes />

			<GuiStatus />

			<GuiTaskCards />
		</div>
	);
};

export default GuiPage;