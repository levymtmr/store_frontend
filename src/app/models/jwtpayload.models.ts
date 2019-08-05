export class JWTPayload {
    constructor(
        public user_id: number,
        public username: string,
        public email: string,
        public exp: number) {}
}