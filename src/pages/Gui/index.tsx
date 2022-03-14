import React from 'react';

import GuiInputs from 'features/Gui/GuiInputs';
import GuiButtons from 'features/Gui/GuiButtons';

const GuiPage : React.FC = () => {
  return (
    <div>
      <GuiInputs />

      <GuiButtons />
    </div>
  )
};

export default GuiPage;