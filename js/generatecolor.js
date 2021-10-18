const createRandomColor = () => {
    let createrandomNum = Math.floor(Math.random() * (255 - 1) + 1);     
    return createrandomNum;
};

const colorGenerator = () => {
    let red = createRandomColor();
    let green = createRandomColor();
    let blue = createRandomColor();

    let newColor = `rgb(${red}, ${green}, ${blue})`;
    return newColor;
};

export default colorGenerator;