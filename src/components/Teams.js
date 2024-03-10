import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import teams from "../assets/teams.png";
import Card from "./Card";



const Teams = () => {
	const professor = [
		{
			imgUrl: "https://iitbhu.ac.in/contents/met/img/people/met_faculty_joysurya.jpg",
			name: "Joysurya Basu",
			designation: "Professor Incharge",
			linkedinLink: "https://www.linkedin.com/in/joysurya-basu-486a3399/",
			emailId: "jbasu.met@iitbhu.ac.in",
		},
	];

	const heads = [{
		imgUrl: "https://media.licdn.com/dms/image/C4D03AQG1t-Y7k0Qc8w/profile-displayphoto-shrink_800_800/0/1657519247079?e=1715817600&v=beta&t=RVOve-mKNY-qTdNxrIw4R24tt-OkR85CJnxxatmPJPM",
		name: "Kshitij Kumar Dubey",
		designation: "Co-Convener",
		linkedinLink: "https://www.linkedin.com/in/kshitij-dubey/",
		emailId: "kshitijkumar.dubey.met20@itbhu.ac.in",
	},
	{
		imgUrl: "",
		name: "Rajdeep Chatterjee",
		designation: "Convener",
		linkedinLink: "https://www.linkedin.com/in/rajdeep-chatterjee-854a9721b/",
		emailId: "rajdeep.chatterjee.met20@itbhu.ac.in",
	},
	{
		imgUrl: "https://media.licdn.com/dms/image/D4D03AQG82oG6jjBlCw/profile-displayphoto-shrink_200_200/0/1676396068406?e=1715817600&v=beta&t=FUJscs90nGU9YldjwH_Aao5KDWbx3L_HxUVtiVn7ElM",
		name: "Ayush Bharsakle",
		designation: "Co-Convener",
		linkedinLink: "https://www.linkedin.com/in/ayush-bharsakle-4b4643200/",
		emailId: "ayush.abharsakle.met20@itbhu.ac.in",
	},
	];
	const core = [
		
	];
	return (
		<>
			<Navbar />
			<section className="py-0 md:py-0 btn w-[90vw] h-full m-auto rounded-xl text-white">
				<div className="container p-6 mx-auto space-y-8">
					<div className="w-[90%] h-full m-auto grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
						{/* First card */}
						<article className="flex flex-col rounded-xl">
							<div className="flex flex-col flex-1 p-0 text-center">
								<p className="m-auto text-[50px] sm:text-[75px] font-bold">
									Meet
									<br />
									Our Team
								</p>
							</div>
						</article>
						<article className="flex flex-col rounded-xl">
							<div className="flex flex-col flex-1 p-0 text-center ">
								<p className="m-auto text-[50px] sm:text-[75px] font-bold">
									<img src={teams} className="m-auto" alt="robot" />
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>
			<div className="flex flex-wrap gap-5 my-5 justify-center">
				{professor.map((member, i) => {
					return (
						<Card
							className="lg:w-1/5 sm:w-full md:w-1/2"
							key={i}
							imgUrl={member.imgUrl}
							name={member.name}
							designation={member.designation}
							linkedinLink={member.linkedinLink}
							emailId={member.emailId}
						/>
					);
				})}
			</div>
			<div className="flex flex-wrap gap-5 my-5 justify-center">
				{heads.map((member, i) => {
					return (
						<Card
							className="lg:w-1/5 sm:w-full md:w-1/2"
							key={i}
							imgUrl={member.imgUrl}
							name={member.name}
							designation={member.designation}
							linkedinLink={member.linkedinLink}
							emailId={member.emailId}
						/>
					);
				})}
			</div>
			{/* <div className="flex flex-wrap gap-5 my-5 justify-center">
				{core.map((member, i) => {
					return (
						<Card
							className="lg:w-1/5 sm:w-full md:w-1/2"
							key={i}
							imgUrl={member.imgUrl}
							name={member.name}
							designation={member.designation}
							instagramLink={member.instagramLink}
						/>
					);
				})}
			</div> */}
			<Footer />
		</>
	);
};

export default Teams;
