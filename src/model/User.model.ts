export interface GeoModel {
    lat: string,
    lng: string
}

export interface AddressModel {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoModel
}

export interface CompanyModel {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
}

export interface UserModel {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressModel,
    phone: string,
    website: string,
    company: CompanyModel
}