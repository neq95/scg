import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import Status from 'components/Status';

import { StatusEnum } from 'models/Status';

const GuiStatus = () => {
	return (
		<GuiSection title="Статусы">
			<GuiSectionBlock title="компонент Status">
				<Status value={StatusEnum.SUCCESS} />

        <Status value={StatusEnum.FAIL} />

				<Status value={StatusEnum.IDLE} />
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiStatus;
