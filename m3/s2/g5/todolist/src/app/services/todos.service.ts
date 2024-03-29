import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todo = [
    {
      "id":1,
      "todo":"Do something nice for someone I care about",
      "completed":true,
      "userId":26
    },
    {
      "id":2,
      "todo":"Memorize the fifty states and their capitals",
      "completed":false,
      "userId":48
    },
    {
      "id":3,
      "todo":"Watch a classic movie",
      "completed":false,
      "userId":4
    },
    {
      "id":4,
      "todo":"Contribute code or a monetary donation to an open-source software project",
      "completed":false,
      "userId":48
    },
    {
      "id":5,
      "todo":"Solve a Rubik's cube",
      "completed":false,
      "userId":31
    },
    {
      "id":6,
      "todo":"Bake pastries for me and neighbor",
      "completed":false,
      "userId":39
    },
    {
      "id":7,
      "todo":"Go see a Broadway production",
      "completed":false,
      "userId":32
    },
    {
      "id":8,
      "todo":"Write a thank you letter to an influential person in my life",
      "completed":true,
      "userId":13
    },
    {
      "id":9,
      "todo":"Invite some friends over for a game night",
      "completed":false,
      "userId":47
    },
    {
      "id":10,
      "todo":"Have a football scrimmage with some friends",
      "completed":false,
      "userId":19
    },
    {
      "id":11,
      "todo":"Text a friend I haven't talked to in a long time",
      "completed":false,
      "userId":39
    },
    {
      "id":12,
      "todo":"Organize pantry",
      "completed":true,
      "userId":39
    },
    {
      "id":13,
      "todo":"Buy a new house decoration",
      "completed":false,
      "userId":16
    },
    {
      "id":14,
      "todo":"Plan a vacation I've always wanted to take",
      "completed":false,
      "userId":28
    },
    {
      "id":15,
      "todo":"Clean out car",
      "completed":false,
      "userId":33
    },
    {
      "id":16,
      "todo":"Draw and color a Mandala",
      "completed":true,
      "userId":24
    },
    {
      "id":17,
      "todo":"Create a cookbook with favorite recipes",
      "completed":false,
      "userId":1
    },
    {
      "id":18,
      "todo":"Bake a pie with some friends",
      "completed":false,
      "userId":1
    },
    {
      "id":19,
      "todo":"Create a compost pile",
      "completed":true,
      "userId":5
    },
    {
      "id":20,
      "todo":"Take a hike at a local park",
      "completed":true,
      "userId":43
    },
    {
      "id":21,
      "todo":"Take a class at local community center that interests you",
      "completed":false,
      "userId":22
    },
    {
      "id":22,
      "todo":"Research a topic interested in",
      "completed":false,
      "userId":4
    },
    {
      "id":23,
      "todo":"Plan a trip to another country",
      "completed":true,
      "userId":37
    },
    {
      "id":24,
      "todo":"Improve touch typing",
      "completed":false,
      "userId":45
    },
    {
      "id":25,
      "todo":"Learn Express.js",
      "completed":false,
      "userId":49
    },
    {
      "id":26,
      "todo":"Learn calligraphy",
      "completed":false,
      "userId":50
    },
    {
      "id":27,
      "todo":"Have a photo session with some friends",
      "completed":false,
      "userId":14
    },
    {
      "id":28,
      "todo":"Go to the gym",
      "completed":false,
      "userId":15
    },
    {
      "id":29,
      "todo":"Make own LEGO creation",
      "completed":false,
      "userId":30
    },
    {
      "id":30,
      "todo":"Take cat on a walk",
      "completed":false,
      "userId":15
    },
    {
      "id":31,
      "todo":"Find a charity and donate to it",
      "completed":true,
      "userId":35
    },
    {
      "id":32,
      "todo":"Donate to local food bank",
      "completed":true,
      "userId":40
    },
    {
      "id":33,
      "todo":"Uninstall unused apps from devices",
      "completed":false,
      "userId":36
    },
    {
      "id":34,
      "todo":"Write a handwritten letter to somebody",
      "completed":false,
      "userId":38
    },
    {
      "id":35,
      "todo":"Fill out a basketball bracket",
      "completed":false,
      "userId":34
    },
    {
      "id":36,
      "todo":"Do yoga",
      "completed":false,
      "userId":35
    },
    {
      "id":37,
      "todo":"Make a scrapbook with pictures of favorite memories",
      "completed":false,
      "userId":9
    },
    {
      "id":38,
      "todo":"Have a bonfire with close friends",
      "completed":true,
      "userId":8
    },
    {
      "id":39,
      "todo":"Go for a run",
      "completed":false,
      "userId":16
    },
    {
      "id":40,
      "todo":"Host a movie marathon with some friends",
      "completed":false,
      "userId":47
    },
    {
      "id":41,
      "todo":"Go see a movie in theaters with a few friends",
      "completed":true,
      "userId":12
    },
    {
      "id":42,
      "todo":"Wash car",
      "completed":false,
      "userId":15
    },
    {
      "id":43,
      "todo":"Patronize a local independent restaurant",
      "completed":false,
      "userId":37
    },
    {
      "id":44,
      "todo":"Watch a Khan Academy lecture on a subject of choosing",
      "completed":false,
      "userId":38
    },
    {
      "id":45,
      "todo":"Learn Javascript",
      "completed":false,
      "userId":16
    },
    {
      "id":46,
      "todo":"Volunteer at a local animal shelter",
      "completed":false,
      "userId":39
    },
    {
      "id":47,
      "todo":"Volunteer at local food pantry",
      "completed":false,
      "userId":32
    },
    {
      "id":48,
      "todo":"Start a book I've never gotten around to reading",
      "completed":false,
      "userId":31
    },
    {
      "id":49,
      "todo":"Mow neighbor's lawn",
      "completed":false,
      "userId":14
    },
    {
      "id":50,
      "todo":"Start a band",
      "completed":false,
      "userId":13
    },
    {
      "id":51,
      "todo":"Organize music collection",
      "completed":false,
      "userId":7
    },
    {
      "id":52,
      "todo":"Organize a cluttered drawer",
      "completed":true,
      "userId":12
    },
    {
      "id":53,
      "todo":"Learn a new recipe",
      "completed":true,
      "userId":21
    },
    {
      "id":54,
      "todo":"Start a daily journal",
      "completed":false,
      "userId":1
    },
    {
      "id":55,
      "todo":"Clean out closet and donate the clothes I've outgrown",
      "completed":true,
      "userId":2
    },
    {
      "id":56,
      "todo":"Go on a fishing trip with some friends",
      "completed":false,
      "userId":15
    },
    {
      "id":57,
      "todo":"Learn Morse code",
      "completed":false,
      "userId":2
    },
    {
      "id":58,
      "todo":"Listen to a new podcast",
      "completed":true,
      "userId":9
    },
    {
      "id":59,
      "todo":"Color",
      "completed":false,
      "userId":50
    },
    {
      "id":60,
      "todo":"Take dog on a walk",
      "completed":true,
      "userId":26
    },
    {
      "id":61,
      "todo":"Start a blog for something I'm passionate about",
      "completed":false,
      "userId":27
    },
    {
      "id":62,
      "todo":"Listen to a new music genre",
      "completed":false,
      "userId":34
    },
    {
      "id":63,
      "todo":"Learn how to write in shorthand",
      "completed":false,
      "userId":20
    },
    {
      "id":64,
      "todo":"Practice coding in favorite language",
      "completed":false,
      "userId":42
    },
    {
      "id":65,
      "todo":"Read a formal research paper on an interesting subject",
      "completed":true,
      "userId":45
    },
    {
      "id":66,
      "todo":"Learn how to whistle with fingers",
      "completed":true,
      "userId":18
    },
    {
      "id":67,
      "todo":"Make a couch fort",
      "completed":false,
      "userId":14
    },
    {
      "id":68,
      "todo":"Take a caffeine nap",
      "completed":false,
      "userId":18
    },
    {
      "id":69,
      "todo":"Find a DIY to do",
      "completed":false,
      "userId":19
    },
    {
      "id":70,
      "todo":"Go to a concert with some friends",
      "completed":false,
      "userId":11
    },
    {
      "id":71,
      "todo":"Give pet ten minutes of focused attention",
      "completed":false,
      "userId":47
    },
    {
      "id":72,
      "todo":"Rearrange and organize room",
      "completed":false,
      "userId":9
    },
    {
      "id":73,
      "todo":"Learn how to play a new sport",
      "completed":false,
      "userId":25
    },
    {
      "id":74,
      "todo":"Make homemade ice cream",
      "completed":true,
      "userId":41
    },
    {
      "id":75,
      "todo":"Hold a yard sale",
      "completed":true,
      "userId":20
    },
    {
      "id":76,
      "todo":"Learn to play a new instrument",
      "completed":false,
      "userId":50
    },
    {
      "id":77,
      "todo":"Resolve a problem I've been putting off",
      "completed":true,
      "userId":17
    },
    {
      "id":78,
      "todo":"Bake something I've never tried before",
      "completed":true,
      "userId":27
    },
    {
      "id":79,
      "todo":"Organize dresser",
      "completed":false,
      "userId":41
    },
    {
      "id":80,
      "todo":"Fix something that's broken in house",
      "completed":false,
      "userId":43
    },
    {
      "id":81,
      "todo":"Play a video game",
      "completed":false,
      "userId":27
    },
    {
      "id":82,
      "todo":"Listen to music I haven't heard in a while",
      "completed":false,
      "userId":17
    },
    {
      "id":83,
      "todo":"Look at finances and find one way to save money",
      "completed":false,
      "userId":17
    },
    {
      "id":84,
      "todo":"Learn the periodic table",
      "completed":true,
      "userId":46
    },
    {
      "id":85,
      "todo":"Make a budget",
      "completed":true,
      "userId":5
    },
    {
      "id":86,
      "todo":"Donate blood at a local blood center",
      "completed":false,
      "userId":27
    },
    {
      "id":87,
      "todo":"Go to the library and find an interesting book",
      "completed":false,
      "userId":9
    },
    {
      "id":88,
      "todo":"Configure two-factor authentication on accounts",
      "completed":false,
      "userId":50
    },
    {
      "id":89,
      "todo":"Take a nap",
      "completed":true,
      "userId":39
    },
    {
      "id":90,
      "todo":"Create or update resume",
      "completed":false,
      "userId":24
    },
    {
      "id":91,
      "todo":"Prepare a 72-hour kit",
      "completed":true,
      "userId":15
    },
    {
      "id":92,
      "todo":"Go on a long drive with no music",
      "completed":false,
      "userId":25
    },
    {
      "id":93,
      "todo":"Learn the NATO phonetic alphabet",
      "completed":false,
      "userId":12
    },
    {
      "id":94,
      "todo":"Have a jam session with friends",
      "completed":false,
      "userId":45
    },
    {
      "id":95,
      "todo":"Hold a video game tournament with some friends",
      "completed":false,
      "userId":8
    },
    {
      "id":96,
      "todo":"Catch up on world news",
      "completed":false,
      "userId":49
    },
    {
      "id":97,
      "todo":"Do a jigsaw puzzle",
      "completed":false,
      "userId":11
    },
    {
      "id":98,
      "todo":"Learn about the Golden Ratio",
      "completed":false,
      "userId":9
    },
    {
      "id":99,
      "todo":"Organize basement",
      "completed":true,
      "userId":35
    },
    {
      "id":100,
      "todo":"Learn a new programming language",
      "completed":true,
      "userId":1
    },
    {
      "id":101,
      "todo":"Learn how the internet works",
      "completed":false,
      "userId":30
    },
    {
      "id":102,
      "todo":"Organize a bookshelf",
      "completed":false,
      "userId":48
    },
    {
      "id":103,
      "todo":"Go to a local thrift shop",
      "completed":true,
      "userId":5
    },
    {
      "id":104,
      "todo":"Study a foreign language",
      "completed":true,
      "userId":37
    },
    {
      "id":105,
      "todo":"Explore a park I have never been to before",
      "completed":false,
      "userId":10
    },
    {
      "id":106,
      "todo":"Start a garden",
      "completed":true,
      "userId":7
    },
    {
      "id":107,
      "todo":"Shred old documents I don't need anymore",
      "completed":false,
      "userId":11
    },
    {
      "id":108,
      "todo":"Learn to write with nondominant hand",
      "completed":true,
      "userId":27
    },
    {
      "id":109,
      "todo":"Go to a nail salon",
      "completed":false,
      "userId":39
    },
    {
      "id":110,
      "todo":"Create a meal plan for the coming week",
      "completed":true,
      "userId":23
    },
    {
      "id":111,
      "todo":"Surprise significant other with something considerate",
      "completed":false,
      "userId":39
    },
    {
      "id":112,
      "todo":"Clean out garage",
      "completed":false,
      "userId":32
    },
    {
      "id":113,
      "todo":"Make a simple musical instrument",
      "completed":false,
      "userId":19
    },
    {
      "id":114,
      "todo":"Learn how to fold a paper crane",
      "completed":true,
      "userId":47
    },
    {
      "id":115,
      "todo":"Learn the Chinese erhu",
      "completed":false,
      "userId":13
    },
    {
      "id":116,
      "todo":"Start a family tree",
      "completed":true,
      "userId":3
    },
    {
      "id":117,
      "todo":"Teach dog a new trick",
      "completed":true,
      "userId":16
    },
    {
      "id":118,
      "todo":"Draw something interesting",
      "completed":false,
      "userId":10
    },
    {
      "id":119,
      "todo":"Explore the nightlife of city",
      "completed":true,
      "userId":46
    },
    {
      "id":120,
      "todo":"Make tie dye shirts",
      "completed":false,
      "userId":32
    },
    {
      "id":121,
      "todo":"Think of a new business idea",
      "completed":true,
      "userId":16
    },
    {
      "id":122,
      "todo":"Go swimming with a friend",
      "completed":false,
      "userId":26
    },
    {
      "id":123,
      "todo":"Clean out refrigerator",
      "completed":true,
      "userId":34
    },
    {
      "id":124,
      "todo":"Pot some plants and put them around house",
      "completed":false,
      "userId":37
    },
    {
      "id":125,
      "todo":"Learn how to beatbox",
      "completed":false,
      "userId":44
    },
    {
      "id":126,
      "todo":"Take a bubble bath",
      "completed":true,
      "userId":15
    },
    {
      "id":127,
      "todo":"Prepare a dish from a foreign culture",
      "completed":false,
      "userId":7
    },
    {
      "id":128,
      "todo":"Paint the first thing I see",
      "completed":false,
      "userId":15
    },
    {
      "id":129,
      "todo":"Learn how to use a french press",
      "completed":false,
      "userId":17
    },
    {
      "id":130,
      "todo":"Learn about a distributed version control system such as Git",
      "completed":true,
      "userId":4
    },
    {
      "id":131,
      "todo":"Learn GraphQL",
      "completed":false,
      "userId":29
    },
    {
      "id":132,
      "todo":"Learn origami",
      "completed":false,
      "userId":29
    },
    {
      "id":133,
      "todo":"Go to a karaoke bar with some friends",
      "completed":true,
      "userId":39
    },
    {
      "id":134,
      "todo":"Conquer one of fears",
      "completed":false,
      "userId":45
    },
    {
      "id":135,
      "todo":"Shop at support local farmers market",
      "completed":false,
      "userId":41
    },
    {
      "id":136,
      "todo":"Compliment someone",
      "completed":false,
      "userId":41
    },
    {
      "id":137,
      "todo":"Do something I used to do as a kid",
      "completed":false,
      "userId":33
    },
    {
      "id":138,
      "todo":"Match storage containers with their lids",
      "completed":false,
      "userId":50
    },
    {
      "id":139,
      "todo":"Learn Kotlin",
      "completed":false,
      "userId":4
    },
    {
      "id":140,
      "todo":"Write a short story",
      "completed":true,
      "userId":48
    },
    {
      "id":141,
      "todo":"Visit a nearby museum",
      "completed":true,
      "userId":1
    },
    {
      "id":142,
      "todo":"Make a new friend",
      "completed":false,
      "userId":24
    },
    {
      "id":143,
      "todo":"Drink water",
      "completed":false,
      "userId":25
    },
    {
      "id":144,
      "todo":"Charge the phone",
      "completed":false,
      "userId":26
    },
    {
      "id":145,
      "todo":"Pay utility bills",
      "completed":false,
      "userId":27
    },
    {
      "id":146,
      "todo":"Make a JavaScript library",
      "completed":false,
      "userId":28
    },
    {
      "id":147,
      "todo":"Use DummyJSON",
      "completed":false,
      "userId":29
    },
    {
      "id":148,
      "todo":"Hug Mom :)",
      "completed":false,
      "userId":30
    },
    {
      "id":149,
      "todo":"Play cricket",
      "completed":false,
      "userId":31
    },
    {
      "id":150,
      "todo":"Sleeeeep for the whole day!!!",
      "completed":false,
      "userId":32
    }
  ]


  constructor() { }
}
