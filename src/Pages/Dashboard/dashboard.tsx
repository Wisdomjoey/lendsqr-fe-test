import Navbar from "../../Components/Navbar/navbar";
import styles from "./styles.module.scss";
import { stats } from "../../utils/global_data";
import StatsCard from "../../Components/StatsCard/statsCard";
import Table, { Users } from "../../Components/Table/table";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner/spinner";

function DashboardPage() {
	const [loading, setloading] = useState(true);
	const [users, setusers] = useState([] as Users[]);
	const [stat, setstat] = useState([] as number[]);

	const fetchUsers = async () => {
		await fetch(
			"https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
		)
			.then(async (res) => {
				const data = await res.json();

				setstat([
					data.length,
					2000,
					data.filter((val: Users) => val.education.loanRepayment !== "")
						.length,
					2000,
				]);

				setusers(data);

				return data;
			})
			.then((data) => {
				localStorage.setItem("users", JSON.stringify(data));
				setloading(false);
			});
	};

	useEffect(() => {
		const localData = localStorage.getItem("users");

		if (localData !== null && JSON.parse(localData).length > 0) {
			const data = JSON.parse(localData);

			setusers(data);
			setloading(false);
			setstat([
				data.length,
				2000,
				data.filter((val: Users) => val.education.loanRepayment !== "").length,
				2000,
			]);
			// console.log(users)
		} else {
			fetchUsers();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles["dashboard__container"]}>
			<Navbar />

			<div className={styles["content__container"]}>
				<Sidebar />

				<div className={styles["main__content"]}>
					<div className={styles["sidebar__shadow"]}></div>

					{loading ? (
						<Spinner />
					) : (
						<>
							<div className={styles["main__container"]}>
								<span>Users</span>

								<div className={styles["stats__content"]}>
									{stats.map((e, ind) => {
										return (
											<StatsCard
												key={ind}
												icon={e.icon}
												title={e.title}
												stats={stat[ind]}
											/>
										);
									})}
								</div>

								<Table data={users} />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default DashboardPage;
