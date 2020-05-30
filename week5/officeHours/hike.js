
// Example from activity building a constructor and using it in the main js file. 
export class Hike {
    constructor(name, imgSrc, imgAlt, distance, difficulty, description, directions) {
        this.Name = name,
        this.ImgSrc = imgSrc,
        this.ImgAlt = imgAlt,
        this.Distance = distance,
        this.Difficulty = difficulty,
        this.Description = description,
        this.Directions = directions 
    }
}