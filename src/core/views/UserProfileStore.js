import {observable} from "mobx";
import axios from "axios";

class UserProfileStore {
  @observable userProfile = {
    contact_no: '',
    id: '',
    resource_uri: '',
    org: {
      id: '',
      org_name: '',
      resource_uri: ''
    },
    user: {
      date_joined: '',
      email: '',
      first_name: '',
      id: '',
      is_active: '',
      is_staff: '',
      is_superuser: '',
      last_login: '',
      last_name: '',
      password: '',
      resource_uri: '',
      username: ''
    }
  }

  fetchUserProfile() {
    axios
      .get(`/core/api/v1/userprofile/2/`)
      .then(res => {
        this.userProfile = res.data
      });
  }

}

const userProfileStore = new UserProfileStore();
export default userProfileStore;