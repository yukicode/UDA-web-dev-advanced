export class Info {
    private _firstName: string;
    private _lastName: string;
    private _address: string;
    
    private _billingFirstName: string;
    private _billingLastName: string;
    private _billingAddress: string;
    
    cardNumber: string;
    zipCode: string;
    expMonth: number;
    expYear: number;
    cvv: number;
    isSame = true;

    get firstName(): string {
        return this._firstName;
    }

    set firstName(name: string) {
        this._firstName = name;
        if (this.isSame) {
            this._billingFirstName = name;
        }
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(name: string) {
        this._lastName = name;
        if (this.isSame) {
            this._billingLastName = name;
        }
    }

    get address(): string {
        return this._address;
    }

    set address(address: string) {
        this._address = address;
        if (this.isSame) {
            this._billingAddress = address;
        }
    }

    get billingFirstName(): string {
        return this._billingFirstName;
    }

    set billingFirstName(name: string) {
        this._billingFirstName = name;
        if (this.isSame) {
            this._firstName = name;
        }
    }

    get billingLastName(): string {
        return this._billingLastName;
    }

    set billingLastName(name: string) {
        this._billingLastName = name;
        if (this.isSame) {
            this._lastName = name;
        }
    }

    get billingAddress(): string {
        return this._billingAddress;
    }

    set billingAddress(address: string) {
        this._billingAddress = address;
        if (this.isSame) {
            this._address = address;
        }
    }

}