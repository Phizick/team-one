export const checkResponse = (data) => {
     if(data.status === 200) {
        return data.data 
    } 
    if(!data.ok) {
        throw new Error("Ответ сети был не ok.");
    }
}
