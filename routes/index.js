
/*
 * GET home page.
 */

var people = [
    {
        name: 'Davis Tseng',
        company: 'BITAH',
        position: 'Developer'
    },
    {
        name: 'Shawn Chai',
        company: 'BITAH',
        position: 'Product Manager'
    },
    {
        name: 'Shane Liu',
        company: 'Yahoo!',
        position: 'Developer'
    },
    {
        name: 'Roger Kuo',
        company: 'Yahoo!',
        position: 'Developer'
    },
    {
        name: 'Nobel Yang',
        company: 'BITAH',
        position: 'CEO'
    },
    {
        name: 'Ivy Hoi',
        company: 'Yahoo!',
        position: 'Developer'
    },
    {
        name: 'Jean Wang',
        company: 'Yahoo!',
        position: 'Developer'
    },
    {
        name: 'Fifi Chen',
        company: 'NTU',
        position: 'Master Student'
    },
    {
        name: 'Gooter',
        company: 'N/A',
        position: 'Cat'
    },
    {
        name: 'Peilin Tsai',
        company: 'NTU',
        position: 'Master Student'
    },
    {
        name: 'Yusuf Amir',
        company: 'Yusuf',
        position: 'Real Estimate Developer'
    },
    {
        name: 'Niko Bellic',
        company: 'Bellic Company',
        position: 'Killer'
    },
    {
        name: 'Michael Pan',
        company: 'Zencher',
        position: 'CEO'
    },
    {
        name: 'Aaron Wu',
        company: 'Rakuten',
        position: 'Developer'
    }
];

exports.index = function(req, res){
    res.render('index', {
        title: 'Express',
        people: people,
        p: JSON.stringify(people)
    });
};