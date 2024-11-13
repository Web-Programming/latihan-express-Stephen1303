export interface HousingLocation {
    //Interface bisa menggambarkan kolom" dari collection (model dari monggoDB)
    id: number,
    name : string,
    city: string,
    state: string,
    photo: string,
    availableUnit: number,
    wifi: boolean,
    laundry: boolean
}
