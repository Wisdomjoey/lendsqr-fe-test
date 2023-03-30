import styles from "./styles.module.scss";
import styles1 from "../Sidebar/styles.module.scss";
import { useState } from "react";

type Style = {
	style?: React.CSSProperties | undefined;
};

function Brand({
	style = { alignSelf: "flex-start", justifySelf: "flex-start" },
}: Style) {
	const [open, setopen] = useState(false);

	const toggleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (window.screen.width <= 959) {
			const sidebar = document.querySelector(
				`.${styles1["sidebar"]}`
			) as HTMLElement;
			const links = document.querySelector(
				`.${styles1["sidebar__links"]}`
			) as HTMLElement;

			if (open) {
				links.style.opacity = "0";

				setTimeout(() => {
					sidebar.style.width = "0px";
					setopen(false);
				}, 100);
			} else {
				sidebar.style.width = "250px";

				setTimeout(() => {
					links.style.opacity = "1";
					setopen(true);
				}, 300);
			}
		}
	};

	return (
		<div className={styles["brand"]} style={style} onClick={toggleMenu}>
			<img src={require("../../assets/images/Union.png")} alt="Login" />

			<span className={styles["brand__txt"]}>lendsqr</span>
		</div>
	);
}

export default Brand;
