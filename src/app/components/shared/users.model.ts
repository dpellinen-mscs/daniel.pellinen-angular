export class User {
    constructor(
        public userId: number,
        public userName: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public displayName: string,
        public createdOnDate: string,
        public lastModifiedByUserID: number,
        public lastModifiedOnDate: string,
    ) {}
}