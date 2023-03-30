import styles from "./styles.module.scss";
import down from "../../assets/images/np_next_2236826_000000 2.png";

export type Props = {
	showSuffix?: boolean;
	prefix: string;
	text: string;
	active?: boolean;
	onlyText?: boolean;
};

function LinkTile({
	showSuffix = false,
	prefix,
	text,
	active = false,
	onlyText = false,
}: Props) {
	const handleActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const activeEle = document.querySelector(`.${styles["tile__active"]}`);

		activeEle?.classList.remove(styles["tile__active"]);
		e.currentTarget.classList.add(styles["tile__active"]);
	};

	return (
		<div
			className={`${styles["tile__container"]} ${
				active ? styles["tile__active"] : ""
			}`}
			onClick={handleActive}
		>
			<img src={prefix} alt="icon" />

			<p className={onlyText ? styles["ativep"] : ""}>{text}</p>

			{showSuffix && <img src={down} alt="dropdown" />}
		</div>
	);
}

export default LinkTile;
