# MapleStory Classic World quiz candidates

Scope: MapleStory Classic World, Nexon's official pre-Big Bang style server (Founder's Access Oct 6, 2026; Grand Launch Oct 21, 2026). Level cap 100, 1st job at 10, 2nd job at 30, no 3rd/4th job. Victoria Island content only.

Source: every question cites a page on meowdb.com/msclassic (the Classic World database). The sandbox could not open pages directly, so each quote is the search tool's excerpt of the page, not raw page text. Spot-check any question against its URL before shipping.

Caveats found during research:
- Classic World rebalanced many numbers versus old GMS. Mushmom is level 40, Jr. Balrog is level 80, Red Potion heals 100, Elixir heals 35%, Haste maxes at +30 speed / +10 jump. Old memory is wrong.
- The existing quiz question says "Green Slime". Classic World names the monster "Slime" (level 6, 115 HP, 12 EXP). Zombie Mushroom at 45 EXP checks out.
- Zombie Mushmom level conflicts between two meowdb pages (50 vs 55). Avoid quizzing its level.
- Dark Sight's Disorder prerequisite is ambiguous after an Oct 15 patch (description says 1, real requirement reportedly 3). Skip it.
- Monster HP values shift with patches (Drake changed Oct 29). Prefer levels, weaknesses, drops, and maps over HP.
- Moon Bunny's Rice Cake PQ is a time-limited event, so its question will go stale in December.

## Suggested top 20

Balanced across categories, medium difficulty, stable facts. Alternates listed after.

