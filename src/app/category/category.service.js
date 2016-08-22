'use strict';

export default function categoryService() {
    const categories = [
        {
            name: 'Skills',
            id: 1,
            count: '22'
        },
        {
            name: 'Home',
            id: 2,
			count: '-2'
        },
        {
            name: 'Job',
            id: 3,
			count: '2222'
        },
        {
            name: 'Hobby',
            id: 4,
			count: '222'
        },
        {
            name: 'Sport',
            id: 5,
			count: '2'
        }
    ];
    
    return  {
        getCategories() {
            return categories;
        }
    };
}
