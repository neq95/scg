import React from 'react';
import { useState } from 'react';

import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import Input from 'components/Input';
import ExpandableTextarea from 'components/Textarea/Expandable';

const GuiInputs : React.FC = () => {
	const [nameInputValue, setNameInputValue] = useState('');
	const [text, setText] = useState('');

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

	return (
		<GuiSection title="Инпуты">
			<GuiSectionBlock title="Обычный инпут">
				<Input
					id="input-name"
					value={nameInputValue}
					label="Имя"
					placeholder="Введите ваше имя"
					helperText="Имя может состоять из буков, если вы человек"
					onChange={(event) => setNameInputValue(event.target.value)}
				/>
			</GuiSectionBlock>

			<GuiSectionBlock title="Инпут с ошибкой">
				<Input
					id="input-name-2"
					value={nameInputValue}
					label="Имя"
					placeholder="Введите ваше имя"
					helperText="Имя может состоять из буков, если вы человек"
					onChange={(event) => setNameInputValue(event.target.value)}
					error
					errorText="Неправильное имя у тебя"
				/>
			</GuiSectionBlock>

			<GuiSectionBlock title="компонент ExpandableTextarea">
        <div>
          <ExpandableTextarea value={text} onChange={onTextChange} />
        </div>
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiInputs;