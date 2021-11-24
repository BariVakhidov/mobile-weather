import {Nullable} from "../../types";

export namespace AppTypes {
    export interface UserAuthParams {
        email: string;
        password: string;
    }

    export interface UserInfo {
        uid: string;
        email: string | null;
        emailVerified: boolean;
        phoneNumber: string | null;
        photoURL: string | null;
        displayName: string | null;
    }

    export interface AppState {
        user: Nullable<UserInfo>;
        isFetching: boolean;
        error: Nullable<string>;
        initialized: boolean;
    }

    export type EditableInfo = Omit<UserInfo, "uid" | "emailVerified" | "phoneNumber">;
}
