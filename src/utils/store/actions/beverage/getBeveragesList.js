import actionsName from 'utils/store/actionsName';

const getBeveragesList = () => async dispatch =>
  new Promise((resolve, reject) => {
    dispatch({
      type: actionsName.GET_BEVERAGES_LIST_PENDING,
    });

    fetch('http://localhost:3100/api/v2/beverage/0/5')
      .then(res => {
        if (res.status !== 200) {
          throw new Error();
        }

        return res;
      })
      .then(res => res.json())
      .then(basics => {
        dispatch({
          type: actionsName.GET_BEVERAGES_LIST_FULFILLED,
          payload: { basics },
        });
        resolve(basics);
      })
      .catch(err => {
        dispatch({
          type: actionsName.GET_BEVERAGES_LIST_REJECTED,
        });
        reject();
      });
  });

export default getBeveragesList;
