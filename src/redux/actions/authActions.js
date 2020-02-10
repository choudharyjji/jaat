import { db } from '../../config/fbConfig';

export const signOut = () => {
    return (dispatch, getState) => {
        db.auth().signOut().then(() => {
            dispatch({
                type: 'SIGNOUT_SUCCESS'
            })

        }).catch(err => {
            console.log("some error with the signOut, in action");
            console.error(err);
            //dispatch(actionError(err));
        });

    }
}