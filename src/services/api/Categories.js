import { axiosClient } from "../axios"

const categoryApi = {
    get: async (name)=>{
        return await axiosClient.get(`api/category/${name}`);
    },
    all: async ()=>{
        return await axiosClient.get('api/categories');
    },
    create: async (payload) =>{
        return await axiosClient.post('api/admin/categories',payload);
    },
    update: async (id,payload)=>{
        return await axiosClient.post(`api/admin/categories/${id}`,{...payload,id});
    },
    delete: async (id) => {
        return await axiosClient.delete(`api/admin/categories/${id}`);
    }

}
export default categoryApi;