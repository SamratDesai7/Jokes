let joke = document.getElementById("joke");
let tell;
let RandomJoke = [Math.floor(Math.random() * 40 )];
tell = [`Why don't scientists trust atoms? 
    Because they make up everything!`,
`Why did the scarecrow win an award? 
Because he was outstanding in his field!`,

`How does a penguin build its house? 
 Igloos it together!`,
 
 `Why don't skeletons fight each other? 
hey don't have the guts!`,

`What do you call fake spaghetti?  
An impasta!`
,`Why don't scientists trust atoms? Because they make up everything!`
,`Why did the scarecrow win an award? Because he was outstanding in his field!`
,`Why don’t skeletons fight each other? They don’t have the guts.`
,`What do you get when you cross a snowman and a vampire? Frostbite.`
,`Why did the bicycle fall over? Because it was two-tired!`
,`Why did the math book look sad? Because it had too many problems.`
,`Why can’t you give Elsa a balloon? Because she will let it go.`
,`How does a penguin build its house? Igloos it together.`
,`Why don’t some couples go to the gym? Because some relationships don’t work out.`
, `Why was the stadium so cool? Because it was filled with fans.`
,`What do you call fake spaghetti? An impasta.`
,`How do you organize a space party? You planet.`
,`What did the grape do when he got stepped on? Nothing, he just let out a little wine.`
,`Why do cows have hooves instead of feet? Because they lactose.`
,`Why did the golfer bring an extra pair of pants? In case he got a hole in one.`
,`What do you call cheese that isn't yours? Nacho cheese.`
,`What’s orange and sounds like a parrot? A carrot.`
,`Why did the computer go to the doctor? Because it had a virus.`
,`What do you call an alligator in a vest? An investigator.`
, `Why don’t scientists trust atoms? Because they make up everything!`
, `Why was the math book sad? Because it had too many problems.`
, `What did one ocean say to the other ocean? Nothing, they just waved.`
, `Why don’t oysters share their pearls? Because they’re shellfish.`
, `Why don’t eggs tell jokes? They’d crack each other up.`
, `What happens when you go to the bathroom in France? European.`
, `What did the buffalo say to his son when he left for college? Bison.`
, `Why did the scarecrow win an award? Because he was outstanding in his field!`
, `Why did the tomato turn red? Because it saw the salad dressing.`
, `Why did the coffee file a police report? It got mugged.`
, `What did the big flower say to the little flower? Hey, bud!`
, `How do you make a tissue dance? You put a little boogie in it.`
, `What do you call a bear with no teeth? A gummy bear.`
, `Why can’t you give Elsa a balloon? Because she will let it go.`
, `Why don’t some couples go to the gym? Because some relationships don’t work out.`
, `What do you call a fish with no eyes? Fsh.`
, `How does a penguin build its house? Igloos it together.`
, `Why did the bicycle fall over? Because it was two-tired!`
, `What do you call an elephant that doesn’t matter? An irrelephant.`
, `Why was the stadium so cool? Because it was filled with fans.`
, `What do you get if you cross a snowman and a dog? Frostbite.`
][RandomJoke]


joke.innerHTML = tell;
let showjoke = () => {

    location.reload();
}