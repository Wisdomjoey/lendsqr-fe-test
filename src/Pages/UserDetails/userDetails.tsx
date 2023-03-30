import styles from "./styles.module.scss";
import styles1 from "../Dashboard/styles.module.scss";
import Navbar from "../../Components/Navbar/navbar";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner/spinner";
import back from "../../assets/images/np_back_3007750_000000 1.png";
import star from "../../assets/images/np_star_1171151_000000 1.png";
import star1 from "../../assets/images/np_star_1208084_000000 1.png";
import { Users } from "../../Components/Table/table";
import { useNavigate, useParams } from "react-router";
import InfoSection, { Info } from "../../Components/InfoSection/infoSection";

function UserDetailsPage() {
	const [loading, setloading] = useState(true);
	const [details, setdetails] = useState({} as Users);
	const [data, setdata] = useState([] as Info[]);
	const navigate = useNavigate();
	const param = useParams();

	const fetchUsers = async () => {
		await fetch(
			`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${param.id}`
		).then(async (res) => {
			const data = await res.json();

			setdetails(data);
			setloading(false);
		});
	};

	const toggleTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const active = document.querySelector(
			`.${styles["active__tab"]}`
		) as HTMLElement;
		const ele = e.target as HTMLElement;
		console.log(e)

		active.classList.remove(styles["active__tab"]);

		if (ele.tagName === "P") {
			ele.parentElement?.classList.add(styles["active__tab"]);
		} else {
			ele.classList.add(styles["active__tab"]);
		}
	};

	useEffect(() => {
		const localData = localStorage.getItem("users");

		if (localData !== null && JSON.parse(localData).length > 0) {
			const detail: Users = JSON.parse(localData).filter(
				(val: Users) => val.id === param.id
			)[0];

			const section: Info[] = [
				{
					header: "Personal Information",
					info: [
						{
							head: "full name",
							info: `${detail.profile.firstName} ${detail.profile.lastName}`,
						},
						{
							head: "phone number",
							info: `${detail.profile.phoneNumber}`,
						},
						{
							head: "email address",
							info: `${detail.email}`,
						},
						{
							head: "bvn",
							info: `${detail.profile.bvn}`,
						},
						{
							head: "gender",
							info: `${detail.profile.gender}`,
						},
						{
							head: "marital status",
							info: `Single`,
						},
						{
							head: "children",
							info: `none`,
						},
						{
							head: "type of residence",
							info: `Parent's House`,
						},
					],
				},
				{
					header: "Education nd Employment",
					info: [
						{
							head: "level of education",
							info: `${detail.education.level}`,
						},
						{
							head: "employment status",
							info: `${detail.education.employmentStatus}`,
						},
						{
							head: "sector of employment",
							info: `${detail.education.sector}`,
						},
						{
							head: "duration of employment",
							info: `${detail.education.duration}`,
						},
						{
							head: "office email",
							info: `${detail.education.officeEmail}`,
						},
						{
							head: "monthly income",
							info: `${detail.education.monthlyIncome[0]}-${detail.education.monthlyIncome[1]}`,
						},
						{
							head: "loan repayment",
							info: `${detail.education.loanRepayment}`,
						},
					],
				},
				{
					header: "Socials",
					info: [
						{
							head: "twitter",
							info: `${detail.socials.twitter}`,
						},
						{
							head: "facebook",
							info: `${detail.socials.facebook}`,
						},
						{
							head: "instagram",
							info: `${detail.socials.instagram}`,
						},
					],
				},
				{
					header: "Guarantor",
					info: [
						{
							head: "full name",
							info: `${detail.guarantor.firstName} ${detail.guarantor.lastName}`,
						},
						{
							head: "phone number",
							info: `${detail.guarantor.phoneNumber}`,
						},
						{
							head: "email address",
							info: `${detail.email}`,
						},
						{
							head: "relationship",
							info: `Sister`,
						},
					],
				},
			];

			setdata(section);

			setdetails(detail);
			setloading(false);
		} else {
			fetchUsers();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [param.id]);

	return (
		<div className={styles1["dashboard__container"]}>
			<Navbar />

			<div className={styles1["content__container"]}>
				<Sidebar />

				<div className={styles1["main__content"]}>
					<div className={styles1["sidebar__shadow"]}></div>

					{loading ? (
						<Spinner />
					) : (
						<div className={styles1["main__container"]}>
							<div className={styles["navigation"]} onClick={() => navigate('/dashboard')}>
								<img src={back} alt="back" />

								<p>Back to users</p>
							</div>

							<span>User Details {param.id}</span>

							<div className={styles["details__header"]}>
								<div className={styles["header__info"]}>
									<div className={styles["personal"]}>
										<div className={styles["profile__photo"]}>
											<img src={details.profile.avatar} alt="profile" />
										</div>

										<div className={styles["profile__data"]}>
											<span>
												{details.profile.firstName} {details.profile.lastName}
											</span>

											<p>{details.accountNumber}</p>
										</div>
									</div>

									<div className={styles["user__account"]}>
										<div className={styles["user__tier"]}>
											<p>User's tier</p>

											<div className={styles["tier"]}>
												<img src={star1} alt="" />
												<img src={star} alt="" />
												<img src={star} alt="" />
											</div>
										</div>

										<div className={styles["account"]}>
											<span>
												₦
												{details.accountBalance.replace(
													/\B(?=(\d{3})+(?!\d))/g,
													","
												)}
											</span>

											<p>{details.profile.bvn}</p>
										</div>
									</div>
								</div>

								<div className={styles["header__tabs"]}>
									{[
										"General Details",
										"Documents",
										"Bank Details",
										"Loans",
										"Savings",
										"App and System",
									].map((e, ind) => {
										return (
											<div
												key={ind}
												className={`${styles["tab"]} ${
													ind === 0 ? styles["active__tab"] : ""
												}`}
												onClick={toggleTab}
											>
												<p>{e}</p>
											</div>
										);
									})}
								</div>
							</div>

							<div className={styles["information__container"]}>
								{data.map((e, ind) => {
									return (
										<InfoSection key={ind} info={e.info} header={e.header} />
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default UserDetailsPage;
