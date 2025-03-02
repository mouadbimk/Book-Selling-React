import { axiosClient } from "../axios";

const BookApi = {
    get: async (name)=>{
        return await axiosClient.get(`api/books/${name}`)
    },
    all: async ()=>{
        return await axiosClient.get('api/books');
    },
    create: async(payload) => {
        return await axiosClient.post(`api/admin/books`,payload);
    },
    update: async(id,payload)=>{
        return await axiosClient.post(`api/admin/books/${id}`,{...payload,id});
    },
    delete: async(id)=>{
        return await axiosClient.delete(`api/admin/books/${id}`);
    }
}
export default BookApi;