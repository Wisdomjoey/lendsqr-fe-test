import Brand from "../Brand/brand";
import styles from "./styles.module.scss";
import search from "../../assets/images/Vector (1).png";
import bell from "../../assets/images/Vector (2).png";
import caret from "../../assets/images/Vector (3).png";
import profile from "../../assets/images/client03.png";

function Navbar() {
	return (
		<nav className={styles["navbar__container"]}>
			<div className={styles["brand__container"]}>
				<Brand
					style={{
						alignSelf: "center",
						justifySelf: "center",
						transform: "scale(.82)",
					}}
				/>
			</div>

			<div className={styles["nav__content"]}>
				<div className={styles["left__nav"]}>
					<div className={styles["search"]}>
						<input type="text" placeholder="Search for anything" />

						<div className={styles["search__icon"]}>
							<img src={search} alt="search" />
						</div>
					</div>
				</div>

				<div className={styles["right__nav"]}>
					<p>Docs</p>

					<img src={bell} alt="bell" />

					<div className={styles["profile__container"]}>
						<div className={styles["profile"]}>
							<img src={profile} alt="profile" />
						</div>

						<div className={styles["profile__name"]}>
							<p>Jay Z</p>

							<img src={caret} alt="caret" />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
