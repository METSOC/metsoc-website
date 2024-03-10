import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedIn from "../assets/linkedIn.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";
import { useSnackbar } from 'react-simple-snackbar';

const emailTo = (text) => {
	window.location = `mailto:${text}`;
}

export default function Card({
	imgUrl,
	name,
	designation,
	linkedinLink,
	emailId,
}) {
	return (
		<div>
			<div className="relative w-80 rounded-xl bg-white text-gray-700 shadow-md">
				<div className="flex justify-center">
					<img
						className="object-cover object-center mx-4 mt-4 h-64 w-64 rounded-full shadow-lg"
						src={imgUrl}
						alt="team"
					/>
				</div>
				<div className="p-6 text-center">
					<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
						{name}
					</h4>
					<p className="block font-sans text-base font-medium leading-relaxed text-transparent antialiased">
						{designation}
					</p>
				</div>
				<div className="flex justify-center gap-7 p-6 pt-2">
					<Link to={linkedinLink}>
						<img src={linkedIn} alt="" />
					</Link>
					<button onClick={()=>emailTo(emailId)}>
						<img src={mail} alt="" />
					</button>
				</div>
			</div>

		</div>
	);
}
