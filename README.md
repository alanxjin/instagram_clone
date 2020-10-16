```
{
    comments:[
        {
            id: xxx,
            postId: xxx,
            isDirect: true,
            username:xxx,
            text:xxx,
            timestamp:xxx,
            liked:[username1, username2],
            replied:[commentId1,commentId2,commentId3],
        }
    }]

}
const post = {
  id: 1000,
  username: "alanxjin",
  status: "Four Seasons Hotel Hampshire, England",
  description:
    "Artist Preta Wolzak’s (@pretawolzak) textured mixed-media pieces focus on hard issues, including gender equality, representation and race. Her collections “Ma Petit Inuite” and “Arctic Charade” (pictured) confronts the impact of humans’ behavior on our planet and the effects of climate change.",
  likes: 2852,
  timestamp: 1602787081979,
  profileImage: process.env.PUBLIC_URL + "/imgs/postProfile.jpg",
}
```

## Sorting on comments

I didn't figure out how instagram sorting the comments. So I just went with following rules.

- On portraits mode: taking the two with most recently time (largest timestamp)
- on landscape mode: sort on likes first (descending), then break tie with time (earlier come first, i.e. smaller timestamp)
