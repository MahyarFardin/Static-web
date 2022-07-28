import React from "react"
import Button from "../Button/Button"

function NewsLetter(){
	return(
		<div className="text-white grid sm:grid-cols-3 py-20 justify-center sm:px-20">
			<div className="mb-4 sm:col-span-2">
				<h1 className="font-bold text-xl  sm:text-3xl">Want tips & tricks to optimize your flow?</h1>
				<p className="text-sm sm:text-xl">Sign up to our newsletter and stay up to date.</p>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col lg:flex-row items-center">
					<input type="email" className="p-3 h-10 rounded" placeholder="Enter email"/>
					<Button info={"mx-auto bg-green-400 text-black my-4"}/>
				</div>
				<p>We care bout the protection of your data. Read our{' '}
            	<span className='text-green-400'>Privacy Policy.</span></p>
			</div>
		</div>
	)
}

export default NewsLetter;