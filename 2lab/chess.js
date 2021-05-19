class chessBoard {
    constructor(a, b, c, d, e, f, g, h) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
    }
}

function chessQuins() {
    const board = {}; 
    let map = new Map(),
        diag1 = [],
        diag2 = [];
     let num = Math.floor(Math.random() * (9 - 1) + 1);
       
    for (let i = 0; i < 8; i++) {
            const xArr = ['x','x','x','x','x','x','x','x'];
            num = Math.floor(Math.random() * (9 - 1) + 1);
            while(map.get(num) == 1){
                num = Math.floor(Math.random() * (9 - 1) + 1);
            }
            
            if( diag1.indexOf(i + (num - 1)) == -1 || diag2.indexOf(Math.abs(i-(num-1))) == -1 ){
                xArr[num-1] = 'Q';
                map.set(num,1);
                console.log(map);
                diag1.push(i+(num-1));
                diag2.push(Math.abs(i-(num-1)));
                board[(i+1).toString()] = new chessBoard(...xArr);
            } else { 
                i--;
             }
       
                      
    }
    return board;
}

console.table(chessQuins())