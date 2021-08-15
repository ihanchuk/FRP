export const run = (func) => (data) => {
    func(data);
    return data;
}