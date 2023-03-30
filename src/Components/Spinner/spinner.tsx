import { DotLoader } from "react-spinners";
import styles from "./styles.module.scss";

function Spinner() {
	return (
		<div className={styles["spinner__container"]}>
			<DotLoader color="#39CDCC" />
		</div>
	);
}

export default Spinner;
