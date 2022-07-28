import React from "react"
import Card from "../Card/Card"

import Single from "../../assets/single.png"
import Double from "../../assets/double.png"
import Triple from "../../assets/triple.png"

function Offers(){
	return(
		<div className="bg-white grid justify-center gap-10 py-10 sm:grid-cols-3 mx-auto">
			<Card {...{
				bg:"bg-white",
				title:"Single user",
				image:Single,
				price:145,
				storage:20,
				useAllowed:1,
				send:20
			}} />
			<Card {...{
				bg:"bg-gray-100",
				title:"Triple user",
				image:Triple,
				price:533,
				storage:100,
				useAllowed:3,
				send:100
			}}/>
			<Card {...{
				bg:"bg-white",
				title:"Double user",
				image:Double,
				price:350,
				storage:50,
				useAllowed:2,
				send:50
			}}/>
		</div>
		)
}

export default Offers;