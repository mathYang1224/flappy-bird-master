import {DataStore} from "../base/DataStore.js";

export class Score {
    constructor() {
        this.ctx = DataStore.getInstance().ctx
        this.scoreNumber = 0
        this.isScore = true
    }

    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#dd99d1'
        this.ctx.fillText(
            this.scoreNumber,
            (window.innerWidth - 25) / 2,
            window.innerHeight / 18,
            1000
        )
    }
}