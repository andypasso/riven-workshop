import AatroxSquare from '../../../assets/img/champions/AatroxSquare.jpg'
import AkaliSquare from '../../../assets/img/champions/AkaliSquare.png'


const matchups = [
  {
  name:"Aatrox",

  image:AatroxSquare,
  
  crucial:"Aatrox has got a lot of damage once his spells hit, so try to avoid getting hit by his spells as much as possible. If you get hit in by the darker red part of his abilities, they'll crit and knock you up (and that part also does more damage)- you definitely don't want that to happen. Thats also why the use of 2nd Q and E plays a much bigger role in this matchup than in most others. Be aware of his E since he is able to use it while Q’ing, allowing him to reposition his Q. Try to be well positioned and dont dodge his spells in a straight line but rather sideways (works well vs 1st Q, against 2nd Q it‘s either sideways or straight line depending on your positioning obviously) ",
  lvl1:"Level 1: Care about Aatrox cheesing in bushes when you walk to lane, his Q hurts a lot. Else you just don’t wanna get caught by his spells, it doesn’t really matter if you start Q or E level 1. You can go for a short Q combo but only if you’re sure you won’t get hit by his spells in return. His first 2 levels are a bit stronger than yours due to his slightly higher range. Try focus on cs and wait for your later powerspikes.",
  lvl3:"Level 3: If she has shroud you cant fight back, try to bait the shroud and just wait it out afterwards. You should try to always use your shield not just as a dash because her dmg is insane so you should block as much as possible. Don't let her re-engage afterwards with E.",
  lvl6:"Level 6: Make sure she doesn't dodge your R2 with her R1/R2. You win an all in if you play around shroud CD. Be careful about picking the correct time to all in because she can just E away and force you to use more dashes to reach her. Do not try to reach her if she does this instead of commiting to the fight because you will definitely lose afterwards unless you are ahead."
},
{
  name:"Akali",
  image:AkaliSquare,

  crucial: "  Akali can E her shroud, shes locked out of R2 for a short while after using R1 ",
  lvl1:"Level 1: Her Q costs are huge and you only get slowed if you are on the edge of the range so you can definitely go for a quick trade here or just sit back and wait for levels",
  lvl3:"If she has shroud you cant fight back, try to bait the shroud and just wait it out afterwards. You should try to always use your shield not just as a dash because her dmg is insane so you should block as much as possible. Don't let her re-engage afterwards with E.",
  lvl6:"Level 6: Since his R no longer gives him an instant revive, you have a very good chance of killing him level 6. Wait for him to waste an ability like E or W and all in him immediately. Try to dodge his 3rd Q with your E or Q. You're pretty guaranteed to win the all-in if you play it right.",
  tldr: " Don't try to fight if she has shroud, bait it and play around that CD, care for her dodging your wave with her R1/R2."
},
{
  name:"Sett",

  state:  'const [SettModal, setSettModal] = React.useState(false)',
  modal: 'SettModal',
  setModalTrue: 'setSettModal(true)',
  setModalFalse: 'setSettModal(false)',


  image:AatroxSquare,
  crucial: "SETT.",
  lvl1:"Level 1: Care about Aatrox cheesing in bushes when you walk to lane, his Q hurts a lot. Else you just don’t wanna get caught by his spells, it doesn’t really matter if you start Q or E level 1. You can go for a short Q combo but only if you’re sure you won’t get hit by his spells in return. His first 2 levels are a bit stronger than yours due to his slightly higher range. Try focus on cs and wait for your later powerspikes.",
  lvl3:"Level 3: Now you can trade Aatrox much better cause you’re decently mobile, still you should keep at least a Q and your E up to be able to escape or dodge his W so you won’t be pulled back into a bad trade. Note that his W stops when it hits minions, which is why you usually want to trade inside your creeps. If you manage to dodge almost everything you should be able to get off a good trade. Aatrox can easily bully you out of lane if he just gets to hit a few spells, so having some sustain or CDR in lane surely helps out.",
  lvl6:"Level 6: Since his R no longer gives him an instant revive, you have a very good chance of killing him level 6. Wait for him to waste an ability like E or W and all in him immediately. Try to dodge his 3rd Q with your E or Q. You're pretty guaranteed to win the all-in if you play it right.",
  tldr: "His laning is very strong but very punishable. If you aren't confident in yourself, it’s better to just farm up and wait for your jungler to gank. Try to dodge as many spells as you can and safely punish him for using spells. Don’t get bullied out of lane and work as a teamplayer by roaming and helping out others. If you play safe, you shouldn't die in this lane."
},
]

export default matchups