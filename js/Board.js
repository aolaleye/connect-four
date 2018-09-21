class Board {
    constructor () {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        const spaces = [];

        for (i = 0; i < this.columns; i++) {
            const column = [];

            for (j = 0; i < this.rows; j++) {
                const space = new Space(x, y);
                column.push(space);
            } 

            spaces.push(column);
        } 

        return spaces;
    }
}
