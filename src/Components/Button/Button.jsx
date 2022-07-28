import React from "react"

function Button({info}){
	return(
		<button className={"w-40 h-10 rounded-md font-bold "+info}>Get started</button>
	)
}
export default Button;