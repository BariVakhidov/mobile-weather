import {AppTypes} from "../redux/app/types";

export namespace FirebaseTypes {
    export interface SendMessagePayload {
        chatId: string;
        message: string;
        user: Omit<AppTypes.UserInfo, "email" | "emailVerified" | "phoneNumber">
    }
}
