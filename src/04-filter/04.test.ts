test('should take old men older then 90', ()=>{
    const ages = [18, 20, 21, 1, 100, 90, 14]

    const oldAges = ages.filter(a => a > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', ()=>{
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    const chipCourses = courses.filter(c => c.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('CSS')
    expect(chipCourses[1].title).toBe('REACT')
})