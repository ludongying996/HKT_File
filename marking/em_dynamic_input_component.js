import { api, LightningElement, track } from 'lwc';

export default class DynamicInputComponent extends LightningElement {
    @track selectedNumber = 1;
    @api guestInfos = [];
    @api selectLabel="select a number";
    @api names = [];
    @api phoneNumbers = [];

    @api guestInfosStr = [];

    @api inputNumer;
    @api outputNumber;
    @api outputNumberInt;

    get numberOptions() {
        return Array.from({ length: this.inputNumer }, (_, i) => ({
            label: `${i + 1}`,
            value: `${i + 1}`
        }));
    }

    handleNumberChange(event) {
        const number = parseInt(event.detail.value, 10);
        this.selectedNumber = event.detail.value;
        this.guestInfos = Array.from({ length: number }, (_, i) => ({
            id: i,
            name: '',
            phone: ''
        }));
        this.outputNumber=number.toString();
        this.outputNumberInt=number;
    }

    handleNameChange(event) {
        const id = event.target.dataset.id;
        const name = event.target.value;
        this.guestInfos = this.guestInfos.map(input => input.id == id ? { ...input, name } : input);
        this.updateLists();

    }

    handlePhoneNumberChange(event) {
        const id = event.target.dataset.id;
        const phone = event.target.value;
        this.guestInfos = this.guestInfos.map(input => input.id == id ? { ...input, phone } : input);
        this.updateLists();
    }

    updateLists() {
        this.names = this.guestInfos.map(field => field.name);
        this.phoneNumbers = this.guestInfos.map(field => field.phone);
        // this.guestInfosStr=JSON.stringify(this.guestInfos);

        this.guestInfosStr = this.guestInfos.map(item => JSON.stringify(item));
        
    }

    // Example usage in a lifecycle hook or other methods
    connectedCallback() {
        console.log('Names:', this.names);
        console.log('Phones:', this.phoneNumbers);
    }
}