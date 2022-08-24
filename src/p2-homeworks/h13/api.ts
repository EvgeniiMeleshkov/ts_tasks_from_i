import axios from 'axios';



export const hw13Api = {
    check: (checked: boolean) => {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: checked}, {})
    }
}






//без settings (withCredentials не нужен, API_KEY не нужен, мой сервер работает без этого)
