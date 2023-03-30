import styles from "./styles.module.scss";
import styles1 from "../../utils/index.module.scss";
import menu from "../../assets/images/Group-menu.png";
import right from "../../assets/images/right.png";
import left from "../../assets/images/left.png";
import elipsis from "../../assets/images/Vector (4).png";
import eye from "../../assets/images/Group (1).png";
import add from "../../assets/images/np_user_2995993_000000 1.png";
import remove from "../../assets/images/np_delete-friend_3248001_000000 1.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export type Users = {
	accountBalance: string;
	accountNumber: string;
	createdAt: string;
	education: {
		duration: string;
		employmentStatus: string;
		level: string;
		loanRepayment: string;
		monthlyIncome: string[];
		sector: string;
		officeEmail: string;
	};
	email: string;
	guarantor: {
		address: string;
		firstName: string;
		gender: string;
		lastName: string;
		phoneNumber: string;
	};
	id: string;
	lastActiveDate: string;
	orgName: string;
	phoneNumber: string;
	profile: {
		address: string;
		avatar: string;
		bvn: string;
		currency: string;
		firstName: string;
		gender: string;
		lastName: string;
		phoneNumber: string;
	};
	socials: {
		facebook: string;
		instagram: string;
		twitter: string;
	};
	userName: string;
};

