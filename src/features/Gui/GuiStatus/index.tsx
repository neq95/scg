import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import Status from 'components/Status';

const GuiStatus = () => {
	return (
		<GuiSection title="Статусы">
			<GuiSectionBlock title="компонент Status">
				<Status value="success" />

        <Status value="fail" />
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiStatus;
