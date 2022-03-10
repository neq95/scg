import React from 'react';

import Input from 'components/Input'
import { useState } from 'react';

const GuiInputs : React.FC = () => {
  const [nameInputValue, setNameInputValue] = useState('');

  return (
    <section>
      <Input
        value={nameInputValue}
        label='name'
        placeholder='Тут что-то написано  '
        helperText='nsdgsgwgfewfe'
        onChange={(event) => setNameInputValue(event.target.value)}
      />
    </section>
  )
}

export default GuiInputs;