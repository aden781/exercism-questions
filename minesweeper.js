//Given a input, check if square is mine, recursivly call until all nodes are reached
//assumption: input given is similar to:
//                    [[" "," ","*"],
//                     [" "," "," "] 
//                     [" ","*"," "]] 
// 
export const annotate = (input) => {

    // iterate through board 
    // x = column coord; y = row coord
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input[x].length; y++) {
            // if square is blank, check adjacent squares
            if (input[x][y] === " ") {
                input[x][y] = checkMines(input, x, y)
            }
        }
    }
    
    //check 8 adjacent spaces on board, only if inbounds
    const checkMines = (input, x, y) => {
        let mineCount = 0
        
        const isInbounds = (input, x ,y) => {
            if (
                x >= 0 &&
                y >= 0 &&
                x < input.length &&
                y < input[x].length
            ) return true
        }

        //manual check of adjacent nodes
            // //upper left
            // if(isInbounds(input, x + 1, y - 1) && (input[x+1][y-1] === "*")){
            //     mineCount++
            // } 
            // //upper
            // if(isInbounds(input, x + 1, y) && (input[x+1][y] === "*")){
            //     mineCount++
            // } 
            // //upper right
            // if(isInbounds(input, x + 1, y + 1) && (input[x+1][y+1] === "*")){
            //     mineCount++
            // } 
            // //left
            // if(isInbounds(input, x, y - 1) && (input[x][y-1] === "*")){
            //     mineCount++
            // } 
            // //right
            // if(isInbounds(input, x, y + 1) && (input[x][y+1] === "*")){
            //     mineCount++
            // } 
            // //lower left
            // if(isInbounds(input, x - 1, y - 1) && (input[x-1][y-1] === "*")){
            //     mineCount++
            // } 
            // //lower
            // if(isInbounds(input, x - 1, y - 1) && (input[x-1][y-1] === "*")){
            //     mineCount++
            // } 
            // //lower right
            // if(isInbounds(input, x - 1, y + 1) && (input[x-1][y+1] === "*")){
            //     mineCount++
            // } 


        //alternate: nested loop check
        for (let i = x - 1; i < 2; i++){
            for (let j = y - 1; j < 2; j++) {
                if(isInbounds(input, i, j) && (input[i][j] === "*")) {
                    mineCount++
                }
            }
        }
        return mineCount
    }

  };