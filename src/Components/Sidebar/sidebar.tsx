import { data1, data2, data3 } from "../../utils/global_data";
import LinkTile from "../LinkTile/linkTile";
import TileGroup from "../TileGroup/tileGroup";
import styles from "./styles.module.scss";
import suitcase from "../../assets/images/briefcase 1.png";
import home from "../../assets/images/home 1.png";

function Sidebar() {
	return (
		<div className={styles["sidebar"]}>
			<div className={styles["sidebar__links"]}>
				<br />

				<LinkTile
					prefix={suitcase}
					text={"Switch Organisation"}
					showSuffix={true}
					onlyText={true}
				/>

				<br />
				<br />

				<LinkTile prefix={home} text={"Dashboard"} active={false} />

				<TileGroup head={"customers"} data={data1} />

				<br />

				<TileGroup head={"businesses"} data={data2} />

				<br />

				<TileGroup head={"settings"} data={data3} />
			</div>
		</div>
	);
}

export default Sidebar;
