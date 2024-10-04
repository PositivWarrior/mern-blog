export default function About() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="max-w-2xl mx-auto p-3 text-center">
				<div>
					<h1 className="text-3xl font-semibold text-center my-7">
						About MarBlogger
					</h1>
					<div className="text-md text-gray-500 flex flex-col gap-6">
						<p>
							MarBlogger is my first independent project. I
							created it to share my experience and journey
							through coding. I hope You will enjoy it.
						</p>

						<p>
							This blog is built using Next.js, React, and
							Tailwind CSS. I am learning as I go along. If you
							have any questions or need help, feel free to ask.
							I'm always here to help.
						</p>

						<p>
							If you want to see more of my projects or contact
							me, feel free to reach out. I'm always open to
							discussing new ideas and learning more.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
