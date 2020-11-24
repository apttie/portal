
var character_pd2_paladin = {class_name:"Paladin", strength:25, dexterity:20, vitality:25, energy:15, life:55, mana:15, stamina:189, levelup_life:2.5, levelup_stamina:1, levelup_mana:1.5, ar_per_dexterity:5, life_per_vitality:3, stamina_per_vitality:1, mana_per_energy:1.5, starting_strength:25, starting_dexterity:20, starting_vitality:25, starting_energy:15, ar_const:20, block_const:3, skill_layout:"./images/PD2/paladin.png", mana_regen:1.66,
	weapon_frames:{dagger:16, sword:[14,17], axe:[14,17], mace:[14,17], thrown:[14,16], staff:17, polearm:17, scepter:14, wand:14, javelin:16, spear:19, bow:15, crossbow:19},
	// Skills that may adjust IAS breakpoints: Sacrifice, Zeal, Vengeance, Conversion, Smite
	fcr_frames:15, fcr_bp:[0, 9, 30, 48, 75, 125],
	fhr_frames:9, fhr_bp:[0, 7, 15, 27, 48, 86, 200],
	fhr_frames_alt:13, fhr_bp_alt:[0, 3, 7, 13, 20, 32, 48, 75, 129, 280],	// Spears or Staves
	fbr_frames:5, fbr_bp:[0, 13, 32, 86, 200],
	fbr_frames_alt:2, fbr_bp_alt:[0, 86],	// Holy Shield active
	
	// getSkillData - gets skill info from the skills data table
	//	skill: skill object for the skill in question
	//	lvl: level of the skill
	//	elem: which element of the skill to return
	// result: value of the skill element at the specified level
	// ---------------------------------
	getSkillData : function(skill, lvl, elem) {
		var result = skill.data.values[elem][lvl];
		
		if (skill.name == "Prayer" && elem == 0) {				result = 1 + Math.floor(skill.level/2) }
		if (skill.name == "Cleansing" && elem < 2) {			result = Math.floor(skill.level/2) }
		if (skill.name == "Meditation" && elem == 0) {			result = 1 + Math.floor(skill.level/5) }
		if (skill.name == "Resist Fire" && elem == 0) {			result = Math.floor(skill.level/2) }
		if (skill.name == "Resist Cold" && elem == 0) {			result = Math.floor(skill.level/2) }
		if (skill.name == "Resist Lightning" && elem == 0) {	result = Math.floor(skill.level/2) }
		if (skill.name == "Defiance" && elem == 0) {			result = Math.floor(skill.level/2) }
		if (skill.name == "Vigor" && elem == 0) {				result = skill.level }
		
		if (skill.name == "Blessed Aim" && elem == 0) {			result = skill.level*10 }
		if (skill.name == "Holy Fire" && elem < 4) {			result *= ((1 + 0.20*skills[1].level + 0.20*skills[9].level + 0.20*skills[13].level) * (1+character.fDamage/100)) }
		if (skill.name == "Holy Freeze" && elem < 4) {			result *= ((1 + 0.12*skills[3].level + 0.12*skills[9].level + 0.12*skills[13].level) * (1+character.cDamage/100)) }
		if (skill.name == "Holy Shock" && elem < 4) {			result *= ((1 + 0.08*skills[5].level + 0.08*skills[9].level + 0.08*skills[13].level) * (1+character.lDamage/100)) }
		if (skill.name == "Sanctuary" && elem < 4) {			result *= (1 + 0.06*skills[10].level + 0.06*skills[13].level + 0.06*skills[12].level) }
		
		if (skill.name == "Joust" && elem == 0) {				result = skill.level*2 }
		if (skill.name == "Sacrifice" && elem == 2) {			result += (20*skills[8].level + 20*skills[18].level) }
		if (skill.name == "Zeal" && elem == 1) {				result += (16*skills[20].level) }
		if (skill.name == "Vengeance" && elem == 1) {			result += (10*skills[1].level + 2*skills[9].level) }
		if (skill.name == "Vengeance" && elem == 2) {			result += (10*skills[3].level + 2*skills[9].level) }
		if (skill.name == "Vengeance" && elem == 3) {			result += (10*skills[5].level + 2*skills[9].level) }
		if (skill.name == "Charge" && elem == 0) {				result += (20*skills[6].level + 20*skills[1].level) }
		if (skill.name == "Holy Shield" && elem == 3) {			result += (15*skills[2].level) }
		if (skill.name == "Blessed Hammer" && elem < 2) {		result *= (1 + 0.10*skills[26].level + 0.10*skills[6].level) }
		if (skill.name == "Holy Bolt" && elem < 2) {			result *= (1 + 0.16*skills[31].level + 0.16*skills[29].level + 0.16*skills[32].level) }
		if (skill.name == "Holy Bolt" && elem>1 && elem<4) {	result *= (1 + 0.16*skills[0].level) }
		if (skill.name == "Holy Light" && elem < 2) {			result += (5*skills[0].level + 5*skills[32].level) }
		if (skill.name == "Holy Nova" && elem < 2) {			result *= (1 + 0.12*skills[22].level) }
		if (skill.name == "Holy Nova" && elem == 2) {			result += (10*skills[0].level + 10*skills[31].level) }
		if (skill.name == "Fist of the Heavens" && elem < 2) {	result *= (1 + 0.15*skills[22].level) }
		if (skill.name == "Fist of the Heavens" && elem > 1 && elem < 4) {	result *= ((1 + 0.05*skills[22].level + 0.05*skills[31].level + 0.05*skills[32].level) * (1+character.lDamage/100)) }
		
	return result
	},
	
	// getBuffData - gets a list of stats corresponding to a persisting buff
	//	effect: array element object for the buff
	// result: indexed array including stats affected and their values
	// ---------------------------------
	getBuffData : function(skill) {
		var lvl = skill.level + skill.extra_levels;
		var result = {};
		if (skill.i < 20) { disableAuras(skill) }
		
		// unsupported
		
	return result
	},
	
	// getSkillDamage - returns the damage and attack rating for the selected skill
	//	skill: skill object for the selected skill
	//	ar: base attack rating
	//	min/max parameters: base damage of different types
	// ---------------------------------
	getSkillDamage : function(skill, ar, phys_min, phys_max, phys_mult, nonPhys_min, nonPhys_max) {
		var lvl = skill.level+skill.extra_levels;
		var ar_bonus = 0; var damage_bonus = 0; var weapon_damage = 100;
		var damage_min = 0; var damage_max = 0;
		var fDamage_min = 0; var fDamage_max = 0;
		var cDamage_min = 0; var cDamage_max = 0;
		var lDamage_min = 0; var lDamage_max = 0;
		var pDamage_min = 0; var pDamage_max = 0; var pDamage_duration = 0;
		var mDamage_min = 0; var mDamage_max = 0;
		var skillMin = 0; var skillMax = 0; var skillAr = 0;
		var attack = 0;	// 0 = no basic damage, 1 = includes basic attack damage
		var spell = 2;	// 0 = uses attack rating, 1 = no attack rating, 2 = non-damaging
		var strTotal = (character.strength + character.all_attributes + (character.level-1)*character.strength_per_level);	// used in Smite calculation
		var nonWeaponED = ~~socketed.helm.totals.e_damage + ~~socketed.armor.totals.e_damage + ~~socketed.offhand.totals.e_damage;	// used in Smite calculation
		var damage_enhanced = character.damage_bonus + character.e_damage;
		
		// unsupported
		
		var result = {min:skillMin,max:skillMax,ar:skillAr};
		return result
	}
};

