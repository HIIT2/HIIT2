let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
'“You just can not beat the person who never gives up." - Babe Ruth',

'“Be miserable. Or motivate yourself. Whatever has to be done, it is always your choice.” -Wayne Dyer',
    
'“ In order to succeed, we must first believe that we can.“ - Nikos Kazantzakis',
    
'“No bird soars too high if he soars with his own wings.“ - William Blake',
    
'“You will never win if you never begin.“ - Helen Rowland',

'“If you want to conquer fear, do not sit home and think about it. Go out and get busy.“ - Dale Carnegie ',

'“What you get by achieving your goals is not as important as what you become by achieving your goals.” - Zig Ziglar',

'“Opportunity does not knock, it presents itself when you beat down the door.“ - Kyle Chandler',

'“I am not afraid... I was born to do this.“ - Joan of Arc',

'“No matter how many goals you have achieved, you must set your sights on a higher one.“ - Jessica Savitch', 
'“Act as if what you do makes a difference. It does.” - William James ',

'“Either I will find a way, or I will make one.“ - Phillip Sydney ',

'“The will to succeed is important, but what is more important is the will to prepare.“ - Bobby Knight ',

'“Things do not happen. Things are made to happen.“ - John F. Kennedy ',

'“Without hard work, nothing grows but weeds.“ - Gordon B. Hinckley', 

'“You are never too old to set another goal or to dream a new dream.” - Les Brown',

'“Do you want to know who you are? Do not ask. Act! Action will delineate and define you.“ - Thomas Jefferson ',

'“Do not think, just do.“ - Horace',

'“Perseverance is failing 19 times and succeeding the 20th.“ - Julie Andrews',

'“The harder the conflict, the more glorious the triumph.“ - Thomas Paine', 

'“We may encounter many defeats but we must not be defeated.” - Maya Angelou ',

'“You simply have to put one foot in front of the other and keep going. Put blinders on and plow right ahead.“ - George Lucas ',

'“Do not wait to strike till the iron is hot; but make it hot by striking.“ - William Butler Yeats',

'“I know where I am going and I know the truth, and I do not have to be what you want me to be. I am free to be what I want.“ - Muhammad Ali',

'“A goal is a dream with a deadline” - Napoleon Hill',

'“I can, therefore I am.“ - Simone Weil',

'“Decide what you want, decide what you are willing to exchange for it. Establish your priorities and go to work.“ - H. L. Hunt',

'“To begin, begin.“ - William Wordsworth ', 

'“Even if you fall on your face, you are still moving forward.” - Victor Kiam',

'“Step by step and the thing is done.“ - Charles Atlas',

'“Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.“ - George Whitefield',

'“Do your work with your whole heart, and you will succeed - there is so little competition.“ -  Elbert Hubbard',

'“Go big or go home. Because it is true. What do you have to lose?” -Eliza Dushku', 

'“Small deeds done are better than great deeds planned.” - Peter Marshall ',

'“The more things you do, the more you can do“ - Lucile Ball',

'“Never retreat. Never explain. Get it done and let them howl.“ - Benjamin Jowett',

'“After a storm comes a calm.“ - Matthew Henry',

'“One way to keep momentum going is to have constantly greater goals.“ - Michael Korda', 

'“You can not build a reputation on what you are going to do.” - Henry Ford',

'“Deserve your dream.“ - Octavio Paz',

'“You can not wait for inspiration. You have to go after it with a club.“ - Jack London',

'“The hardships that I encountered in the past will help me succeed in the future.“ -Phillip Emeagwali',

'“Motivation will almost always beat mere talent“ - Norman Ralph Augustine ', 

'“I attribute my success to this - I never gave or took any excuse.“ - Florence Nightingale',

'“Big shots are only little shots who keep shooting.” - Christopher Morley',

'“If you can dream it, do it“ - Walt Disney',

'“Do not watch the clock; do what it does. Keep going.“ - Sam Levenson',

'“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.“ - Thomas A. Edison '





];


btn.onclick = function(){
    let randon = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randon;
} 


// '"on my mama" - lil yee',
//'"wtf" - lil yehe',
//'"dhwbdhwd" - lss'