| # | Category | Question | Answer |
|---|---|---|---|
| 1 | map | The snail boss Mano roams which Victoria Island map? | Thicket Around the Beach III |
| 2 | map | The original Mushmom spawns in which hidden map near Henesys? | Someone Else's House |
| 3 | map | The boss Stumpy spawns in which map? | Parched Land |
| 4 | quest_level | At what level does the Kerning City Party Quest unlock? | 21 |
| 5 | quest_level | The Sauna Robe chain (Mr. Wetbottom's Secret Book) starts at which level? | 32 |
| 6 | quest_level | At what level does Alex the Runaway Kid become available? | 18 |
| 7 | quest_reward | What equipment does the final step of Mr. Wetbottom's Secret Book reward? | A Sauna Robe |
| 8 | quest_reward | Arwen and the Glass Shoe gives one of two random items. Which pair? | Piece of Ice or Fairy Wing |
| 9 | quest_reward | How many mesos does Shumi's Lost Sack of Cash pay out? | 10,000 |
| 10 | skill | At max level, what does Haste give for 300 seconds? | Speed +30 and Jump +10 |
| 11 | skill | What does Cleric's Heal do besides restoring party HP? | Damages undead monsters |
| 12 | skill | At max level (15), how much HP damage does Magic Guard move to MP? | 80% |
| 13 | sp_prereq | How many levels of Haste does a Bandit need before learning Steal? | 5 |
| 14 | sp_prereq | How many levels of Sword Mastery before Sword Booster? | 5 |
| 15 | sp_prereq | Which skill must be at level 5 before a Cleric can learn Bless? | Invincible |
| 16 | lore | Why did Alex run away from home? | A fight with his strict father, Chief Stan |
| 17 | lore | What does Chief Stan give you to take to Alex? | His late mother's Old Gold Watch |
| 18 | lore | Which fairy in Ellinia gives you the Flying Medicine for Icarus? | Wing the Fairy |
| 19 | monster_pq | Which element is the Fire Boar weak to? | Ice |
| 20 | monster_pq | What item does King Slime drop in Kerning City PQ? | Squishy Shoes |

Alternates worth considering: Elixir restores 35% (surprising to veterans), Jr. Balrog is level 80, Teo in Lith Harbor wants a Sparkling Rock for Maya, Rage max gives +40 ATT / -40 DEF, Thief Job Instructor is at Construction Site North of Kerning City, max character level is 100.

## Implementation note

The current `Question` component takes a numeric answer plus a unit. Roughly half the bank has string answers (map names, NPCs, items), so the component needs to accept string options before these can ship. That is a separate PR from adding questions.

## Full bank

Total: 97 (97 verified, 0 unverified). Scope: pre-Big Bang GMS.


## item_economy

**1. How much HP does a Red Potion restore?**  
Answer: **100 HP**  
Wrong options: 50 HP, 150 HP, 200 HP, 250 HP  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/item-db/270  
> The Red Potion (item ID 270) restores 100 HP  
Notes: Old GMS was 50 HP.  

**2. How many mesos does a Red Potion cost from most NPC shops?**  
Answer: **50 mesos**  
Wrong options: 25 mesos, 100 mesos, 150 mesos, 220 mesos  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/item-db/270  
> Most NPC shops sell it for 50 mesos.  

**3. What is the maximum character level in MapleStory Classic World?**  
Answer: **Level 100**  
Wrong options: Level 70, Level 120, Level 150, Level 200  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/guides/what-is-maplestory-classic-worlds  
> Nexon's Founder's Access release notes set the maximum character level at Lv. 100, with 1st Job Advancement at level 10 and 2nd Job Advancement at level 30.  

**4. What percentage of your HP and MP does an Elixir restore?**  
Answer: **35%**  
Wrong options: 25%, 50%, 75%, 100%  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/item-db/274  
> Elixir: restoring 35% of your HP and MP, and it has a 30-second cooldown.  
Notes: Old GMS was 50%.  

**5. Which NPC sells Pet Food at the cheapest listed price of 30 mesos?**  
Answer: **Doofus in Henesys**  
Wrong options: Valen in Florina Beach, Mina in Lith Harbor, Arturo in Perion, Mr. Smith in Henesys  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/item-db/269  
> Doofus (Henesys, Victoria Road): The Pet Food Merchant lists it at 30 mesos  
Notes: Valen in Florina Beach sells it at 40; department store NPCs at 35.  

**6. How much HP does an Orange Potion restore?**  
Answer: **250 HP**  
Wrong options: 100 HP, 150 HP, 500 HP, 300 HP  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/item-db/271  
> Orange Potion (item 271): It restores 250 HP.  

**7. How much HP does a White Potion restore?**  
Answer: **500 HP**  
Wrong options: 300 HP, 400 HP, 1,000 HP, 250 HP  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/item-db/272  
> The item page lists its effect as restoring 500 HP.  
Notes: Vendor price 350 mesos.  

**8. How much MP does a Blue Potion restore?**  
Answer: **200 MP**  
Wrong options: 100 MP, 150 MP, 300 MP, 500 MP  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/item-db/273  
> Blue Potion (item 273): It restores 200 MP. Its shop price is 220 mesos  

**9. What does a Power Elixir restore?**  
Answer: **100% of HP and MP**  
Wrong options: 35% of HP and MP, 50% of HP and MP, 70% of HP and MP, 100% of HP only  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/item-db/275  
> Power Elixir (item 275): It restores 100% of HP and MP, but has a cooldown.  

**10. What is the required level of the Blue Sauna Robe?**  
Answer: **Level 30**  
Wrong options: Level 10, Level 20, Level 40, Level 50  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/item-db/1105  
> The item database lists the Blue Sauna Robe at a level 30 requirement with 10 upgrade slots.  

**11. How many upgrade slots does the Blue Sauna Robe have?**  
Answer: **10**  
Wrong options: 5, 7, 8, 12  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/item-db/1105  
> The item database lists the Blue Sauna Robe at a level 30 requirement with 10 upgrade slots.  

**12. After a character on a new account reaches level 15, how long until all trading opens?**  
Answer: **24 hours**  
Wrong options: 1 hour, 6 hours, 12 hours, 72 hours  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/item-db/3161  
> New accounts have a trade restriction. All trading opens 24 hours after a character on the account reaches Lv. 15.  
Notes: Cites the Grand Launch release notes second-hand.  


## lore

**13. What does Chief Stan give you to take to Alex at the end of the Alex the Runaway Kid chain?**  
Answer: **His late mother's Old Gold Watch**  
Wrong options: A Blue Potion pouch, A Henesys town map, The Dark Lord's Signature, A Weighted Earring  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/quest-tracker/10302  
> Chief Stan in Henesys gives you Old Gold Watch to deliver to Alex in Kerning City... a keepsake of his mother Anna.  

**14. Which NPC at the Bowman Instructional School gives you the letter for your 2nd job test?**  
Answer: **Athena Pierce**  
Wrong options: Grendel the Really Old, Dances with Balrog, Kyrin, Dark Lord  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/quest-tracker/20200  
> Athena Pierce is based at the Bowman Instructional School... She starts the quest chain at level 30 and gives the letter that sends you onward  

**15. Which NPC in the Magic Library starts The Magician's Next Journey and sends you off with a letter?**  
Answer: **Grendel the Really Old**  
Wrong options: Athena Pierce, Dances with Balrog, Dark Lord, Arwen the Fairy  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/quest-tracker/20100  
> The Magician's Next Journey starts with him at level 30. Grendel sends you to the Magician Job Instructor north of Ellinia with a letter.  

**16. Which NPC at the Warriors' Sanctuary starts The Warrior's Next Journey?**  
Answer: **Dances with Balrog**  
Wrong options: Grendel the Really Old, Athena Pierce, Chief Stan, Mr. Wetbottom  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/quest-tracker/20001  
> Dances with Balrog starts The Warrior's Next Journey at level 30+  

**17. What item does Sabitrama of Sleepywood ask for in the first quest of his diet-medicine line?**  
Answer: **A Pink Anthurium**  
Wrong options: Double-Rooted Red Ginseng, A Sparkling Rock, Arwen's Glass Shoe, A Piece of Ice  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10509  
> Sabitrama and the Diet Medicine is a level 25+ quest that asks for one Pink Anthurium... Sabitrama's Anti-Aging Medicine ... needs Double-Rooted Red Ginseng.  

**18. In Kerning City PQ stage 2, which NPC does the leader check the rope arrangement with?**  
Answer: **Cloto**  
Wrong options: Lakelis, Nella, Shumi, Alex  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/guides/kerning-city-party-quest-kpq-guide  
> Stage 2 has a rope puzzle where the leader checks the arrangement with Cloto  
Notes: Lakelis is the real Proof of Companionship NPC, so a strong distractor.  

**19. Why did Alex, the kid in Kerning City, run away from home?**  
Answer: **A fight with his strict father, Chief Stan of Henesys**  
Wrong options: He wanted to become a Thief under the Dark Lord, His mother's gold watch was stolen, He got lost after a Lith Harbor ship trip, He went looking for treasure in Sleepywood  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10300  
> Alex ran away after a fight with his father, Chief Stan of Henesys... In his own dialogue he describes his father as very strict  

**20. In Maya and the Weird Medicine, which Lith Harbor NPC wants a Sparkling Rock before handing over the medicine?**  
Answer: **Teo**  
Wrong options: Chief Stan, Sabitrama, Arwen, Icarus  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10106  
> A girl named Maya in Henesys Townstreet has been ill for a long time. Her request sends the player to Teo in Lith Harbor, who wants a Sparkling Rock before he hands over the medicine.  

**21. In the Icarus questline, which fairy in Ellinia gives you the Flying Medicine?**  
Answer: **Wing the Fairy**  
Wrong options: Arwen the Fairy, Rowen the Fairy, Athena Pierce, Maya  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10320  
> Wing the Fairy in Ellinia gives you Flying Medicine to deliver to Icarus in Kerning City.  

**22. Which monster drops Arwen's Glass Shoe?**  
Answer: **Fire Boar**  
Wrong options: Jr. Yeti, Lunar Pixie, Stirge, Slime  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10200  
> Arwen the Fairy in Ellinia asking you to bring Arwen's Glass Shoe... Fire Boars drop it.  

**23. Where in Sleepywood does Mr. Wetbottom start his Secret Book questline?**  
Answer: **The VIP Sauna**  
Wrong options: The Ant Tunnel entrance, The Tree Tunnel, The Sleepywood Hotel lobby, Kerning City Subway  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10500  
> Mr. Wetbottom in Sleepywood is going through hard times... A Clue to the Secret Book, step 1 of 9. He's in the VIP Sauna  
Notes: The Tree Tunnel is where Ronnie, the final-step NPC, stands.  

**24. In the 2nd job tests, how many Dark Marbles do you collect before trading them for The Proof of a Hero?**  
Answer: **30**  
Wrong options: 10, 20, 50, 100  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/guides/warrior-class-guide  
> you enter the test, defeat the monsters, and collect 30 Dark Marbles. You then return with The Proof of a Hero  
Notes: Reworded to a numeric answer.  


## map

**25. In which town do you find Lakelis, the NPC who starts the Kerning City Party Quest?**  
Answer: **Kerning City**  
Wrong options: Henesys, Ellinia, Perion, Lith Harbor  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/npcs/800000  
> The Lakelis NPC page lists the location as Kerning City Victoria Road.  
Notes: Probably too easy.  

**26. The original Mushmom boss spawns in which hidden map near Henesys?**  
Answer: **Someone Else's House**  
Wrong options: The Grave of Mushmom, Someone Else's Grave, The Blue Mushroom Forest, The Field South of Ellinia  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/monsters/700000  
> Mushmom (original): Its spawn is in Someone Else's House, a Hidden Street near Henesys... the hidden map behind Pig Park II.  
Notes: Rotten Mushmom uses Someone Else's Grave; Zombie Mushmom uses The Grave of Mushmom.  

**27. Where is the Warrior Job Instructor who runs the 2nd job Dark Marble test?**  
Answer: **West Rocky Mountain IV**  
Wrong options: Warriors' Sanctuary, East Rocky Mountain II, Parched Land, Land of Wild Boar  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/npcs/514  
> The Warrior Job Instructor is in West Rocky Mountain IV on Victoria Road, near Perion.  

**28. Where do you find the Magician Job Instructor after receiving Grendel's letter?**  
Answer: **The Forest North of Ellinia**  
Wrong options: The Field South of Ellinia, Magic Library, The Tree That Grew I, L Forest I  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/npcs/319  
> The Magician Job Instructor is in The Forest North of Ellinia on Victoria Road, not in Ellinia town itself.  

**29. Where is the Thief Job Instructor who holds the Dark Marble test?**  
Answer: **Construction Site North of Kerning City**  
Wrong options: Thieves' Hideout, Kerning City Civic Center, Line 1 <Area 1>, B2 <Subway Depot>  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/npcs/424  
> Thief Job Instructor location: This NPC is at the Construction Site North of Kerning City.  

**30. The boss Stumpy spawns in which map?**  
Answer: **Parched Land**  
Wrong options: Land of Wild Boar, East Rocky Mountain II, Over the Wall, L Forest I  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/monsters/700007  
> One result places Stumpy in Parched Land, next to East Rocky Mountain V... Axe Stumps, Dark Axe Stumps and Jr. Boogies share the map.  
Notes: Stumpy is level 35 with 19,220 HP in Classic World.  

**31. The snail boss Mano roams which Victoria Island map?**  
Answer: **Thicket Around the Beach III**  
Wrong options: The Pig Beach, Land of Wild Boar, Parched Land, The Blue Mushroom Forest  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/monsters/700004  
> Mano's spawn point is in Thicket Around the Beach III on Victoria Road... known to roam about thicket around the beach next to Lith Harbor.  

**32. Zombie Mushmom spawns in which dungeon map next to Ant Tunnel Park?**  
Answer: **The Grave of Mushmom**  
Wrong options: Someone Else's House, Someone Else's Grave, Deep Ant Tunnel I, Sleepy Dungeon IV  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/maps/010005078  
> Zombie Mushmom | 55 | 66,640 | 668 | The Grave of Mushmom Next to Ant Tunnel Park.  
Notes: CONFLICT: this result says level 55 / 66,640 HP; an earlier search of the monster table said level 50 / 57,420 HP. Map name is consistent; do not quiz the level.  

**33. Athena Pierce, the Bowman instructor, is found in which Henesys map?**  
Answer: **Bowman Instructional School**  
Wrong options: Warriors' Sanctuary, Thieves' Hideout, Kerning City Civic Center, The Forest North of Ellinia  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/maps/010001051  
> Athena Pierce is in the Bowman Instructional School in Henesys... Her map page lists her as the only NPC there.  

**34. Dances with Balrog stands in which map?**  
Answer: **Warriors' Sanctuary**  
Wrong options: West Rocky Mountain IV, Thieves' Hideout, Bowman Instructional School, East Rocky Mountain II  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/npcs/511  
> Dances with Balrog is located in Warriors' Sanctuary on Victoria Road, Victoria Island  

**35. The Dark Lord resides in which map?**  
Answer: **Thieves' Hideout**  
Wrong options: Kerning City Civic Center, Construction Site North of Kerning City, Warriors' Sanctuary, Bowman Instructional School  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/npcs/411  
> The Dark Lord's home is the Thieves' Hideout... the Thief trainer beneath the Fusion Jazz Bar in Kerning City.  

**36. Grendel the Really Old is found in which Ellinia building?**  
Answer: **Magic Library**  
Wrong options: Bowman Instructional School, Thieves' Hideout, Warriors' Sanctuary, Kerning City Civic Center  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/npcs/313  
> Grendel the Really Old is in the Magic Library on Victoria Road, in Ellinia.  


## monster_pq

**37. Which element is the Fire Boar weak to?**  
Answer: **Ice**  
Wrong options: Fire, Holy, Lightning, Poison  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/monsters/30  
> Fire Boar lists it as resistant to fire and weak to ice.  

**38. How many players does the Kerning City Party Quest require?**  
Answer: **4**  
Wrong options: 2, 3, 5, 6  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/guides/kerning-city-party-quest-kpq-guide  
> The party quest must be attempted by a party of four adventurers, all level 21 or higher.  
Notes: Duplicate of quest_level KPQ question reworded to player count.  

**39. What level is Jr. Balrog?**  
Answer: **80**  
Wrong options: 43, 60, 70, 100  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/monsters/700001  
> Jr. Balrog is Level 80 on MeowDB's MapleStory Classic pages. ... Its map is The Cursed Sanctuary, next to Sanctuary Entrance IV, with a 3 hour respawn.  
Notes: Old GMS value was 43.  

**40. What level is the boss Faust?**  
Answer: **65**  
Wrong options: 45, 55, 75, 85  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/monsters/700008  
> Faust (MapleStory Classic) lists it as a level 65 boss with about 116,580 HP.  

**41. Which two elements is the Jr. Wraith weak to?**  
Answer: **Holy and Fire**  
Wrong options: Ice and Lightning, Holy and Ice, Fire and Poison, Lightning and Holy  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/monsters/32  
> Jr. Wraith at level 34 with 982 HP. It is weak to Holy and Fire attacks.  

**42. What level is the boss Stumpy?**  
Answer: **35**  
Wrong options: 20, 28, 42, 50  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/monsters/700007  
> Stumpy is a level 35 monster with 19,220 HP and 276 EXP per kill in MapleStory Classic World.  

**43. Which element is Stumpy weak to?**  
Answer: **Fire**  
Wrong options: Ice, Lightning, Poison, Holy  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/monsters/700007  
> Elemental affinity: Weak to fire, strong against lightning.  

**44. What level is the boss Mano?**  
Answer: **20**  
Wrong options: 8, 12, 25, 32  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/monsters/700004  
> Mano is a Level 20 boss with 7,420 HP and 148 EXP per kill.  

**45. What level is the regular Drake?**  
Answer: **50**  
Wrong options: 30, 40, 60, 70  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/monsters/45  
> The Drake monster page on MeowDB lists it at level 50 with 2,950 HP ... HP reduced from 3,218 to 2,950 in an October 29, 2026 patch.  
Notes: Reworded from HP to level since HP changed by patch.  

**46. Which element is the Red Drake weak to?**  
Answer: **Ice**  
Wrong options: Fire, Holy, Lightning, Poison  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/monsters/50  
> Red Drake (level 60): HP 5,184, and it is weak to Ice.  

**47. What item does the Kerning City Party Quest boss King Slime drop?**  
Answer: **Squishy Shoes**  
Wrong options: Companion's Magic Box, Slime Bubble, Pan Lid, Blue Snail Shell  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/monsters/800003  
> The one confirmed drop is the Squishy Shoes, which are dropped by King Slime.  
Notes: Companion's Magic Box is the PQ completion reward, not a drop. King Slime is level 32 with 16,820 HP.  

**48. How many stages does the Kerning City Party Quest have?**  
Answer: **5**  
Wrong options: 3, 4, 6, 8  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/guides/kerning-city-party-quest-kpq-guide  
> four players and five stages ending on King Slime  
Notes: Stage count stated in the guide summary.  


## quest_level

**49. At what level does the Kerning City Party Quest unlock in Classic World?**  
Answer: **21**  
Wrong options: 10, 15, 25, 30  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/guides/kerning-city-party-quest-kpq-guide  
> The minimum level for Kerning City Party Quest (KPQ) is 21, and a party of four is needed. ... it unlocks at level 21 with no max level.  
Notes: Classic World has no level 30 cap, unlike old GMS 21-30.  

**50. The three Jane the Alchemist challenge quests (First, Second, Final) require which level in Classic World?**  
Answer: **44**  
Wrong options: 35, 40, 50, 55  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10003  
> Jane's First Challenge (step 1 of 3): Level 44+, with the prerequisite of completing Jane and the Mushroom.  

**51. At what level can you start Sabitrama and the Diet Medicine (Forest of Patience, Sleepywood)?**  
Answer: **25**  
Wrong options: 15, 20, 30, 35  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10509  
> Sabitrama and the Diet Medicine (Sleepywood): Level 25+.  

**52. At what level is Arwen and the Glass Shoe (Arwen the Fairy, Ellinia) available?**  
Answer: **29**  
Wrong options: 21, 25, 32, 35  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10200  
> The Arwen and the Glass Shoe quest requires level 29+. It's given by Arwen the Fairy in Ellinia.  
Notes: Quest is named 'Arwen and the Glass Shoe' (singular) in the tracker.  

**53. At what level can you take Icarus and the Balloon (the Kerning City quest for Alligator Skin Pouches and Tablecloths)?**  
Answer: **31**  
Wrong options: 21, 25, 28, 35  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10318  
> The Icarus and the Balloon quest in MapleStory Classic requires level 31. ... The turn-in asks for 10 Alligator Skin Pouches and 50 Tablecloths.  
Notes: Source URL is best match among Icarus pages 10318-10320; not cross-checked against the exact page.  

**54. At what level can you start Shumi's Lost Coin, the first Construction Site B1 quest in Kerning City?**  
Answer: **35**  
Wrong options: 25, 28, 30, 40  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10312  
> The first part, [Construction Site B1] Shumi's Lost Coin, requires level 35 or higher.  

**55. At what level does the Moon Bunny's Rice Cake Thanksgiving party quest open in Classic World?**  
Answer: **11**  
Wrong options: 1, 5, 15, 21  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/events  
> The event listing shows a Level: 11+ requirement.  
Notes: Time-limited event, mid-November to early December 2026.  

**56. In MapleStory Classic World, at what level can a Beginner start Pio's Collecting Recycled Goods on Maple Island?**  
Answer: **5**  
Wrong options: 1, 3, 8, 10  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/1012  
> It's a Maple Island quest for Beginners at level 5+. Pio in Amherst asks you to bring Rusty Screw x2 and Old Wooden Board x2.  
Notes: Classic World value.  

**57. At what level does Alex the Runaway Kid, the Kerning City questline starting with Alex's Request, become available in Classic World?**  
Answer: **18**  
Wrong options: 15, 21, 25, 27  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10300  
> Its first step, Alex's Request, requires Level 18+, and it starts with Alex in Kerning City.  
Notes: Later steps in the chain are level 27, so word the question about the first step.  

**58. What level is required to start Jane and the Mushroom, the opening quest of the Jane the Alchemist chain?**  
Answer: **20**  
Wrong options: 10, 15, 25, 30  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10002  
> Jane and the Mushroom (the starter): Level 20+.  

**59. At what level can you take Maya and the Weird Medicine, the Henesys quest to cure Maya?**  
Answer: **21**  
Wrong options: 10, 15, 25, 30  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10106  
> Its level requirement is Level 21+. Every step in the questline has the same requirement, including the final delivery step.  
Notes: Collecting For Maya quests branch off at level 30.  

**60. The Sauna Robe chain, Mr. Wetbottom's Secret Book, starts at which level?**  
Answer: **32**  
Wrong options: 25, 28, 35, 40  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10500  
> The first step, "A Clue to the Secret Book," requires level 32 or higher. Mr. Wetbottom A Clue to the Secret Book Lv 32+ - Sleepywood  


## quest_reward

**61. What equipment does the final step of Mr. Wetbottom's Secret Book reward?**  
Answer: **A Sauna Robe (Blue for male, Red for female)**  
Wrong options: Bathrobe, Old Raggedy Cape, Weighted Earrings, Squishy Shoes  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/quest-tracker/10508  
> turning it in lists a Male Blue Sauna Robe or a Female Red Sauna Robe as rewards, along with 5,850 EXP and 1,023 mesos.  
Notes: Reworded from the meso question for a friendlier variant.  

**62. How much EXP does Mai's Final Training on Maple Island reward?**  
Answer: **120 EXP**  
Wrong options: 80 EXP, 200 EXP, 150 EXP, 12 EXP  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/quest-tracker/1010  
> Mai's Final Training (step 2 of 2): Rewards: 120 EXP, 150 mesos, Egg x10. The objective is to hunt one Orange Mushroom.  

**63. How many mesos does the final step of Mr. Wetbottom's Secret Book give, alongside a Sauna Robe and 5,850 EXP?**  
Answer: **1,023 mesos**  
Wrong options: 823 mesos, 1,203 mesos, 1,523 mesos, 2,023 mesos  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10508  
> turning it in lists a Male Blue Sauna Robe or a Female Red Sauna Robe as rewards, along with 5,850 EXP and 1,023 mesos.  

**64. How much EXP does 'Arwen and the Glass Shoe' give?**  
Answer: **4,430 EXP**  
Wrong options: 3,430 EXP, 4,030 EXP, 5,430 EXP, 6,720 EXP  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10200  
> Rewards: 4,430 EXP, 921 mesos; One random reward, split 50/50 between a Piece of Ice and a Fairy Wing.  

**65. How much EXP does 'Sabitrama and the Diet Medicine' reward?**  
Answer: **3,060 EXP**  
Wrong options: 2,060 EXP, 3,600 EXP, 4,060 EXP, 12,900 EXP  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10509  
> Rewards: 3,060 EXP, 804 mesos, and +1 Fame. The random item reward is one of two Overall Armor DEF Scrolls.  

**66. Which item is the reward for 'Sabitrama's Anti-Aging Medicine' (with 12,900 EXP, 1,579 mesos and +2 Fame)?**  
Answer: **Star Rock**  
Wrong options: Moon Rock, Sun Rock, Pink Anthurium, Double-Rooted Red Ginseng  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10509  
> Sabitrama's Anti-Aging Medicine, which requires level 50 and a Double-Rooted Red Ginseng. Its rewards are 12,900 EXP, 1,579 mesos, +2 Fame, and a Star Rock.  

**67. How much EXP does 'Camila's Gem' give?**  
Answer: **2,750 EXP**  
Wrong options: 1,750 EXP, 2,570 EXP, 3,750 EXP, 4,430 EXP  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10105  
> The quest's reward is 2,750 EXP and 775 mesos, plus one random item: Cake x30 at 70% or Pig Illustrated x1 at 30%.  

**68. How much EXP does 'Maya's Second Collection' reward?**  
Answer: **4,780 EXP**  
Wrong options: 3,780 EXP, 4,430 EXP, 5,780 EXP, 4,870 EXP  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/quest-tracker/10116  
> The reward for Maya's Second Collection is 4,780 EXP, 965 mesos, and 30 Blue Potions.  

**69. Besides 813 EXP and 497 mesos, what item does 'Pia and the Blue Mushroom' reward?**  
Answer: **A random Hat Accuracy Scroll**  
Wrong options: A Blue Mushroom Cap, A random Overall DEX Scroll, Blue Potion x15, A Pig Illustrated  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10104  
> The quest's reward is 813 EXP and 497 mesos, plus one random Hat Accuracy Scroll.  

**70. In the Alex the Runaway Kid questline, what potion reward does step 2 ('Talking to Stan') give?**  
Answer: **Blue Potion x15**  
Wrong options: Blue Potion x30, White Potion x15, Mana Elixir x15, Red Potion x15  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10301  
> Step 2, Talking to Stan: 1,170 EXP, 585 mesos, and Blue Potion x15.  

**71. 'Arwen and the Glass Shoe' gives one of two random items. Which pair?**  
Answer: **Piece of Ice or Fairy Wing**  
Wrong options: Star Rock or Moon Rock, Pink Anthurium or Red Ginseng, Hat Accuracy Scroll or Overall DEX Scroll, Cake x30 or Pig Illustrated  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10200  
> One random reward, split 50/50 between a Piece of Ice and a Fairy Wing.  

**72. How many mesos does the final 'What Shumi Lost' step (Shumi's Lost Sack of Cash, Construction Site B3) pay out?**  
Answer: **10,000 mesos**  
Wrong options: 1,111 mesos, 5,000 mesos, 12,222 mesos, 20,000 mesos  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10314  
> Step 3 (Construction Site B3, Shumi's Lost Sack of Cash): The reward is 6,720 EXP, 10,000 mesos, 3 Fame, and 30 Mana Elixirs.  

**73. What potion reward does Shumi's Lost Sack of Cash (Construction Site B3) give?**  
Answer: **30 Mana Elixirs**  
Wrong options: 30 Blue Potions, 30 White Potions, 15 Mana Elixirs, 30 Elixirs  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10314  
> The reward is 6,720 EXP, 10,000 mesos, 3 Fame, and 30 Mana Elixirs.  
Notes: Same page as the previous question.  

**74. Which equipment item is the reward for 'Mystery of Niora Hospital' step 2 (Stranger's Identity)?**  
Answer: **Old Raggedy Cape**  
Wrong options: Blue Sauna Robe, Weighted Earrings, Green Mushroom Cap, Frameless Glasses  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/quest-tracker/10310  
> Step 2, Stranger's Identity (Lv 23+): asks for 50 Zombie Mushrooms and 25 Charm of the Undead, and rewards 2,430 EXP, 745 mesos, and an Old Raggedy Cape.  


## skill

**75. What does Cleric's Heal do besides restoring party HP?**  
Answer: **Damages undead monsters in its area**  
Wrong options: Cures all status ailments, Revives fallen party members, Raises party max HP, Reflects damage back to monsters  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/skills/cleric/heal  
> Heal recovers the HP of all party members around the area... undead monsters around the area will receive damage.  

**76. Which Thief skill throws two throwing stars at a single enemy?**  
Answer: **Lucky Seven**  
Wrong options: Steal, Disorder, Savage Blow, Double Stab  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/skills/thief/lucky-seven  
> a projectile attack that throws two throwing stars at one enemy in front of you... max level 20, costs 16 MP and deals 140% skill damage per hit, 2 hits per target.  

**77. What happens to a Thief using Dark Sight?**  
Answer: **They hide in the shadows and cannot attack or be attacked**  
Wrong options: They become invincible but can still attack, They teleport behind the nearest monster, They gain 100% critical rate, They turn into a monster  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/skills/thief/dark-sight  
> consumes MP to hide in the shadows. While hidden, the character cannot be attacked and cannot attack.  

**78. What does the Spearman's Iron Will do at max level (Lv 30)?**  
Answer: **Weapon Defense +50 and a 35% chance to ignore knockback, for 300 seconds**  
Wrong options: Weapon Defense +50 and a 35% chance to ignore knockback, for 150 seconds, Weapon Defense +30 and Magic Defense +30 for 300 seconds, Max HP +50% for 300 seconds, Weapon Defense +50 and a 100% chance to ignore knockback for 300 seconds  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/skills/spearman/iron-will  
> Level 30 (MAX) MP -25; Weapon Def. +50, 35% chance to ignore knockbacks for 300 sec  
Notes: Self-only buff in Classic World.  

**79. What does the Cleric's Invincible do at max level?**  
Answer: **Reduces damage from monster touch by 20% for 300 seconds and damages mobs that touch you**  
Wrong options: Makes you immune to all damage for 5 seconds, Reduces all damage taken by 50%, Reduces monster touch damage by 30% for 300 seconds, Reflects 20% of magic damage back to monsters  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/guides/cleric-class-guide  
> max Invincible cuts the damage you take from monster touches by 20% for 300 seconds and damages mobs that touch you ... 30 -> 20 going from COT2 to launch.  
Notes: Source is the Cleric guide, not the skill page. Value changed at launch.  

**80. At max level (Lv 20), what does Haste give party members for 300 seconds?**  
Answer: **Speed +30 and Jump +10**  
Wrong options: Speed +40 and Jump +20, Speed +20 and Jump +20, Speed +30 and Jump +20, Speed +40 and Jump +10  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/assassin/haste  
> Level 20 costs 35 MP and gives Speed +30 and Jump +10 for 300 seconds.  
Notes: Old GMS gave +40/+20.  

**81. At max level (Lv 15), how much of incoming HP damage does Magic Guard move to MP?**  
Answer: **80%**  
Wrong options: 50%, 60%, 70%, 90%  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/magician/magic-guard  
> max level of 15. At max level, the skill moves 80% of incoming HP damage to MP and costs 12 MP to cast.  
Notes: Max level 15 in Classic World (old GMS was 20).  

**82. Which Bandit skill stuns the enemy and gives you an Attack Power buff when it succeeds?**  
Answer: **Steal**  
Wrong options: Haste, Disorder, Dark Sight, Lucky Seven  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/bandit/steal  
> On a successful steal, it stuns the enemies for 1.5 seconds and increases Attack Power for 60 seconds. Steal requires Haste at level 5. ... max level of 30.  
Notes: Classic World specific; Steal was reworked in recent patches.  

**83. At max level (Lv 30), what does the Fighter's Rage give party members for 300 seconds?**  
Answer: **Attack Power +40 and Weapon Defense -40**  
Wrong options: Attack Power +40 and Weapon Defense +40, Attack Power +35 and Weapon Defense -35, Attack Power +30 and Weapon Defense -20, Attack Power +50 and Weapon Defense -50  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/fighter/rage  
> Level 30 (MAX): MP -25; Attack Power +40, Weapon Def. -40 for 300 sec  
Notes: Max AP changed from 35 to 40 between the second test and launch.  

**84. What does the Page's Threaten do to nearby monsters?**  
Answer: **Lowers their movement speed and weapon defense**  
Wrong options: Stuns them, Reduces their magic defense and accuracy, Pushes them back, Sets them on fire  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/page/threaten  
> Level 30 (MAX) MP -25; Enemy Speed -35, Weapon Def. -10 for 30 sec.  

**85. Which 2nd job classes get the Teleport skill?**  
Answer: **Cleric, F/P Wizard and I/L Wizard (all Magician branches)**  
Wrong options: Only the Cleric, Only the F/P and I/L Wizards, Only the I/L Wizard, None of them  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/cleric/teleport  
> Teleport ... max level 20 ... Level 20 (max): 15 MP, 150 px. Appears in F/P Wizard, I/L Wizard, and Cleric skill books.  


## sp_prereq

**86. Which skill must be at level 1 before a Magician can put points into Magic Claw?**  
Answer: **Energy Bolt**  
Wrong options: Magic Guard, Magic Armor, Improved MP Recovery, Teleport  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/skills/magician/magic-claw  
> Requires Energy Bolt Level 1  

**87. What is the max level of the Thief skill Lucky Seven?**  
Answer: **20**  
Wrong options: 10, 15, 25, 30  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/skills/thief/lucky-seven  
> Lucky Seven: It's a Thief skill with a max level of 20.  

**88. What is the max level of the Cleric skill Heal?**  
Answer: **30**  
Wrong options: 10, 15, 20, 25  
Difficulty: easy | verified | Source: https://meowdb.com/msclassic/skills/cleric/heal  
> The Heal skill page says Heal is max level 30.  

**89. Which skill must be at level 5 before a Cleric can learn Bless?**  
Answer: **Invincible**  
Wrong options: Heal, MP Eater, Holy Arrow, Teleport  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/skills/cleric/bless  
> Cleric · 2nd Job · Max Lv 20 · Requires At least Level 5 on Invincible  

**90. Which skill must be at level 5 before a Cleric can learn Invincible?**  
Answer: **Heal**  
Wrong options: Bless, MP Eater, Magic Guard, Teleport  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/forum/guides/zzzzBen/solo-priest-skill-build-guide-9  
> Requires At least Level 5 on Heal (listed just before the Invincible stats)  
Notes: Source is a forum guide copying skill-book text; the Heal skill page also lists Invincible as unlocked by Heal.  

**91. How many levels of Improved MP Recovery does a Magician need before putting points into Max MP Increase?**  
Answer: **3**  
Wrong options: 1, 5, 10, 20  
Difficulty: hard | verified | Source: https://meowdb.com/msclassic/skills/magician/max-mp-increase  
> Max MP Increase has a skill prerequisite of Improved MP Recovery at Level 3.  
Notes: Reverse of the old GMS dependency.  

**92. How many levels of Disorder do you need before you can learn Dark Sight?**  
Answer: **3**  
Wrong options: 1, 5, 10, 20  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/thief/dark-sight  
> Dark Sight ... requires at least Disorder Level 3  
Notes: An Oct 15, 2026 patch changed the in-game description to say Level 1 but the real requirement is reportedly still 3. Ambiguous; consider dropping.  

**93. Which skill must be at level 3 before a Thief can learn Keen Eyes?**  
Answer: **Nimble Body**  
Wrong options: Disorder, Dark Sight, Haste, Lucky Seven  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/thief/keen-eyes  
> Its only listed prerequisite is Nimble Body Level 3.  
Notes: Lucky Seven has no Keen Eyes prerequisite in Classic World.  

**94. How many levels of Haste does a Bandit need before learning Steal?**  
Answer: **5**  
Wrong options: 1, 3, 10, 20  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/bandit/steal  
> Steal lists a prerequisite of at least Level 5 in Haste  

**95. How many levels of Sword Mastery does a Fighter need before learning Sword Booster?**  
Answer: **5**  
Wrong options: 1, 3, 10, 20  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/fighter/sword-booster  
> Sword Booster ... Requires Sword Mastery Level 5  

**96. What is the max level of Sword Booster?**  
Answer: **20**  
Wrong options: 10, 15, 25, 30  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/fighter/sword-booster  
> Level 20 (MAX) HP -10, MP -10; Increases Sword Attack Speed by 2 stages for 300 sec.  

**97. How many levels of Sword Mastery does a Fighter need before learning Final Attack: Sword?**  
Answer: **3**  
Wrong options: 1, 5, 10, 20  
Difficulty: medium | verified | Source: https://meowdb.com/msclassic/skills/fighter/final-attack-sword  
> Requires Sword Mastery Level 3  
Notes: Max level 30.  

