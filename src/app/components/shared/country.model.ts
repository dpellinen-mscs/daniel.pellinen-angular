export class Country {
    constructor(
        public countryId: number,
        public countryName: string,
        public formalName: string,
        public isoAlpha3Code: string,
        public latestRecordedPopulation: number,
        public continent: string, 
        public region: string,
        public subregion: string)
        {}
}