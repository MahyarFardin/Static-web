import React from "react"
import laptop from "../../assets/laptop.jpg"
import Button from "../Button/Button"

function Analytics(){
	return(
	    <div className="bg-white grid justify-center items-center md:grid-cols-2 font-bold text-black h-max w-full py-12">
	      	<div className="w-[400px] mx-auto">
	        	<img src={laptop} alt="laptop"/>
	       	</div>
	       	<div className="flex flex-col w-10/12 mx-auto mt-7">
	       		<h3 className="md:text-xl text-green-400 text-sm ">DATA ANALYTICS DASHBOARD</h3>
	       		<h1 className="md:text-2xl text-xl my-3">Manage Data Analytics Centrally</h1>
	       		<p className="md:text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
	            molestiae delectus culpa hic assumenda, voluptate reprehenderit
	            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
	            eveniet ex deserunt fuga?</p>


	       		<Button info={"md:mx-0 mx-auto my-6 bg-black text-green-400"} />
	       	</div>
	    </div>
     )
}

export default Analytics;