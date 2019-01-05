import axios from "axios"

export default {
    //Users API
    getUsers: () => axios.get("api/users"),
    saveUser: (userData) => axios.post("/api/users", userData),
    getUser: (userId) => axios.get(`/api/users/${userId}`),
    updateUser: (userId, userData) => axios.put(`api/users/${userId}`, userData),
    deleteUser: (userId) => axios.delete(`api/users/${userId}`),

    //Stats API
    getStats: () => axios.get("api/stats"),
    saveStats: (statData) => axios.post("/api/stats", statData),
    getStats: (statID) => axios.get(`/api/stats/${statID}`),

    //Games API
    getGames: () => axios.get("api/games"),
    saveGames: (gameData) => axios.post("/api/games", gameData),
    getGames: (gameId) => axios.get(`/api/games/${gameId}`),
}