import firebaseService from './firebase.service';

export default {
  userLogin: async (email: string, password: string): Promise<any> => {
    return firebaseService.auth(email, password);
  },
};