// disableAuras - disable all auras except the specified aura
//	skill: skill object for the specified aura
// ---------------------------------
function disableAuras(skill) {
	var id = skill.name.split(' ').join('_');
	if (effects[id].info.enabled == 1) {
		for (let s = 0; s < 20; s++) {
			var sk = skills[s].name.split(' ').join('_');
			if (document.getElementById(sk) != null) { if (effects[sk].info.enabled == 1) { if (id != sk) { disableEffect(sk) } } }
		}
	}
};

/*[ 0] Prayer			*/ var d111 = {index:[1,""], values:[
		["Passive Life Regen"], 
		["Radius",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["Life per Hit +X",1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,], 
		["Life Replenish +x",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,21,23,25,27,29,31,33,35,37,39,41,42,43,], 
		["Mana Cost",1,1.1,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.1,4.3,4.5,4.7,4.9,5.1,5.3,5.5,5.7,5.8,6,6.2,6.4,], 
]};
/*[ 1] Resist Fire		*/ var d113 = {index:[1," percent"], values:[
		["Passive +X% To Maximum Fire Resistance"], 
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["X% Increased fire damage",5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,], 
		["Resist Fire +%",45,49,53,57,61,65,69,73,76,79,82,85,88,91,94,97,99,101,103,105,107,109,110,111,112,113,114,115,116,117,], 
]};
/*[ 2] Defiance			*/ var d122 = {index:[1," percent"], values:[
		["Physical Damage Reduction +x%"], 
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["Defense +%",70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,], 
]};
/*[ 3] Resist Cold		*/ var d123 = {index:[1," percent"], values:[
		["Passive +X% To Maximum Cold Resistance"], 
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["X% Increased Cold Damage",5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,], 
		["Resist Cold +%",45,49,53,57,61,65,69,73,76,79,82,85,88,91,94,97,99,101,103,105,107,109,110,111,112,113,114,115,116,117,], 
]};
/*[ 4] Cleansing		*/ var d131 = {index:[2," percent"], values:[
		["Passive poison duration reduction +x%"], 
		["Passive curse duration reduction +x%"], 
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["Reduced poison duration +%",25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,], 
		["Reduced curse duration +%",25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,], 
]};
/*[ 5] Resist Lightning	*/ var d133 = {index:[1," percent"], values:[
		["Passive +X% To Maximum Lightning Resistance"], 
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["X% Increased Lightning Damage",5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,], 
		["Resist Lightning +%",45,49,53,57,61,65,69,73,76,79,82,85,88,91,94,97,99,101,103,105,107,109,110,111,112,113,114,115,116,117,], 
]};
/*[ 6] Vigor			*/ var d142 = {index:[1," percent"], values:[
		["Passive Increased Walk Run Speed +%"], 
		["Radius (yards)",13.3,15.3,17.3,19.3,21.3,23.3,25.3,27.3,29.3,31.3,33.3,35.3,37.3,39.3,41.3,43.3,45.3,47.3,49.3,51.3,53.3,55.3,57.3,59.3,61.3,63.3,65.3,67.3,69.3,71.3,], 
		["Velocity +%",13,18,22,25,28,30,32,33,35,36,37,38,39,40,40,41,41,42,42,43,], 
		["Max Stam Recovery +%",50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,], 
		["Increased Stamina Recovery +%",50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,], 
]};
/*[ 7] Meditation		*/ var d151 = {index:[1," to Mana after each Kill"], values:[
		["Passive Mana after kill +x"], 
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["Mana Recovery +%",150,162,174,186,198,210,222,234,246,258,270,282,294,306,318,330,342,354,366,378,390,402,414,426,438,450,462,474,486,498,], 
]};
/*[ 8] Redemption		*/ var d162 = {index:[0,""], values:[
		["Chance to redeem soul +%",23,34,42,49,55,59,63,65,69,71,73,47,75,77,79,80,82,83,84,85,], 
		["Mana recovered +x",25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,], 
]};
/*[ 9] Salvation		*/ var d163 = {index:[0,""], values:[
		["Radius (yards)",10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,], 
		["Lightning/Cold/Fire Damage Increased x%",5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,36,37,38,39,], 
		["Resist Lightning/Cold/Fire %",25,29,33,37,41,45,49,53,56,59,62,65,68,71,74,77,79,81,83,85,], 
]};

/*[10] Might			*/ var d211 = {index:[0,""], values:[
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["Damage +%",40,50,60,70,80,90,100,110,122,134,146,158,170,182,194,206,220,234,248,262,276,290,306,322,338,354,370,386,404,422,], 
]};
/*[11] Holy Fire		*/ var d222 = {index:[0,""], values:[
		["fire attack min",3,3,4,5,6,6,7,8,11,14,17,20,23,26,29,32,43,54,66,77,88,99,120,141,162,183,204,225,252,278,], 
		["fire attack max",9,9,10,11,12,12,13,14,17,20,23,26,29,32,35,38,49,60,72,83,94,105,126,147,168,189,210,231,258,284,], 
		["fire min",1,1.2,1.5,1.7,2,2.2,2.5,2.7,3.7,4.7,5.7,6.7,7.7,8.7,9.7,10.7,14.5,18.2,22,25.7,29.5,33.2,40.2,47.2,54.2,61.2,68.2,75.2,84,92.7,], 
		["fire max",3,3.2,3.5,3.7,4,4.2,4.5,4.7,5.7,6.7,7.7,8.7,9.7,10.7,11.7,12.7,16.5,20.2,24,27.7,31.5,35.2,42.2,49.2,56.2,63.2,70.2,77.2,86,94.7,], 
]};
/*[12] Thorns			*/ var d223 = {index:[0,""], values:[
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["Damage Return +%",250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1600,1650,1700,], 
]};
/*[13] Blessed Aim		*/ var d231 = {index:[1," percent"], values:[
		["Passive Bonus Attack +%"], 
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["Attack +%",75,85,95,105,115,125,135,145,155,165,175,185,195,205,215,225,235,245,255,265,275,285,295,305,315,325,335,345,355,365,], 
]};
/*[14] Concentration	*/ var d241 = {index:[0,""], values:[
		["Attack Rating+%",25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101,105,109,113,117,121,125,129,133,137,141,], 
		["Radius (yards)",13.3,14.6,16,17.3,18.6,20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,37.3,38.9,40,41.3,42.6,44,45.3,46.6,48,49.3,50.6,52,], 
		["Damage +%",60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,], 
]};
/*[15] Holy Freeze		*/ var d242 = {index:[0,""], values:[
		["cold attack min",20,25,30,35,40,45,50,55,65,75,85,95,105,115,125,135,150,165,180,195,210,225,250,275,300,325,350,375,410,445,], 
		["cold attack max",30,35,40,45,50,55,60,65,75,85,95,105,115,125,135,145,160,175,190,205,220,235,260,285,310,335,360,385,420,455,], 
		["cold min",2,2,3,3,4,4,5,5,6,7,8,9,10,11,12,13,15,16,18,19,21,22,25,27,30,32,35,37,41,44,], 
		["cold max",3,3,4,4,5,5,6,6,7,8,9,10,11,12,13,14,16,17,19,20,22,23,26,28,31,33,36,38,42,55,], 
		["Slowed By %",30,34,37,40,42,44,45,46,48,48,49,50,51,51,52,53,53,53,54,54,54,55,55,55,55,56,56,56,56,56,], 
]};
/*[16] Holy Shock		*/ var d252 = {index:[0,""], values:[
		["lightning attack min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,], 
		["lightning attack max",120,156,192,228,264,300,336,372,420,468,516,564,612,660,708,756,816,876,936,996,1056,1116,1194,1272,1350,1428,1506,1584,1680,1776,], 
		["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,], 
		["lightning max",10,13,16,19,22,25,28,31,35,39,43,47,51,55,59,63,68,73,78,83,88,93,99,106,112,119,125,132,140,148,], 
]};
/*[17] Sanctuary		*/ var d253 = {index:[0,""], values:[
		["to attack vs undead min",26,40,53,67,80,94,107,120,134,147,161,174,188,201,215,228,245,262,278,295,279,294,312,330,348,366,384,402,429,456,], 
		["to attack vs undead max",53,67,80,94,107,120,134,147,161,174,188,201,215,228,241,255,272,288,305,322,303,318,336,354,372,390,408,426,453,480,], 
		["magic min",4,6,8,11,13,15,17,20,24,24,26,29,31,33,35,38,40,43,46,49,46,49,52,55,58,61,64,67,71,76,], 
		["magic max",8,11,13,15,17,20,22,24,26,29,31,33,35,38,40,42,45,48,50,53,50,53,56,59,62,65,68,71,75,80,], 
]};
/*[18] Fanaticism		*/ var d261 = {index:[0,""], values:[
		["Radius (Yards)",7.3,8,8.6,9.3,10,10.6,11.3,12,12.6,13.3,14,14.6,15.3,16,16.6,17.3,18,18.6,19.3,20,20.6,21.3,22,22.6,23.3,24,24.6,25.3,26,26.6,], 
		["Party Damage +%",25,33,42,50,59,67,76,84,93,101,110,118,127,135,144,152,161,169,178,186,195,203,212,220,229,237,246,254,263,271,], 
		["Your Damage +%",50,67,84,101,118,135,152,169,186,203,220,237,254,271,288,305,322,339,356,373,390,407,424,441,458,475,492,509,526,543,], 
		["Attack Speed +%",14,18,20,23,25,26,27,28,29,30,31,31,32,33,33,34,34,34,34,35,35,35,36,36,36,36,37,37,37,37,], 
		["Attack +%",40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,], 
]};
/*[19] Conviction		*/ var d263 = {index:[0,""], values:[
		["Radius",17.3,18,18.6,19.3,20,20.6,21.3,22,22.6,23.3,24,24.6,25.3,26,26.6,27.3,28,28.6,29.3,30,30.6,31.3,32,32.6,33.3,34,34.6,35.3,36,36.6,], 
		["Defense -%",-19,-27,-33,-38,-42,-45,-48,-50,-52,-54,-56,-57,-58,-60,-60,-62,-62,-63,-63,-64,-65,-65,-66,-67,-67,-67,-68,-68,-69,-69,], 
		["Maximum Resist -%",-12,-14,-16,-18,-20,-22,-24,-26,-28,-30,-32,-34,-36,-38,-40,-42,-44,-46,-48,-50,-52,-54,-56,-58,-60,-62,-64,-66,-68,-70,], 
]};

/*[20] Sacrifice		*/ var d311 = {index:[1," percent damage to self"], values:[
		["Damage to Self %",8,7,6,5,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,], 
		["Attack Rating +%",20,48,76,104,132,160,188,216,244,272,300,328,356,384,412,440,468,496,524,552,580,608,636,664,692,720,748,776,804,832,], 
		["Damage %",180,195,210,225,240,255,270,285,300,315,330,345,360,375,390,405,420,435,450,465,480,495,510,525,540,555,570,585,600,615,], 
]};
/*[21] Smite			*/ var d313 = {index:[0,""], values:[
		["Damage +%",15,45,75,105,135,165,195,225,255,285,315,345,375,405,435,465,495,525,555,585,615,645,675,705,735,765,795,825,855,885,], 
		["Stun (seconds)",0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,5,5.2,5.4,5.6,5.8,6,6.2,6.4,], 
]};
/*[22] Holy Bolt		*/ var d312 = {index:[0,""], values:[
		["magic min",3,4,5,6,7,8,9,10,13,16,19,22,25,28,31,34,43,52,61,70,79,88,100,112,124,136,148,160,175,190,], 
		["magic max",5,7,9,11,13,15,17,19,23,27,31,35,39,43,47,51,61,71,81,91,101,111,124,137,150,163,176,189,205,221,], 
		["healing min",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,], 
		["healing max",4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,], 
		["Mana Cost",2,2.2,2.5,2.7,3,3.2,3.5,3.7,4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,], 
]};
/*[23] Zeal				*/ var d321 = {index:[0,""], values:[
		["Attack +%",45,70,95,120,145,170,195,220,245,270,295,320,345,370,395,420,445,470,495,520,545,570,595,620,645,670,695,720,745,770,], 
		["Damage +%",0,0,0,0,16,32,48,64,80,96,112,128,144,160,176,192,208,224,240,256,272,288,304,320,336,352,368,384,400,416,], 
]};
/*[24] Charge			*/ var d333 = {index:[0,""], values:[
		["Damage +%",100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,], 
		["Attack Mod +%",75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345,360,375,390,405,420,435,450,465,480,495,510,], 
]};
/*[25] Vengeance		*/ var d341 = {index:[0,""], values:[
		["Cold Length",1.2,1.8,2.4,3,3.6,4.2,4.8,5.4,6,6.6,7.2,7.8,8.4,9,9.6,10.2,10.8,11.4,12,12.6,13.2,13.8,14.4,15,15.6,16.2,16.8,17.4,18,18.6,], 
		["Fire Damage +%",70,76,82,88,94,100,106,112,118,124,130,136,142,148,154,160,166,172,178,184,190,196,202,208,214,220,226,232,238,244,], 
		["Cold Damage +%",70,76,82,88,94,100,106,112,118,124,130,136,142,148,154,160,166,172,178,184,190,196,202,208,214,220,226,232,238,244,], 
		["Lightning Damage +%",70,76,82,88,94,100,106,112,118,124,130,136,142,148,154,160,166,172,178,184,190,196,202,208,214,220,226,232,238,244,], 
		["Attack Bonus +%",150,168,186,204,222,240,258,276,294,312,330,348,366,384,402,420,438,456,474,492,510,528,546,564,582,600,618,636,654,672,], 
		["Mana Cost",4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,], 
]};
/*[26] Blessed Hammer	*/ var d342 = {index:[0,""], values:[
		["magic min",12,20,28,36,44,52,60,68,78,88,98,108,118,128,138,148,160,172,184,196,208,220,233,246,259,272,285,298,312,326,], 
		["magic max",16,24,32,40,48,56,64,72,82,92,102,112,122,132,142,152,164,176,188,200,212,224,237,250,263,276,289,302,316,330,], 
		["Mana Cost",5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,], 
]};
/*[27] Conversion		*/ var d343 = {index:[0,""], values:[
		["Chance to Convert %",40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,], 
]};
/*[28] Holy Shield		*/ var d353 = {index:[0,""], values:[
		["smite min",3,5,7,9,11,13,15,17,20,23,26,29,32,35,38,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,], 
		["smite max",6,8,10,12,14,16,18,20,23,26,29,32,35,38,41,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,], 
		["Duration (seconds)",30,55,80,105,130,155,180,205,230,255,280,305,330,355,380,405,430,455,480,505,530,555,580,605,630,655,680,705,730,755,], 
		["Defense +%",25,40,55,70,85,100,115,130,145,160,175,190,205,220,235,250,265,280,295,310,325,340,355,370,385,400,415,430,445,460,], 
		["Successful Blocking +%",14,18,20,23,25,26,27,28,29,30,31,31,32,33,33,34,34,34,34,35,35,35,36,36,36,36,37,37,37,37,], 
]};
/*[29]Fist of the Heavens*/var d352 = {index:[0,""], values:[
		["magic min"], 
		["magic max"], 
		["lightning min"], 
		["lightning max"], 
		["mana cost"], 
]};
/*[30] Joust			*/ var d351 = {index:[1," percent<br>Cooldown: 3 seconds"], values:[
		["Faster Run/Walk %"], 
		["Damage +%",8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,], 
		["Attack +%",120,136,152,168,184,200,216,232,248,264,280,296,312,328,344,360,376,392,408,424,440,456,472,488,504,520,536,552,568,584,], 
		["Critical Strike +%",10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,], 
		["Mana Cost",5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,], 
]};
/*[31] Holy Light		*/ var d332 = {index:[0,""], values:[
		["healing min",30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,], 
		["healing max",50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,], 
		["Mana cost",8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,], 
]};
/*[32] Holy Nova		*/ var d362 = {index:[0,""], values:[
		["magic min"], 
		["magic max"], 
		["heals"], 
		["mana cost"], 
]};

var skills_pd2_paladin = [
{data:d111, key:"111", code:97, name:"Prayer", i:0, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 82px; left: 2px;", description:"When active, aura slowly regenerates<br>the life of you and your party and grants<br>them life from melee attacks", syn_title:"", syn_text:"", graytext:"", text:["Grants +1 Passive Health Regeneration per 2 Base Levels<br>Health Regeneration: +","Radius: "," yards<br>+"," Life Gained On Hit<br>Heals: +","<br>Mana Cost: ",""]},
{data:d113, key:"113", code:98, name:"Resist Fire", i:1, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 82px; left: 142px;", description:"When active, aura decreases fire damage<br>received and increases fire damage dealt<br>for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Grants 1% Maximum Fire Resistance per 2 Base Levels<br>Maximum Resist Fire: +","Radius: "," yards<br>Fire Damage: +"," percent<br>Resist Fire: +"," percent"]},
{data:d122, key:"122", code:99, name:"Defiance", i:2, req:[], reqlvl:6, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 150px; left: 72px;", description:"When active, aura increases the defense rating and<br>physical damage reduction of you and your party", syn_title:"", syn_text:"", graytext:"", text:["Grants 1% Active Damage Reduction with every 2 Base Levels<br>Active Physical Damage Reduction: +","Radius: "," yards<br>Defense Bonus: +"," percent"]},
{data:d123, key:"123", code:100, name:"Resist Cold", i:3, req:[], reqlvl:6, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 150px; left: 142px;", description:"When active, aura decreases cold damage<br>received and increases cold damage dealt<br>for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Grants 1% Maximum Cold Resistance per 2 Base Levels<br>Maximum Resist Cold: +","Radius: "," yards<br>Cold Damage: +"," percent<br>Resist Cold: +"," percent"]},
{data:d131, key:"131", code:101, name:"Cleansing", i:4, req:[0], reqlvl:12, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 218px; left: 2px;", description:"When active, aura reduces the length<br>of time you and your party<br>will remain poisoned or cursed", syn_title:"", syn_text:"", graytext:"", text:["Grants 1% Passive Reduced Duration of Poison and Curses per 2 Base Levels<br>Reduces poison duration by "," percent<br>Reduces curse duration by ","Radius: "," yards<br>Reduces poison duration by "," percent<br>Reduces curse duration by "," percent"]},
{data:d133, key:"133", code:102, name:"Resist Lightning", i:5, req:[], reqlvl:12, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 218px; left: 142px;", description:"When active, aura decreases lightning damage<br>received and increases lightning damage dealt<br>for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Grants 1% Maximum Lightning Resistance per 2 Base Levels<br>Maximum Resist Lightning: +","Radius: "," yards<br>Lightning Damage: +"," percent<br>Resist Lightning: +"," percent"]},
{data:d142, key:"142", code:103, name:"Vigor", i:6, req:[2,0], reqlvl:18, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 286px; left: 72px;", description:"When active, aura increases stamina recovery rate, maximum stamina<br>and movement speed for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Grants +1% Passive Faster Run/Walk per Base Level<br>Faster Run/Walk: +","Radius: "," yards<br>Velocity: +"," percent<br>Stamina Bonus: +"," percent<br>Stamina Recovery Rate: +"," percent"]},
{data:d151, key:"151", code:104, name:"Meditation", i:7, req:[4,0], reqlvl:24, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 354px; left: 2px;", description:"When active, aura increases mana recovery<br>for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Grants +1 Passive Mana After Each Kill per 5 Base Levels<br>+","Radius: "," yards<br>Mana Recovery Rate: +"," percent"]},
{data:d162, key:"162", code:105, name:"Redemption", i:8, req:[6,2,0], reqlvl:30, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 422px; left: 72px;", description:"When active, aura attempts to redeem<br>the souls of slain enemies to give mana", syn_title:"", syn_text:"", graytext:"", text:["Radius: "," yards<br>Chance to redeem soul: "," percent<br>Life Recovered: 5 points<br>Mana Recovered: "," points"]},
{data:d163, key:"163", code:106, name:"Salvation", i:9, req:[], reqlvl:30, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 422px; left: 142px;", description:"When active, aura increases fire cold, and lightning damage<br>received and increases fire, cold, and lightning damage dealt<br>for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Radius: "," yards<br>Elemental Damage: +"," percent<br>Resist All: +"," percent"]},

{data:d211, key:"211", code:107, name:"Might", i:10, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 82px; left: 204px;", description:"When active, aura increases the damage<br>done by you and your party", syn_title:"", syn_text:"", graytext:"", text:["Radius: "," yards<br>Damage: +"," percent"]},
{data:d222, key:"222", code:108, name:"Holy Fire", i:11, req:[10], reqlvl:6, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 150px; left: 214px;", description:"When active, aura damages nearby enemies<br>with heavenly flames<br>Adds fire damage to your attack", syn_title:"<br>Holy Fire Receives Bonuses From:<br>", syn_text:"Resist Fire: +20% Fire Damage per Level<br>Salvation: +20% Fire Damage per Level<br>Blessed Aim: +20% Fire Damage per Level", graytext:"", text:["Radius: 6 yards<br>Fire Damage: ","-"," to your attack<br>Fire Damage: ","-",""]},
{data:d223, key:"223", code:109, name:"Thorns", i:12, req:[], reqlvl:6, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 150px; left: 264px;", description:"When active, aura reflects damage done to you<br>back at your attacker", syn_title:"", syn_text:"", graytext:"", text:["Radius: "," yards<br>"," percent damage returned"]},
{data:d231, key:"231", code:110, name:"Blessed Aim", i:13, req:[10], reqlvl:12, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 218px; left: 164px;", description:"When active, aura increases the attack rating<br>for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Grants +10% Passive Attack Rating per Base Level<br>Attack: +","Radius: "," yards<br>Attack Rating: +"," percent",""]},
{data:d241, key:"241", code:111, name:"Concentration", i:14, req:[13,10], reqlvl:18, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 286px; left: 104px;", description:"When active, aura increases the damage and decreases the chance<br>that the attack will be interrupted for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Attack: +"," percent<br>Radius: "," yards<br>Chance uninterruptable: 20 percent<br>Damage: +"," percent"]},
{data:d242, key:"242", code:112, name:"Holy Freeze", i:15, req:[11,10], reqlvl:18, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 286px; left: 214px;", description:"When active, aura freezes nearby monsters<br>Adds cold damage to your attack", syn_title:"<br>Holy Freeze Receives Bonuses From:<br>", syn_text:"Resist Cold: +12% Cold Damage per Level<br>Salvation: +12% Cold Damage per Level<br>Blessed Aim: +12% Cold Damage per Level", graytext:"", text:["Radius: 8 yards<br>Cold Damage: ","-"," to your attack<br>Cold Damage: ","-","<br>Enemies slowed "," percent"]},
{data:d252, key:"252", code:113, name:"Holy Shock", i:16, req:[15,11,10], reqlvl:24, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 354px; left: 204px;", description:"When active, aura causes pulses of electricity<br>to damage nearby enemies<br>Adds lightning damage to your attack", syn_title:"<br>Holy Shock Receives Bonuses From:<br>", syn_text:"Resist Lightning: +8% Lightning Damage per Level<br>Salvation: +8% Lightning Damage per Level<br>Blessed Aim: +8% Lightning Damage per Level", graytext:"", text:["Radius: 8 yards<br>Lightning Damage: ","-"," to your attack<br>Lightning Damage: ","-",""]},
{data:d253, key:"253", code:114, name:"Sanctuary", i:17, req:[12,15,11,10], reqlvl:24, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 354px; left: 254px;", description:"When active, aura damages the nearby<br>enemies with magic<br>Provides enhanced damage to attacks against undead", syn_title:"<br>Sanctuary Receives Bonuses From:<br>", syn_text:"Might: +6% Magic Damage per Level<br>Blessed Aim: +6% Magic Damage per Level<br>Thorns: +6% Magic Damage per Level", graytext:"", text:["Magic Damage: ","-"," to your attack<br>Radius: 9.3 yards<br>Magic Damage: ","-",""]},
{data:d261, key:"261", code:115, name:"Fanaticism", i:18, req:[14,13,10], reqlvl:30, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 422px; left: 134px;", description:"When active, aura increases damage, attack speed,<br>and attack rating for you and your party", syn_title:"", syn_text:"", graytext:"", text:["Radius: "," yards<br>Party Damage: +"," percent<br>Your Damage: +"," percent<br>Attack Speed: +"," percent<br>Attack: +"," percent"]},
{data:d263, key:"263", code:116, name:"Conviction", i:19, req:[17,12,15,11,10], reqlvl:30, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 422px; left: 284px;", description:"When active, aura reduces the defenses<br>and resistances of nearby enemies", syn_title:"", syn_text:"", graytext:"", text:["Radius: "," yards<br>Defense: "," percent<br>Resistances: "," percent"]},

{data:d311, key:"311", code:117, name:"Sacrifice", i:20, req:[], reqlvl:1, reqWeapon:["axe","mace","club","hammer","sword","dagger","thrown","javelin","scepter","wand","staff","spear","polearm"], level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 82px; left: 336px;", description:"Increased accuracy and damage<br>at the cost of life", syn_title:"<br>Sacrifice Receives Bonuses From:<br>", syn_text:"Redemption: +20% Damage per Level<br>Fanaticism: +20% Damage per Level", graytext:"", text:["","To Attack Rating: +"," percent<br>Damage: +"," percent",""]},
{data:d313, key:"313", code:118, name:"Smite", i:21, req:[], reqlvl:1, reqWeapon:[""], level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 82px; left: 476px;", description:"Temporarily stun your enemy<br>by bashing it with your shield", syn_title:"<br>Smite Receives Bonuses From:<br>", syn_text:"Holy Shield", graytext:"", text:["Damage: +"," percent<br>Stun Length: "," seconds<br>Mana Cost: 2"]},
{data:d312, key:"312", code:119, name:"Holy Bolt", i:22, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 82px; left: 326px;", description:"A bolt of Divine energy<br>that damages enemies or heals allies<br>Fires an additional holy bolt at levels 15 and 25", syn_title:"<br>Holy Bolt Receives Bonuses From:<br>", syn_text:"Holy Light: +16% Magic Damage per Level<br>Fist of the Heavens: +16% Magic Damage per Level<br>Holy Nova: +16% Magic Damage per Level<br>Prayer: +10% Life Healed per Level", graytext:"", text:["Magic Damage: ","-","<br>Heals: ","-","<br>Mana Cost: ",""]},
{data:d321, key:"321", code:120, name:"Zeal", i:23, req:[20], reqlvl:6, reqWeapon:["axe","mace","club","hammer","sword","dagger","thrown","javelin","scepter","wand","staff","spear","polearm"], level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 150px; left: 266px;", description:"Allows you to attack multiple adjacent enemies<br>with a single attack", syn_title:"<br>Zeal Receives Bonuses From:<br>", syn_text:"Sacrifice: +16% Damage per Level", graytext:"", text:["Attack Bonus: +"," percent<br>Damage: +"," percent<br>3 hits<br>Mana Cost: 2"]},
{data:d333, key:"333", code:121, name:"Charge", i:24, req:[21], reqlvl:12, reqWeapon:["axe","mace","club","hammer","sword","dagger","thrown","javelin","scepter","wand","staff","spear","polearm"], level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 218px; left: 426px;", description:"Charge into battle and attack an enemy", syn_title:"<br>Charge Receives Bonuses From:<br>", syn_text:"Vigor: +20% Damage per Level<br>Might: +20% Damage per Level", graytext:"", text:["Damage: +"," percent<br>Attack: +"," percent<br>Mana Cost: 9",""]},
{data:d341, key:"341", code:122, name:"Vengeance", i:25, req:[23,20], reqlvl:18, reqWeapon:["axe","mace","club","hammer","sword","dagger","thrown","javelin","scepter","wand","staff","spear","polearm"], level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 286px; left: 266px;", description:"Fire, lightning, and cold damage are added<br>to each successful attack", syn_title:"<br>Vengeance Receives Bonuses From:<br>", syn_text:"Resist Fire: +10% Fire Damage per Level<br>Resist Cold: +10% Cold Damage per Level<br>Resist Lightning: +10% Lightning Damage per Level<br>Salvation: +2% Elemental Damage per Level", graytext:"", text:["Cold Length: "," seconds<br>Fire damage: +"," percent<br>Cold Damage: +"," percent<br>Lightning Damage: +"," percent<br>Attack: +"," percent<br>Mana Cost: ",""]},
{data:d342, key:"342", code:123, name:"Blessed Hammer", i:26, req:[31,22], reqlvl:18, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 286px; left: 366px;", description:"Summons an ethereal hammer that<br>spirals outwards damaging enemies it hits<br>150 percent Damage to Undead", syn_title:"<br>Blessed Hammer Receives Bonuses From:<br>", syn_text:"Blessed Aim: +10% Magic Damage per Level<br>Vigor: +10% Magic Damage per Level", graytext:"", text:["Magic Damage: ","-","<br>Mana Cost: ",""]},
{data:d343, key:"343", code:124, name:"Conversion", i:27, req:[24,21], reqlvl:18, reqWeapon:["axe","mace","club","hammer","sword","dagger","thrown","javelin","scepter","wand","staff","spear","polearm"], level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 286px; left: 456px;", description:"Converts monsters to fight against<br>other foul demons and beasts", syn_title:"", syn_text:"", graytext:"", text:["Chance to convert: "," percent<br>Duration: 8 seconds<br>Mana Cost: 4"]},
{data:d353, key:"353", code:125, name:"Holy Shield", i:28, req:[27,24,21], reqlvl:24, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 354px; left: 421px;", description:"Enhances your shield with divine power", syn_title:"<br>Holy Shield Receives Bonuses From:<br>", syn_text:"Defiance: +15% Defense per Level", graytext:"", text:["Smite Damage: +","-","<br>Duration: "," seconds<br>Defense Bonus: +"," percent<br>Successful Blocking: +"," percent<br>Mana Cost: 35"]},
{data:d352, key:"352", code:126, name:"Fist of the Heavens", i:29, req:[26,31,22], reqlvl:24, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 354px; left: 326px;", description:"Lightning Strikes your target as holy bolts<br>seek out nearby enemies", syn_title:"<br>Fist of the Heavens Receives Bonuses From:<br>", syn_text:"Holy Bolt: +15% Holy Bolt Damage per Level<br>Holy Bolt: +5% Lightning Damage per Level<br>Holy Light: +5% Lightning Damage per Level<br>Holy Nova: +5% Lightning Damage per Level", graytext:"", text:["Holy Bolt Magic Damage: ","-","<br>Lightning Damage: ","-","<br>Mana Cost: ",""]},
{data:d351, key:"351", code:127, name:"Joust", i:30, req:[25,23,20], reqlvl:24, reqWeapon:["axe","mace","club","hammer","sword","dagger","thrown","javelin","scepter","wand","staff","spear","polearm"], level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 354px; left: 306px;", description:"Teleport to your enemies and impale them with a deadly<br>strike gaining increased movement speed for 2 seconds", syn_title:"", syn_text:"", graytext:"", text:["Increases Movement Speed by 2% per Base Level<br>Walk/Run Speed: +","Damage: +"," percent<br>Attack Bonus: +"," percent<br>Critical Strike: +"," percent chance<br>Mana Cost: ",""]},
{data:d332, key:"332", code:302, name:"Holy Light", i:31, req:[22], reqlvl:12, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 218px; left: 356px;", description:"Calls down light from the heavens<br>to heal an ally from afar", syn_title:"<br>Holy Light Receives Bonuses From:<br>", syn_text:"Prayer: +5 Life Healed per Level<br>Holy Nova: +5 Life Healed per Level", graytext:"", text:["Heals: ","-","<br>Mana Cost: ",""]},
{data:d362, key:"362", code:303, name:"Holy Nova", i:32, req:[29,26,31,22,28,27,24,21], reqlvl:30, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 422px; left: 326px;", description:"Creates an expanding ring of holy energy<br>that damages enemies or heals allies", syn_title:"<br>Holy Nova Receives Bonuses From:<br>", syn_text:"Holy Bolt: +12% Magic Damage per Level<br>Prayer: +10 Life Healed per Level<br>Holy Light: +10 Life Healed per Level", graytext:"", text:["Magic Damage: ","-","<br>Heals: ","<br>Mana Cost: ",""]},
];
