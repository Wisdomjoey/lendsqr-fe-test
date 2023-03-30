import { useState } from "react";
import Brand from "../../Components/Brand/brand";
import styles from "./styles.module.scss";
import login from "../../assets/images/pablo-sign-in 1.png";
import { useNavigate } from "react-router";

function LoginPage() {
	const [focused, setfocus] = useState(false);
	const [focused1, setfocus1] = useState(false);
	const [show, setshow] = useState(false);
	const navigate = useNavigate();

	return (
		<div className={styles["login__container"]}>
			<div className={styles["left__content"]}>
				<Brand />

				<div className={styles["left__img"]}>
					<img src={login} alt="Login" />
				</div>
			</div>

			<div className={styles["right__content"]}>
				<div className={styles["form__container"]}>
					<form className={styles["form"]} action="">
						<h1>Welcome!</h1>

						<p>Enter details to login.</p>

						<div
							className={`${styles["input__container"]} ${
								focused ? styles["active"] : undefined
							}`}
						>
							<input
								name="email"
								placeholder="Email"
								type="email"
								onFocus={() => setfocus(true)}
								onBlur={() => setfocus(false)}
							/>
						</div>

						<div
							className={`${styles["input__container"]} ${
								focused1 ? styles["active"] : undefined
							}`}
						>
							<input
								name="password"
								placeholder="Password"
								type={show ? "text" : "password"}
								onFocus={() => setfocus1(true)}
								onBlur={() => setfocus1(false)}
							/>

							<span
								className={styles["form__span"]}
								onClick={() => setshow((prev) => !prev)}
							>
								show
							</span>
						</div>

						<span className={styles["form__span"]}>forgot password?</span>

						<button
							className={styles["form__button"]}
							onClick={() => navigate("/dashboard")}
						>
							log in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
