import api from '../utils/api';

// TODO Testing
import utils from '../tests/utils';
import trashData from '../tests/fixtures/trash';

export default {
  getAllMapTrashes: async () => {
    return await utils.simulateApiCall(3000).then(() => trashData.mapTrashes);
  },
  createNewTrash: async newTrash => {
    const formData = new FormData();
    formData.append('base64Picture', newTrash.base64);
    formData.append('location', JSON.stringify(newTrash.location));

    // return api.post(`/trash/create`, formData);
    return await utils.simulateApiCall(3000).then(() => {});
  },
  getTrashDetails: async trashId => {
    console.log('Get trash details for: ', trashId);
    return await utils.simulateApiCall(1000).then(() => trashData.trashDetails);
  },
  voteForTrash: async trashId => {
    console.log('Vote for: ', trashId);
    return await utils.simulateApiCall(500).then(() => {});
  },
  updateTrashStatus: async (trashId, newStatus) => {
    console.log('Update trash status', trashId, newStatus);
    return await utils.simulateApiCall(3000).then(() => {});
  },
};
