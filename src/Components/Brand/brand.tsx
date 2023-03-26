import styles from "./styles.module.scss";

function Brand() {
	return (
		<div className={styles["brand"]}>
			<img src={require("../../assets/images/Union.png")} alt="Login" />

			<span className={styles["brand__txt"]}>lendsqr</span>
		</div>
	);
}

export default Brand;
