import LinkTile, { Props } from "../LinkTile/linkTile";
import styles from "./styles.module.scss";

type Head = {
	head: string;
	data: Props[];
};

function TileGroup(props: Head) {
	return (
		<div className={styles["group__container"]}>
			<span>{props.head}</span>

			{props.data.map((e, ind) => {
				return (
					<LinkTile
						key={ind}
						prefix={e.prefix}
						text={e.text}
						showSuffix={false}
						active={e.active}
					/>
				);
			})}
		</div>
	);
}

export default TileGroup;
