let multiplyXP = 1.5;
let point = 0;

export const punctuation = (points) => points * multiplyXP;

export const correctQuestion = () => {
    point += 1;
    return point;
}

export const wrongQuestion = () => {
    point -= 1;
    return point;
}
