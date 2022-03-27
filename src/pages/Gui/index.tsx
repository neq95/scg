import React from 'react';

import GuiInputs from 'features/Gui/GuiInputs';
import GuiButtons from 'features/Gui/GuiButtons';
import GuiCheckboxes from 'features/Gui/Checkboxes';
import GuiTaskCards from 'features/Gui/Task/GuiTaskCards';
import GuiStatus from 'features/Gui/GuiStatus';
import GuiLabels from 'features/Gui/GuiLabels';

import styles from './styles.module.css';

const GuiPage : React.FC = () => {
	return (
		<div>
			<div className={styles.section}>
				<GuiInputs />
			</div>

			<div className={styles.section}>
				<GuiButtons />
			</div>

			<div className={styles.section}>
				<GuiCheckboxes />
			</div>

			<div className={styles.section}>
				<GuiStatus />
			</div>

			<div className={styles.section}>
				<GuiLabels />
			</div>

			<div className={styles.section}>
				<GuiTaskCards />
			</div>	
		</div>
	);
};

export default GuiPage;