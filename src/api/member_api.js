import axiosClient from "./axiosClient";

const MemberApi = {
    getAll: (params) => {
        const url = '';
        const api = axiosClient.get(url, { params });
        return api;
    },

    getMemberLimit: (params) => {
        const url = '/member.php';
        const api = axiosClient.get(url, { params });
        return api;
    },

    getMemberInfo: (params) => {
        const url = '/memberinfo.php';
        const api = axiosClient.get(url, { params });
        return api;
    },

    postMemberAdd: (params) => {
        const url = '/member-add.php';
        const api = axiosClient.get(url, { params });
        return api
    }
}
export default MemberApi;