import {multi, splitIntoWords, sum} from './01';


let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a=1;
    b=2;
    c=3;
})

test('sum should be correct', () => {
    //DATA подготовительные данные
    /*const a=1;
    const b=2;
    const c=3;*/

    //ACTION действие которое мы выполняем
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    //EXPERT RESULT ожидаем результат
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('multiply should be correct', () => {
    //DATA подготовительные данные
    /*const a=1;
    const b=2;
    const c=3;*/

    //ACTION действие которое мы выполняем
    const result1 = multi(a, b)
    const result2 = multi(b, c)

    //EXPERT RESULT ожидаем результат
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('splitting into words should be correct', () => {
    //DATA подготовительные данные
    const sent1 = 'Hello my friend!'
    const sent2 = 'JS - the best programming language.'

    //ACTION действие которое мы выполняем
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //EXPERT RESULT ожидаем результат
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');

})