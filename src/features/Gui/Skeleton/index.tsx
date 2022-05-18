import GuiSection from 'features/Gui/GuiSection';
import GuiSectionBlock from 'features/Gui/GuiSection/GuiSectionBlock';
import BaseSkeleton from 'components/Skeleton/Base';

import styles from './styles.module.css';

const GuiSkeleton = () => {
	return (
		<GuiSection title="Скелетон">
			<GuiSectionBlock title="компонент Status">
        <div className={styles.wrapper}>
          <BaseSkeleton className={styles.text} />

          <BaseSkeleton className={styles.avatar} variant='circular' />
        </div>
			</GuiSectionBlock>
		</GuiSection>
	);
};

export default GuiSkeleton;