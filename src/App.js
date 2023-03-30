import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/login";
import DashboardPage from "./Pages/Dashboard/dashboard";
import UserDetailsPage from "./Pages/UserDetails/userDetails";
import styles from './utils/index.module.scss';

function App() {
	return (
		<div className={styles["App"]}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/user-details/:id" element={<UserDetailsPage />} />
				</Routes>
			</BrowserRouter>

			<div className={styles['filter__container']}>
				<div className={styles['filter__sect']}>
					<p>Organisation</p>
					<div className={styles['select__input']}>
						<select>
							<option>Select</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
				</div>

				<div className={styles['filter__sect']}>
					<p>Username</p>
					<div className={styles['select__input']}>
						<input type={'text'} placeholder='User' />
					</div>
				</div>

				<div className={styles['filter__sect']}>
					<p>Email</p>
					<div className={styles['select__input']}>
						<input type={'email'} placeholder='Email' />
					</div>
				</div>

				<div className={styles['filter__sect']}>
					<p>Date</p>
					<div className={styles['select__input']}>
						<input type={'date'} placeholder='Date' />
					</div>
				</div>

				<div className={styles['filter__sect']}>
					<p>Phone Number</p>
					<div className={styles['select__input']}>
						<input type={'number'} placeholder='Phone Number' />
					</div>
				</div>

				<div className={styles['filter__sect']}>
					<p>Select</p>
					<div className={styles['select__input']}>
						<select value={'Select'}>
							<option>Select</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
