export class Likes {

    constructor(private _like_count?: number) {};

    set like_count(num) {
        this._like_count = num;
    }

    get like_count() {
        return this._like_count;
    }

    increaseLikes() {
        this._like_count ++;
    }

    decreaseLikes() {
        this._like_count --;
    }
} 

