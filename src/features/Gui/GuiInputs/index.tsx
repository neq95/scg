import React from 'react';
import { useState } from 'react';

import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import Input from 'components/Input';

const GuiInputs : React.FC = () => {
  const [nameInputValue, setNameInputValue] = useState('');

  return (
    <GuiSection title="Селекты">
      <GuiSectionBlock title="Обычный селект">
        <Input
          value={nameInputValue}
          label="Имя"
          placeholder="Введите ваше имя"
          helperText="Имя может состоять из буков, если вы человек"
          onChange={(event) => setNameInputValue(event.target.value)}
        />
      </GuiSectionBlock>
    </GuiSection>
  )
}

export default GuiInputs;