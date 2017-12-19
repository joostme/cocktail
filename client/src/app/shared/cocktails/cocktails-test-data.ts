import { Cocktail } from './cocktails.model';

export const testData: Cocktail[] = [
    {
        'id': 1,
        'name': 'Gin & Tonic',
        'description': 'Der Gin Tonic ist wohl der Drink mit Gin, der am weitesten verbreitet ist. Ob es an der langen Traditon aus der Mischung chininhalitger Limonade mit verschiedenen Gins liegt, dem Marketing der großen Marken, am erfrischenden Geschmack, Queen Mum… mag wohl keiner mit Sicherheit sagen. Auch die Verwandlung von Medizin zum Modegetränk haben ebenfalls viele bereits ausreichend aufgezeigt und diskutiert. Hier geht es um die Suche nach dem perfekten Gin & Tonic und um genau die Vielfalt, die in unserem gemeinsamen Lieblingsdrink steckt.',
        'image': 'https://images.unsplash.com/photo-1484132368430-ca5c967b425b',
        'ingredients': [
            {
                'name': 'Gin',
                'amount': '4-6 CL',
                'group': 'Gin'
            },
            {
                'name': 'Tonic Water',
                'amount': '',
                'group': 'Tonic'
            }
        ]
    },
];
