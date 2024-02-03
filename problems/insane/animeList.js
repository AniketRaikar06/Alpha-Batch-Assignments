// Imagine you are owning Aniwatch
// use classes & objects 


class Animes {
    animeList = [
        {
            name: 'Demon Slayer',
            protagonist: 'Tanjiro Kamado',
            sideKicks: ['Zenitsu', 'Inosuke', 'Nezuko']
        },
        {
            name: 'Dragon Ball',
            protagonist: 'Son Goku',
            sideKicks: ['Vegeta', 'Jiren', 'Krillen']
        },
        {
            name: 'Attack On Titan',
            protagonist: 'Eren Yeager',
            sideKicks: ['Mikasa', 'Armin', 'Levi']
        }
    ]

    getAnimeInfo = function () {
        // code here
    }
}


const animes = new Animes()
animes.getAnimeInfo('Dragon Ball')
// Output:- The protagonist is Son Goku & his best friends are Vegeta, Jiren & Krillen