export function Random(min, max) {
    try {
        if(typeof min != 'number' && !min) throw("O campo 'min' não foi fornecido!");
        if(typeof max != 'number' && !max) throw("O campo 'max' não foi fornecido!");

        if(min < 0) throw("O campo 'min' não pode ser menor do que 0!");

        return Math.floor(Math.random() * (max - min) + min);
    } catch (error) {
        return new Error(error);
    }
}