export class FirebaseUserModel {
    profilePicsLocation: string;
    username: string;
    bio: string;
    latitude: string;
    longitude: string;
    contactLocation: string;
    viewsLocation: string;
    ownedProductsLocation: string;

    constructor(){
        this.profilePicsLocation = "";
        this.username = "";
        this.bio = "";
        this.latitude = "";
        this.longitude = "";
        this.contactLocation = "";
        this.viewsLocation = "";
        this.ownedProductsLocation = "";
    }
}