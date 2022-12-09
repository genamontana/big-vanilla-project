export type ManType = {
    name: string;
    age: number;
};

const people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Miller', age: 18},
];

const dimaTransformer = (man: ManType) => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
});

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov',
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexander',
        lastName: 'Petrov',
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Miller',
    },
];

const dev2 = [
    dimaTransformer(people[0]),
    dimaTransformer(people[1]),
    dimaTransformer(people[2]),
];

const dev3 = people.map(dimaTransformer)
const dev4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))

export const createGreetingMessage = (people: ManType[]) => {
    return  people.map(man=>`Hello ${man.name.split(' ')[0]}. Welcome`)
}