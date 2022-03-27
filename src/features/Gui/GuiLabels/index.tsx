import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import Label from 'components/Label';

const GuiLabels = () => {
	return (
		<GuiSection title="Метки">
			<GuiSectionBlock title="компонент Label">
				<Label backgroundColor="#EAE8FF" color="#4734FF">
          Дизайн
        </Label>
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiLabels;
