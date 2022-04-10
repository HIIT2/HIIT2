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

'“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.“ - Thomas A. Edison ',





'”All our dreams can come true, if we have the courage to pursue them.” - Walt Disney ',



'”The secret of getting ahead is getting started.” - Mark Twain',



'”I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” - Michael Jordan',



'”Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” - Mary Kay Ash',



'”It’s hard to beat a person who never gives up.” - Babe Ruth',

'”If people are doubting how far you can go, go so far that you can’t hear them anymore.” - Michele Ruiz ',



'”Everything you can imagine is real. ” - Pablo Picasso',



'”Do one think everyday that scares you. ” -  Eleanor Roosevelt',



'”It’s no use going back to yesterday, because I was a different person then.” - Lewis Carroll',



'”whatever you are , be a good one. ” - Abraham Lincoln',

'”Don’t be afraid to give up the good to go for the great.” - John D. Rockefeller ',



'”Things may come to those who wait, but only the things left by those who hustle.” - Abraham Lincoln ',



'”Greatness only comes before hustle in the dictionary.” - Ross Simmonds',



'”without hustle, talent will only take you so far. ” - Gary Vaynerchuk',



'”Work like there is someone working twenty four hours a day to take it away from you.” - Mark Cuban ',







'”if opportunity doesn’t knock, build a door. ” - Kurt Cobain ',



'”Work hard in silence, let your success be the noise.” - Frank Ocean ',



'”The only difference between ordinary and extraordinary is that little extra.” - Jimmy Johnson ',



'”in the middle of every difficulty lies opportunity. ” - Albert Einstein',



'”Start where you are. Use what you have. Do what you can.” - Arthur Ashe',











'”Dreams don’t work unless you do.” - John C. Maxwell ',



'”Go the extra mile. It’s never crowded there.” - Dr. Wayne D. Dyer',



'”Begin anywhere.” - John Cage',



'”Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.” - Pele',



'”Every champion was once a contender that didn’t give up.” - Gabby Douglas ',











'”Today is your opportunity to build the tomorrow you want.” - Ken Poirot',



'”You don’t need to see the whole staircase, just take the first step.” - Martin Luther King Jr',



'”The big lesson in life is never be scared of anyone or anything.” - Frank Sinatra',



'”Do the best you can. No one can do more than that.” - John Wooden',



'”It’s never too late to be what you might’ve been.” - George Eliot',











'”A winner is a dreamer who didn’t give up.” - Nelson Mandela',



'”What is life without a little risk?” - JK Rowling ',



'”The question isn’t who is going to let me; it’s who is going to stop me.” - Ayn Rand ',



'”I always thought it was me against the world and then one day I realized it’s just me against me.” - Kendrick Lamar ',



'”Don’t compromise yourself. You’re all you’ve got.” - Janis Joplin',











'”I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.”- Muhammad Ali ',



'”Opportunities don’t happen. You create them.” - Chris Grosser',



'”You must do the thing you think you cannot do.” - Eleanor Roosevelt ',



'”Doubt kills more dreams than failure ever will.” - Suzy Kassemen',



'”I never lose. Either I win or learn.” - Nelson Mandela',











'”We are what we repeatedly do. Excellence, then, is not an act, but a habit.” - Aristotle ',



'”Some people want it to happen, some wish it would happen, others make it happen.” - Michael Jordan ',



'”Great things are done by a series of small things brought together. ” - Vincent Van Gogh ',



'”The hard days are what make you stronger.” - Aly Raisman',



'”You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” - George Lorimer ',









'”Happiness is not something ready made. It comes from your own actions.” - Dalai Lama XIV',



'”If we have the attitude that it’s going to be a great day it usually is.” - Catherine Pulsifer',



'”impossible is just an opinion. ” - Paulo Coelho ',



'”Your passion is waiting for your courage to catch up.” - Isabelle Lafleche ',



'”If something is important enough, even if the odds are stacked against you, you should still do it.” - Elon Musk'






];


btn.onclick = function(){
    let randon = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randon;
} 