function Table({ data }: { data: Users[] }) {
	const [filter, setfilter] = useState(false);
	const [start, setstart] = useState(0);
	const [length, setlength] = useState(10);
	const [pag2, setpag2] = useState("2");
	const [pag3, setpag3] = useState("3");
	const [pag4, setpag4] = useState("...");
	const navigate = useNavigate();

	const toggleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const ele = document.querySelector(`.${styles["menu__open"]}`);
		const app = document.querySelector(`.${styles1["App"]}`);

		if (ele !== null) {
			ele?.remove();
		} else {
			const newEle = document.createElement("div");
			var htmld = "";

			[
				[eye, "View Details"],
				[remove, "Blacklist User"],
				[add, "Activate User"],
			].map(
				(e) =>
					(htmld +=
						`<div class='` +
						styles["menu__tile"] +
						`'>
							<img src='` +
						e[0] +
						`' alt='tile' /><p>` +
						e[1] +
						`</p>
						</div>`)
			);

			newEle.innerHTML = htmld;

			newEle.classList.add(styles["menu__open"]);
			newEle.style.top = `${e.clientY + 30 + window.scrollY}px`;
			newEle.style.left = `${e.clientX - 150}px`;

			app!.appendChild(newEle);

			const tile = document.querySelector(
				`.${styles["menu__tile"]}`
			) as HTMLElement;
			const ele1 = document.querySelector(`.${styles["menu__open"]}`);

			tile?.addEventListener("click", () => {
				ele1?.remove();
				navigate(`/user-details/${(e.target as HTMLElement).id}`);
			});
			// console.log(app)
		}
	};

	const removeMenu = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
	) => {
		if ((e.target as HTMLElement).className !== "elipses") {
			const ele = document.querySelector(`.${styles["menu__open"]}`);

			if (ele !== null) {
				ele?.remove();
			}
		}

		// if (
		// 	(e.target as HTMLElement).className !== "menu" &&
		// 	(e.target as HTMLElement).className !== styles1["filter__container"]
		// ) {
		// 	const ele = document.querySelector(
		// 		`.${styles1["filter__container"]}`
		// 	) as HTMLElement;

		// 	ele.style.display = "none";
		// 	setfilter(false);
		// }
	};

	const toggleFilter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const ele = document.querySelector(
			`.${styles1["filter__container"]}`
		) as HTMLElement;

		if (filter) {
			ele.style.display = "none";
			setfilter(false);
		} else {
			ele.style.display = "flex";
			ele.style.top = `${e.clientY + 30 + window.scrollY}px`;
			ele.style.left = `${e.clientX - 270 / 2}px`;
			setfilter(true);
		}
	};

	const toggleArrow = () => {
		const leftC = document.querySelector(
			`.${styles["left__caret"]}`
		) as HTMLElement;
		const rightC = document.querySelector(
			`.${styles["right__caret"]}`
		) as HTMLElement;
		const numbers = document.querySelector(`.${styles["numbers"]}`);

		if (numbers?.firstElementChild?.classList.contains(styles["pag__active"])) {
			leftC.style.opacity = "0.5";
		} else {
			leftC.style.opacity = "1";
		}

		if (numbers?.lastElementChild?.classList.contains(styles["pag__active"])) {
			rightC.style.opacity = "0.5";
		} else {
			rightC.style.opacity = "1";
		}

		if (
			!numbers?.firstElementChild?.classList.contains(styles["pag__active"]) &&
			!numbers?.lastElementChild?.classList.contains(styles["pag__active"])
		) {
			leftC.style.opacity = "1";
			rightC.style.opacity = "1";
		}
	};

	const moveLeft = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const numbers = document.querySelector(`.${styles["numbers"]}`);

		if (numbers?.firstElementChild?.classList.contains(styles["pag__active"]))
			return;

		const active = document.querySelector(`.${styles["pag__active"]}`);
		const page = parseInt(active!.textContent!);
		const newL = Math.ceil(data.length / length);

		setstart((page - 2) * length);

		if (page - 1 <= 2 || page - 1 >= newL - 1 || newL <= 5) {
			active?.previousElementSibling?.classList.add(`${styles["pag__active"]}`);
			active?.classList.remove(`${styles["pag__active"]}`);
			console.log("first");

			if (newL > 5 && page - 1 === 3) {
				setpag2("2");
				setpag3("3");
				setpag4(`...`);
			}
		} else if (newL > 5 && page - 1 === newL - 2) {
			numbers?.children[2].classList.add(`${styles["pag__active"]}`);
			active?.classList.remove(`${styles["pag__active"]}`);

			setpag2("...");
			setpag3(`${newL - 2}`);
			setpag4("...");
		} else {
			setpag3(`${page - 1}`);

			if (page - 1 === 3) {
				setpag2("2");
			}
		}

		toggleArrow();
	};

	const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const content = e.target as HTMLElement;
		if (content.textContent! === "...") return;

		const number = parseInt(content.textContent!);
		const active = document.querySelector(`.${styles["pag__active"]}`);

		setstart((number - 1) * length);

		active?.classList.remove(`${styles["pag__active"]}`);
		content.classList.add(`${styles["pag__active"]}`);

		toggleArrow();
	};

	const moveRight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const numbers = document.querySelector(`.${styles["numbers"]}`);

		if (numbers?.lastElementChild?.classList.contains(styles["pag__active"]))
			return;

		const active = document.querySelector(`.${styles["pag__active"]}`);
		const page = parseInt(active!.textContent!);
		const newL = Math.ceil(data.length / length);

		setstart(page * length);

		if (page + 1 <= 3 || page + 1 >= newL - 1 || newL <= 5) {
			active?.nextElementSibling?.classList.add(`${styles["pag__active"]}`);
			active?.classList.remove(`${styles["pag__active"]}`);

			if (newL > 5 && page + 1 === newL - 1) {
				setpag2("2");
				setpag3("...");
				setpag4(`${newL - 1}`);
			}
		} else if (newL > 5 && page + 1 === 4) {
			setpag2("...");
			setpag3("4");
		} else {
			setpag3(`${page + 1}`);
		}

		toggleArrow();
	};

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setlength(parseInt(e.target.value));

		const currentL = Math.ceil(data.length / parseInt(e.target.value));
		const active = document.querySelector(`.${styles["pag__active"]}`);
		const numbers = document.querySelector(`.${styles["numbers"]}`);
		const numL = numbers!.children.length;

		if (currentL > 5) {
			if (numL <= 5) {
				active?.classList.remove(`${styles["pag__active"]}`);

				if (parseInt(active!.textContent!) > 3) {
					numbers?.children[2].classList.add(`${styles["pag__active"]}`);

					setpag2("...");
					setpag3(active!.textContent!);
					setpag4("...");
				} else {
					switch (numL) {
						case 3:
							setpag3("3");
							setpag4("...");
							break;

						default:
							setpag2("2");
							setpag3("3");
							setpag4("...");
							break;
					}

					numbers?.children[parseInt(active!.textContent!) - 1].classList.add(
						`${styles["pag__active"]}`
					);
				}
			} else {
				if (pag2 === "...") {
					if (parseInt(pag3) >= currentL) {
						numbers?.lastElementChild?.classList.add(
							`${styles["pag__active"]}`
						);
						active?.classList.remove(`${styles["pag__active"]}`);

						setpag2("2");
						setpag3("...");
						setpag4(`${currentL - 1}`);
					} else if (parseInt(pag3) === currentL - 1) {
						active?.nextElementSibling?.classList.add(
							`${styles["pag__active"]}`
						);
						active?.classList.remove(`${styles["pag__active"]}`);

						setpag2("2");
						setpag3("...");
						setpag4(`${currentL - 1}`);
					}
				} else if (pag4 !== "...") {
					setpag3("...");
					setpag4(`${currentL - 1}`);
				}
			}
		} else {
			const content = parseInt(active?.textContent!);
			active?.classList.remove(`${styles["pag__active"]}`);

			if (content >= currentL) {
				numbers?.lastElementChild?.classList.add(`${styles["pag__active"]}`);
			} else {
				numbers?.children[content - 1].classList.add(
					`${styles["pag__active"]}`
				);
			}

			switch (currentL) {
				case 5:
					setpag2("2");
					setpag3("3");
					setpag4("4");
					break;

				case 4:
					setpag2("2");
					setpag3("3");
					setpag4("0");
					break;

				case 3:
					setpag2("2");
					setpag3("0");
					setpag4("0");
					break;

				default:
					setpag2("0");
					setpag3("0");
					setpag4("0");
					break;
			}
		}
	};

	useEffect(() => {
		toggleArrow();
		const ele = document.querySelector(`.${styles["table__container"]}`);
		const ele1 = document.querySelector(
			`.${styles["table__content"]}`
		) as HTMLElement;

		const width = ele?.getBoundingClientRect().width;
		ele1.style.width = `${width}px`;

		if (Math.ceil(data.length / length) > 5) {
			setpag2("2");
			setpag3("3");
			setpag4("...");
		} else {
			switch (Math.ceil(data.length / length)) {
				case 5:
					setpag2("2");
					setpag3("3");
					setpag4("4");
					break;

				case 4:
					setpag2("2");
					setpag3("3");
					setpag4("0");
					break;
				case 3:
					setpag2("2");
					setpag3("0");
					setpag4("0");
					break;

				default:
					setpag2("0");
					setpag3("0");
					setpag4("0");
					break;
			}
		}

		const bdy = document.getElementsByTagName("body")[0];

		bdy.addEventListener("click", removeMenu);

		window.addEventListener("resize", (e) => {
			const ele = document.querySelector(`.${styles["table__container"]}`);
			const ele1 = document.querySelector(
				`.${styles["table__content"]}`
			) as HTMLElement;

			const width = ele?.getBoundingClientRect().width;
			ele1.style.width = `${width}px`;
		});

		return () => {
			bdy.removeEventListener("click", removeMenu);
			window.removeEventListener("resize", (e) => {
				const ele = document.querySelector(`.${styles["table__container"]}`);
				const ele1 = document.querySelector(
					`.${styles["table__content"]}`
				) as HTMLElement;

				const width = ele?.getBoundingClientRect().width;
				ele1.style.width = `${width}px`;
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data.length, length]);

	return (
		<div className={styles["table__wrapper"]}>
			<div className={styles["table__container"]}>
				<div className={styles["table__content"]}>
					<table className={styles["table"]}>
						<thead>
							<tr>
								{[
									"organisation",
									"username",
									"email",
									"phone number",
									"date joined",
									"status",
								].map((e, ind) => {
									return (
										<th colSpan={ind === 2 || ind === 4 ? 3 : 3} key={ind}>
											<div className={styles["table__head"]}>
												<span>{e}</span>

												<img
													src={menu}
													className="menu"
													alt="menu"
													onClick={toggleFilter}
												/>
											</div>
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{[...data].splice(start, length).map((e, ind) => {
								const date = new Date(e.createdAt);
								const time = date.toString().slice(16, 21);

								return (
									<tr key={ind}>
										<td colSpan={3}>{e.orgName.split("-")[0]}</td>
										<td colSpan={3}>{e.userName}</td>
										<td colSpan={3}>{e.email}</td>
										<td colSpan={3}>{e.phoneNumber}</td>
										<td colSpan={3}>{`${date
											.toDateString()
											.slice(4)}, ${time} ${date
											.toLocaleTimeString()
											.slice(-2)}`}</td>
										<td colSpan={3}>
											<div className={styles["status"]}>
												<span>Active</span>

												<img
													className="elipses"
													id={e.id}
													src={elipsis}
													alt="elipsis"
													onClick={toggleMenu}
												/>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>

			<div className={styles["table__controller"]}>
				<div className={styles["table__filter"]}>
					<p>Showing</p>

					<select value={length} onChange={handleChange} name="filter" id="">
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={20}>20</option>
						<option value={35}>35</option>
						<option value={50}>50</option>
					</select>

					<p>out of {data.length}</p>
				</div>

				<div className={styles["table__pagination"]}>
					<div className={styles["left__caret"]} onClick={moveLeft}>
						<img src={left} alt="caret" />
					</div>

					<div className={styles["numbers"]}>
						<span onClick={handleMove} className={styles["pag__active"]}>
							1
						</span>
						{pag2 !== "0" && <span onClick={handleMove}>{pag2}</span>}
						{pag3 !== "0" && <span onClick={handleMove}>{pag3}</span>}
						{pag4 !== "0" && <span onClick={handleMove}>{pag4}</span>}
						{Math.ceil(data.length / length) >= 2 && (
							<span onClick={handleMove}>
								{Math.ceil(data.length / length)}
							</span>
						)}
					</div>

					<div className={styles["right__caret"]} onClick={moveRight}>
						<img src={right} alt="caret" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Table;
