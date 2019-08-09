export const intersection = (setA, setB) => {
    const _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }

    return _intersection;
}

export const difference = (setA, setB) => {
    const _difference = new Set(setA);
    for (let elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

