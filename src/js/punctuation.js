let multiplyXP = 3.5;
export let points = 0;
export let wrong = 0;

export const punctuation = (points) => points * multiplyXP;

export const percentPoints = (points) => points * 10;

export const correctQuestion = () => {
    points++;
    return points;
}

export const wrongQuestion = () => {
    wrong++;
    return wrong;
}

export const reset = () => {
    wrong = 0;
    points = 0;
}
