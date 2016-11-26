export class Info {
    private _firstName: string;
    private _lastName: string;
    private _address: string;

    billingFirstName: string;
    billingLastName: string;
    billingAddress: string;
    cardNumber: string;
    zipCode: string;
    expMonth: number;
    expDate: number;
    cvv: number;
    isSame = true;

    get firstName(): string {
        return this._firstName;
    }

    set firstName(name: string) {
        this._firstName = name;
        if (this.isSame) {
            this.billingFirstName = name;
        }
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(name: string) {
        this._lastName = name;
        if (this.isSame) {
            this.billingLastName = name;
        }
    }

    get address(): string {
        return this._address;
    }

    set address(address: string) {
        this._address = address;
        if (this.isSame) {
            this.billingAddress = name;
        }
    }
}