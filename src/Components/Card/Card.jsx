import React from "react"
import Button from "../Button/Button"

function Card(props){
	return(
		<div className={"flex m-4 mx-auto flex-col text-center w-72 h-[450px] drop-shadow-xl rounded-lg hover:scale-105 duration-500 "+props.bg}>
			<img className="w-[100px] mx-auto mt-[-30px]" src={props.image} alt="user"/>
			<div className="mx-8 mt-10">
				<h1 className="font-bold text-2xl my-3">{props.title}</h1>
				<h1 className="font-bold text-xl my-3">${props.price}</h1>
				<h3 className="border-b-[1px] py-4">{props.storage} GB storage</h3>
				<h3 className="border-b-[1px] py-4">{props.userAllowed} user Allowed</h3>
				<h3 className="border-b-[1px] py-4">Send up to {props.send}</h3>
				<Button info={"text-black bg-green-400 mt-5"}/>
			</div>
		</div>
		)
}

export default Card;