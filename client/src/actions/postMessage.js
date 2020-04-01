import api from './api';

export const ACTION_TYPES = {
	CREATE: 'CREATE',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
	FETCH_ALL: 'FETCH_ALL'
};

/* export const fetchAll = () => {
	// fetch all get request
	return (dispatch) => {
		api
			.postMessage()
			.fetchAll()
			.then((result) => {
				console.log(result);
				dispatch({
					type: ACTION_TYPES.FETCH_ALL,
					payload: result.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
 */

export const fetchAll = () => (dispatch) => {
	api
		.postMessage()
		.fetchAll()
		.then((res) => {
			// console.log(res);
			dispatch({
				type: ACTION_TYPES.FETCH_ALL,
				payload: res.data
			});
		})
		.catch((err) => console.log('err from here :', err));
};

export const create = (data, onSuccess) => (dispatch) => {
	api
		.postMessage()
		.create(data)
		.then((res) => {
			dispatch({
				type: ACTION_TYPES.CREATE,
				payload: res.data
			});
			onSuccess();
		})
		.catch((err) => console.log(err));
};

export const update = (id, data, onSuccess) => (dispatch) => {
	api
		.postMessage()
		.update(id, data)
		.then((res) => {
			dispatch({
				type: ACTION_TYPES.UPDATE,
				payload: res.data
			});
			onSuccess();
		})
		.catch((err) => console.log(err));
};

export const Delete = (id, onSuccess) => (dispatch) => {
	api
		.postMessage()
		.delete(id)
		.then((res) => {
			dispatch({
				type: ACTION_TYPES.DELETE,
				payload: id
			});
			onSuccess();
		})
		.catch((err) => console.log(err));
};
