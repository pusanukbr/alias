import $api from "../../http";

export default class RoomService {

    static async setting(id, lang, users, level, time) {
        return $api.post('/setting', { id, lang, users, level, time });
    }
}