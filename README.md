<!------------------------------------------
Path of Diablo Planner

* Click on the character's level or class to change them
* Use right click to remove points or items
* Shift and ctrl modify the amount added or removed
* Upgrading can be done by ctrl-clicking the equipped item (ctrl + right-click to downgrade)
* Snapshot effects by ctrl-clicking the effect's icon

Current Known Issues:
* Charms can't be moved into a new space below the original space if they overlap eachother
* Shift + Right Click in Firefox doesn't work (and still opens the default menu)
* Socketed gems/runes/jewels sometimes aren't aligned like they should be
* DoT (Damage over Time) stats are added without considering their time component

Info: https://github.com/BetweenWalls/planner#planner

Code Organization:
	File   			Description
	index.html  		Handles page layout
	all.css			Defines style elements
	all.js			Holds most of the program logic
	all_equipment.js	Contains item data
	all_monsters.js 	Contains enemy data
	amazon.js   		Skill data (amazon)
	assassin.js		Skill data (assassin)
	barbarian.js		Skill data (barbarian)
	druid.js    		Skill data (druid)
	necromancer.js		Skill data (necromancer)
	paladin.js  		Skill data (paladin)
	sorceress.js		Skill data (sorceress)
	universal_skills.js	Skill data (oskills)

Text below this is formatted for the github info page
------------------------------------------>

# [Planner](https://BetweenWalls.github.io/planner/)

Character Planner for Diablo 2: Path of Diablo

### [Download](https://github.com/BetweenWalls/planner/archive/master.zip)

### Features:
* all skill info up to level 60
* synergy calculation for all skills
* display section for active skill(s)
* character stats
* mercenary selection
* equipment selection & modification (corrupting, socketing, upgrading)
* charm inventory
* snapshotting
* saving/loading

### Future Goals:
* mercenary stats
* IAS breakpoint info (frames per attack) for skills which don't use normal breakpoints
* full GUI inventory/stash
* custom item creation & editing
* custom item-pool saving
* options for individual quests
* option for strict character validation (prevent invalid character states instead of just making text red)
* character importing/sharing
* monster stat calculations
* debuff tracking
* party tracking/planning
* pvp info
* character comparison tool
* comparison to original D2 skills/stats
* comparison of skill effectiveness (dps, area affected) per level/class
* dynamic item/skill recommendations

### Feedback:
[Reddit](https://www.reddit.com/r/pathofdiablo/comments/f81e5u/character_skill_calculator_with_skill_info_up_to/)

[Github](https://github.com/BetweenWalls/planner/wiki/Feedback-for-Skill-Planner)

This project will likely be made open-source at some point, but if you want to contribute directly before that point, any improvements would be welcome.
