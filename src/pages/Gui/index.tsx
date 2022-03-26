import React from 'react';

import GuiInputs from 'features/Gui/GuiInputs';
import GuiButtons from 'features/Gui/GuiButtons';
import GuiCheckboxes from 'features/Gui/Checkboxes';

const GuiPage : React.FC = () => {
	return (
		<div>
			<GuiInputs />

			<GuiButtons />

			<GuiCheckboxes />
		</div>
	);
};

export default GuiPage;