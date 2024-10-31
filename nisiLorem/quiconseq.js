const stackFieldChannel = 'foo';
const encoding = {
    foo: { type: 'bar' }
};

const additionalProperties = { format: 'json' };

const result = {
    [stackFieldChannel]: { ...encoding[stackFieldChannel], ...additionalProperties }
};

console.log(result);
