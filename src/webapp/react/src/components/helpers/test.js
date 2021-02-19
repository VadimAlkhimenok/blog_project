export const authorsAll = [
    {id: 1, name: "Author 1"},
    {id: 2, name: "Author 2"},
    {id: 3, name: "Author 3"},
    {id: 4, name: "Author 4"},
    {id: 5, name: "Author 5"},
]

export const authorsFavourite = [
    {id: 1, name: "Author 1"},
    {id: 4, name: "Author 4"},
    {id: 5, name: "Author 5"},
]

export const authors = [
    {
        id: 1,
        name: "Author 1",
        biography: "Biography's author 1",
        subscribers: 1,
        posts: [
            {
                id: 1,
                title: "Post title 1",
                description: "Description post title 1",
                like: null,
                comments: [
                    {id: 1, name: "Reader 1", text: "Description post comment 1"},
                    {id: 2, name: "Reader 2", text: "Description post comment 2"},
                    {id: 3, name: "Reader 2", text: "Description post comment 2"},
                    {id: 4, name: "Reader 2", text: "Description post comment 2"},
                ]
            },
        ]
    },
    {
        id: 2,
        name: "Author 2",
        biography: "Biography's author 2",
        subscribers: 2,
        posts: [
            {id: 6, title: "Post title 6", description: "Description post title 5", like: null},
            {id: 7, title: "Post title 7", description: "Description post title 6", like: null,},
        ]
    },
    {
        id: 3,
        name: "Author 3",
        biography: "Biography's author 3",
        subscribers: 3,
        posts: [
            {id: 1, title: "Post title 1", description: "Description post title 1"},
            {id: 2, title: "Post title 2", description: "Description post title 2"},
            {id: 3, title: "Post title 3", description: "Description post title 3"},
        ]
    },
    {
        id: 4,
        name: "Author 4",
        biography: "Biography's author 4",
        subscribers: 4,
        posts: [
            {id: 7, title: "Post title 7", description: "Description post title 6"},
            {id: 8, title: "Post title 8", description: "Description post title 7"},
            {id: 9, title: "Post title 9", description: "Description post title 8"},
            {id: 10, title: "Post title 10", description: "Description post title 9"},
        ]
    },
    {
        id: 5,
        name: "Author 5",
        biography: "Biography's author 5",
        subscribers: 52342344,
        posts: [
            {id: 6, title: "Post title 6", description: "Description post title 5"},
            {id: 7, title: "Post title 7", description: "Description post title 6"},
            {id: 8, title: "Post title 8", description: "Description post title 7"},
            {id: 9, title: "Post title 9", description: "Description post title 8"},
            {id: 10, title: "Post title 10", description: "Description post title 9"},
            {id: 11, title: "Post title 10", description: "Description post title 9"},
            {id: 12, title: "Post title 10", description: "Description post title 9"},
        ]
    },
]