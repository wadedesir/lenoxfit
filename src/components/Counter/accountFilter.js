let data = {
    "results": 8,
    "source": "linkedin",
    "scrape-date": "5/15/24",
    "data": [
        {
            "name": "jack egan",
            "posts": [
                {
                    "date": "5/10/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "4/1/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "3/10/24",
                    "text": "New York with my family! SO MUCH FUN"
                }
            ]
        },
        {
            "name": "Mary",
            "posts": [
                {
                    "date": "5/1/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "1/1/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "2/10/24",
                    "text": "New York with my family! SO MUCH FUN"
                }
            ]
        },
        {
            "name": "Alex",
            "posts": [
                {
                    "date": "4/19/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "4/3/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "3/10/23",
                    "text": "New York with my family! SO MUCH FUN"
                }
            ]
        },
        {
            "name": "Ted Mosby",
            "posts": [
                {
                    "date": "5/1/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "4/7/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "2/8/24",
                    "text": "New York with my family! SO MUCH FUN"
                }
            ]
        },
        {
            "name": "Lily",
            "posts": [
                {
                    "date": "1/10/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "1/20/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "2/5/24",
                    "text": "New York with my family! SO MUCH FUN"
                }
            ]
        },
        {
            "name": "Bryan",
            "posts": [
                {
                    "date": "1/10/23",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "10/1/23",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "12/5/23",
                    "text": "New York with my family! SO MUCH FUN"
                }
            ]
        },
        {
            "name": "Maria",
            "posts": [
                {
                    "date": "5/8/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "1/1/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "9/10/23",
                    "text": "New York with my family! SO MUCH FUN"
                }
            ]
        },
        {
            "name": "Stacy",
            "posts": [
                {
                    "date": "5/15/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "4/3/24",
                    "text": "New York with my family! SO MUCH FUN"
                },
                {
                    "date": "4/1/24",
                    "text": "New York with my family! SO MUCH FUN"
                }
            ]
        }
    ]
}

function filterData(data) {
    let currentDate = new Date(data['scrape-date']);
    let thirtyDaysAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);

    let activeUsers = data.data.filter(user => {
        return user.posts.some(post => {
            return new Date(post.date) > thirtyDaysAgo;
        })
    })

    let allPosts = activeUsers.reduce((tot, curr) => {
        return tot.concat(curr.posts);
    }, []);

    let recentPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

    return {
        activeUsers: activeUsers,
        recentPosts: recentPosts
    }
}

filteredData = filterData(data).activeUsers

function sendMessage(data) {
    let postLink = 'https://linkedintest.com/'
    
    let ret = data.map(user => {
        let recentPost = user.posts.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        return {
            name: user.name,
            posts: user.posts,
            postLink: postLink + user.name,
            postMessage: { message: 'This year im: ' + recentPost.text }
        }
    })

    console.log(ret)

    ret.forEach(user => {
        fetch(user.postLink, {
             method: "POST",
             body: JSON.stringify(user.postMessage),
             headers: {
                 "Content-type": "application/json; charset=UTF-8"
             }
        });

    })
    
}


sendMessage(filteredData)
