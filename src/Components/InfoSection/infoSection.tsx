import styles from "./styles.module.scss";

export type Info = {
	info: {
		head: string;
		info: string;
	}[];
	header: string;
};

function InfoSection({ info, header }: Info) {
	return (
		<div className={styles["info__section"]}>
			<span>{header}</span>

			<div className={styles["main__info"]}>
				{info.map((e, ind) => {
					return (
						<div key={ind} className={styles["info__content"]}>
							<p>{e.head}</p>

							<span>{e.info}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default InfoSection;
