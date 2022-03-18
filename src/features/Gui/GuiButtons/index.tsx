import GuiSection from "features/Gui/GuiSection";
import GuiSectionBlock from "features/Gui/GuiSection/GuiSectionBlock";
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import CrossIcon from 'icons/CrossIcon';


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

      <GuiSectionBlock title="компонент IconButton, variant contained">
        <IconButton variant="contained" size="small">
          <CrossIcon size="small" />
        </IconButton>

        <IconButton variant="contained" size="small" disabled>
          <CrossIcon size="small" />
        </IconButton>

        <IconButton variant="contained" size="medium">
          <CrossIcon size="medium" />
        </IconButton>

        <IconButton variant="contained" size="medium" disabled>
          <CrossIcon size="medium" />
        </IconButton>

        <IconButton variant="contained" size="big">
          <CrossIcon size="big" />
        </IconButton>

        <IconButton variant="contained" size="big" disabled>
          <CrossIcon size="big" />
        </IconButton>

        <IconButton variant="contained" size="large">
          <CrossIcon size="large" />
        </IconButton>

        <IconButton variant="contained" size="large" disabled>
          <CrossIcon size="large" />
        </IconButton>
      </GuiSectionBlock>
    </GuiSection>
  )
}

export default GuiButtons;