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


// export interface CountryIface {
//     countryId: number,
//     countryName: string,
//     formalName: string,
//     isoAlpha3Code: string,
//     latestRecordedPopulation: number,
//     continent: string, 
//     region: string,
//     subregion: string

// }