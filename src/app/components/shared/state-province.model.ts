export class StateProvince {
    constructor(
        public stateProvinceId: number,
        public stateProvinceCode: string,
        public stateProvinceName: string,
        public countryId: number,
        public salesTerritory: string,
        public latestRecordedPopulation: number)
        {}
}