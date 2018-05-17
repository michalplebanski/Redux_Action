import uuid from "uuid";

const ADD_COMMENT = "ADD COMMENT";
const EDIT_COMMENT = "EDIT COMMENT";
const DELETE_COMMENT = "DELETE COMMENT";
const THUMB_UP = "THUMB UP";
const THUMB_DOWN = "THUMB DOWN";

// ADD COMMENT
const addComment = text => {
	return {
		type: ADD_COMMENT,
		id: uuid.v4(),
		text
	};
};
const boundAddComment = text => dispatch(addComment(text));

// EDIT COMMENT
const editComment = (text, id) => {
	return {
		type: EDIT_COMMENT,
		id,
		text
	};
};
const boundEditComment = (text, id) => dispatch(editComment(text, id));

//DELETE COMMENT
const deleteComment = id => {
	return {
		type: DELETE_COMMENT,
		id
	};
};
const boundDeleteComment = id => dispatch(deleteComment(id));

//THUMB UP
const thumbUp = id => {
	return {
		type: THUMB_UP,
		id
	};
};
const boundThumbUp = id => dispatch(thumbUp(id));

//THUMB DOWN
const thumbDown = id => {
	return {
		type: THUMB_DOWN,
		id
	};
};
const boundThumbDown = id => dispatch(thumbDown(id));
