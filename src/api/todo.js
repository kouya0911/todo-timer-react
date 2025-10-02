import axios from 'axios'; 

const ENDPOINT_URL = 'https://todo-timer-react-production.up.railway.app/todos'; 

const todoApi = { 
    async getAll() { 
        const result = await axios.get(ENDPOINT_URL); 
        return result.data; 
    }, 
    async post(todo) { 
        const result = await axios.post(ENDPOINT_URL, todo); 
        return result.data; 
    },
    async delete(todo) { 
        const result = await axios.delete(`${ENDPOINT_URL}/${todo.id}`);
        return result.data; 
    }, 
    async patch(todo) { 
        const result = await axios.put(`${ENDPOINT_URL}/${todo.id}`, todo); 
        return result.data; 
    }
} 

export default todoApi;

// import axios from 'axios'; 

// const ENDPOINT_URL = 'http://localhost:3001/todos'; 

// const todoApi = { 
//     // async getAll() {
//     //     const res = await axios.get(ENDPOINT_URL);
//     //     return res.data.map(t => ({ ...t, id: String(t.id) }))},
//     async getAll() { const result = await axios.get(ENDPOINT_URL); 
//         return result.data; }, 
//     async post(todo) { const result = await axios.post(ENDPOINT_URL, todo); 
//         return result.data; },
//      async delete(todo) { const result = await axios.delete(ENDPOINT_URL + '/' + todo.id);
//         return result.data; }, 
//     async patch(todo) { const result = await axios.put(ENDPOINT_URL + '/' + todo.id, todo); 
//             return result.data; }
// } 

// export default todoApi;