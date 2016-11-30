export class Info {
    private _firstName: string;
    private _lastName: string;
    private _address: string;
    
    private _billingFirstName: string;
    private _billingLastName: string;
    private _billingAddress: string;

    private _isSame = true;
    
    isValid = true;
    issues;

    cardNumber: string;
    zipCode: string;
    expMonth: number;
    expYear: number;
    cvv: number;

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

    get isSame(): boolean{
        return this._isSame;
    }

    set isSame(s : boolean) {
        this._isSame = s;
        if(!this._isSame){
            this._billingFirstName = this._firstName;
            this._billingLastName = this._lastName;
            this._billingAddress = this._address;
        }else{
            this._firstName = this._billingFirstName;
            this._lastName = this._billingLastName;
            this._address = this._billingAddress;
        }
    }

    getIssues(){
        this.checkValidity();
        if(this.issues){
            this.isValid = false;
        }else{
            this.isValid = true;
        }
        return this.issues;
    }

    checkValidity(){
        this.issues = "";
        if(!this._firstName){
            this.issues += "First name can't be empty \n";
        }

        if(!this._lastName){
            this.issues += "Last name can't be empty \n";
        }

        if(!this._address){
            this.issues += "Address can't be empty \n";
        }

        if(!this._billingFirstName){
            this.issues += "Billing first name can't be empty \n";
        }

        if(!this._billingLastName){
            this.issues += "Billing last name can't be empty \n";
        }

        if(!this._billingAddress){
            this.issues += "Billing address can't be empty \n";
        }

        if(!this.cardNumber){
            this.issues += "Card number can't be empty \n";
        }else if(this.cardNumber.length !=16){
            this.issues += "Incorrect length of credit card number \n";
        }

        if(!this.cvv){
            this.issues += "Need cvv number \n";
        }else if(this.cvv.toString().length != 3 ){
            this.issues += "CVV length is not 3 \n";
        }

        if(!this.expMonth){
            this.issues += "Need expire month \n";
        }else if(this.expMonth < 1 || this.expMonth > 12){
            this.issues += "Expire month is invalid \n";
        }

        if(!this.expYear){
            this.issues += "Need expire year \n";
        }else if(this.expYear < 2016){
            this.issues += "Expire year is invalid \n";
        }
    }
}