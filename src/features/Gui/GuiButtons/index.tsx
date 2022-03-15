import GuiSection from "features/Gui/GuiSection";
import GuiSectionBlock from "features/Gui/GuiSection/GuiSectionBlock";
import Button from 'components/Button';


const GuiButtons = () => {
  return (
    <GuiSection title="Кнопки">
      <GuiSectionBlock title="компонент Button, variant text">
        <Button size="small">
          Small
        </Button>

        <Button size="small" disabled>
          Small disabled
        </Button>

        <Button size="medium">
          Medium
        </Button>

        <Button size="medium" disabled>
          Medium disabled
        </Button>

        <Button size="big">
          Big
        </Button>

        <Button size="big" disabled>
          Big disabled
        </Button>

        <Button size="large">
          Large
        </Button>

        <Button size="large" disabled>
          Large disabled
        </Button>
      </GuiSectionBlock>

      <GuiSectionBlock title="компонент Button, variant contained">
        <Button variant="contained" size="small">
          Small
        </Button>

        <Button variant="contained" size="small" disabled>
          Small disabled
        </Button>

        <Button variant="contained" size="medium">
          Medium
        </Button>

        <Button variant="contained" size="medium" disabled>
          Medium disabled
        </Button>

        <Button variant="contained" size="big">
          Big
        </Button>

        <Button variant="contained" size="big" disabled>
          Big disabled
        </Button>

        <Button variant="contained" size="large">
          Large
        </Button>

        <Button variant="contained" size="large" disabled>
          Large disabled
        </Button>
      </GuiSectionBlock>
    </GuiSection>
  )
}

export default GuiButtons;