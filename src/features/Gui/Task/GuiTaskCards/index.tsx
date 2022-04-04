import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import TaskCard from 'features/Task/TaskCard';

import styles from './styles.module.css';
import { ILabel } from 'models/Label';

const title1 = 'Сваггер - что это и как с ним работать? Погуглить, пообщаться с Ромой, придумать инструмент по просмотру для фронтов и для других персонажей';
const title2 = 'Задача';
const description1 = 'Могут возникнуть сложности в известном направлении';
const description2 = 'Описаниеце';
const priorityColor1 = '#E8B96A';
const priorityColor2 = '#69D2FF';
const labels: Array<ILabel> = [
	{
		backgroundColor: '#EDF9FF',
		color: '#69D2FF',
		text: 'Очень длинная метка',
	},
	{
		backgroundColor: '#FFEFEA',
		color: '#FF6235',
		text: 'Метка моя',
	},
	{
		backgroundColor: '#C1E0D166',
		color: '#04A863',
		text: 'Привет!',
	},
];

const GuiTaskCards = () => {
	return (
		<GuiSection title="Карточка задачи">
			<GuiSectionBlock title="Expanded size">
				<div className={styles.row}>
					<div className={styles.column}>
						<TaskCard
							title={title1}
							description={description1}
							estimation={40}
							priorityColor={priorityColor1}
							labels={labels}
							difficulty="Трудно очень"
						/>
					</div>

					<div className={styles.column}>
						<TaskCard
							title={title2}
							priorityColor={priorityColor2}
						/>
					</div>
				</div>
			</GuiSectionBlock>

			<GuiSectionBlock title="Fix size">
				<div className={styles.row}>
					<div className={styles.column}>
						<TaskCard
							title={title1}
							description={description2}
							estimation={40}
							priorityColor={priorityColor1}
							labels={labels}
							difficulty="Трудно очень"
							fixedSize
						/>
					</div>

					<div className={styles.column}>
						<TaskCard
							title={title2}
							priorityColor={priorityColor2}
							fixedSize
						/>
					</div>
				</div>
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiTaskCards;
