export function sum(a: number, b: number) {
    return a + b
}

export function multi(a: number, b: number) {
    return a * b
}


export function splitIntoWords(proposal: string) {
    const words = proposal.toLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', '')
        )
}
