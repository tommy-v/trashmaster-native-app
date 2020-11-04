export const TRASH_GET_ALL_REQUESTED = 'TRASH_GET_ALL_REQUESTED';
export const TRASH_GET_ALL_SUCCEEDED = 'TRASH_GET_ALL_SUCCEEDED';
export const TRASH_GET_ALL_FAILED = 'TRASH_GET_ALL_FAILED';

// export const TRASH_ADD_NEW_REQUESTED = 'TRASH_ADD_NEW_REQUESTED';
// export const TRASH_ADD_NEW_SUCCEEDED = 'TRASH_ADD_NEW_SUCCEEDED';
// export const TRASH_ADD_NEW_FAILED = 'TRASH_ADD_NEW_FAILED';

export function getAllTrashes() {
  return {
    type: TRASH_GET_ALL_REQUESTED,
    payload: null,
  };
}

// export function getTrashDetails(idTrash) {
//   return {
//     type: ,
//     payload: {
//       idTrash
//     }
//   }
// }
