/*
Fazendo um função recursiva:
Sabemos que 5! é (5 x    4 x 3 x 2 x 1), então podemos escrever que 5! = 5 x 4!

n! = n x (n-1)!
*/


function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(1))