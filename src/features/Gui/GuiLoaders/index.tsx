import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import DotsLoader from 'components/Loader/Dots';

const GuiLabels = () => {
	return (
		<GuiSection title="Лоадеры">
			<GuiSectionBlock title="компонент DotsLoader">
				<DotsLoader />
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiLabels;
