import GuiSection from "features/Gui/GuiSection";
import GuiSectionBlock from "features/Gui/GuiSection/GuiSectionBlock";
import Button from 'components/Button';


const GuiButtons = () => {
  return (
    <GuiSection title="Кнопки">
      <GuiSectionBlock title="Обычные">
        <Button>
          Это моя кнопка
        </Button>
      </GuiSectionBlock>
    </GuiSection>
  )
}

export default GuiButtons;