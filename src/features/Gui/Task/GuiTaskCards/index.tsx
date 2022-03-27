import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import TaskCard from 'features/Task/TaskCard';

import styles from './styles.module.css';

const GuiTaskCards = () => {
	return (
		<GuiSection title="Кнопки">
			<GuiSectionBlock title="компонент TaskCard">
				<div className={styles.column}>
					<TaskCard />
				</div>
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiTaskCards;
