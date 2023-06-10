import ChooseSide from '../../components/HomePage/ChooseSide/ChooseSide'

import styles from './HomePage.module.css'

const HomePage = () => {
	return (
		<div>
			<h1 className={styles.title}>Choose your side</h1>
			<ChooseSide/>
		</div>
	)
}

export default HomePage