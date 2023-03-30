import { data1, data2, data3 } from "../../utils/global_data";
import LinkTile from "../LinkTile/linkTile";
import TileGroup from "../TileGroup/tileGroup";
import styles from "./styles.module.scss";
import styles1 from "../Navbar/styles.module.scss";
import suitcase from "../../assets/images/briefcase 1.png";
import home from "../../assets/images/home 1.png";
import bell from "../../assets/images/Vector (2).png";
import caret from "../../assets/images/Vector (3).png";
import profile from "../../assets/images/client03.png";

function Sidebar() {
	return (
		<div className={styles["sidebar"]}>
			<div className={styles["sidebar__links"]}>
				<div className={styles["nav__right"]}>
					<div className={styles["notification"]}>
						<p>Docs</p>

						<img src={bell} alt="bell" />
					</div>

					<div className={styles["profile__con"]}>
						<div className={styles1["profile"]}>
							<img src={profile} alt="profile" />
						</div>

						<div className={styles1["profile__name"]}>
							<p>Jay Z</p>

							<img src={caret} alt="caret" />
						</div>
					</div>
				</div>
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
