// External dependencies
import { ObjectId } from "mongodb";

// Class implementation
// creating objects and defining their properties
export default class City {
    constructor(public name: string, public col: number, id?: ObjectId)
}