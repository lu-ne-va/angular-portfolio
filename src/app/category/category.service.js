'use strict';

export default function categoryService() {
    const categories = [
        {
            name: 'Skills',
            id: 1
        },
        {
            name: 'Home',
            id: 2
        },
        {
            name: 'Job',
            id: 3
        },
        {
            name: 'Hobby',
            id: 4
        },
        {
            name: 'Sport',
            id: 5
        }
    ];
    
    return  {
        getCategories() {
            return categories;
        }
    };
}
