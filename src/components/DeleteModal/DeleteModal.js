import React from "react";
import "./deleteModal.css";
// import { myFilter } from "../../utils/utils";

export default function DeleteModal({ items, id }) {
	// const item = myFilter(items, id);
	// const type = item.constant;

	return (
		<div className="delete-modal">
			<div>
				<button style={{ marginLeft: "1em" }}> מחק חודשית </button>
				<button> מחק שנתית </button>
			</div>
		</div>
	);
}
