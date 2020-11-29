
var character_pd2_sorceress = {class_name:"Sorceress", strength:10, dexterity:25, vitality:10, energy:35, life:40, mana:35, stamina:174, levelup_life:1.5, levelup_stamina:1, levelup_mana:2, ar_per_dexterity:5, life_per_vitality:2, stamina_per_vitality:1, mana_per_energy:2, starting_strength:10, starting_dexterity:25, starting_vitality:10, starting_energy:35, ar_const:-15, block_const:5, skill_layout:"./images/PD2/sorceress.png", mana_regen:1.66,
	weapon_frames:{dagger:16, sword:[17,21], axe:[17,15], mace:[17,15], thrown:[17,16], staff:15, polearm:15, scepter:17, wand:17, javelin:16, spear:22, bow:16, crossbow:19, orb:17},
	fcr_frames:13, fcr_bp:[0, 9, 20, 37, 63, 105, 200],
	fcr_frames_alt:19, fcr_bp_alt:[0, 7, 15, 23, 35, 52, 78, 117, 194],	// Lightning Surge & Chain Lightning
	fhr_frames:15, fhr_bp:[0, 5, 9, 14, 20, 30, 42, 60, 86, 142, 280],
	fbr_frames:9, fbr_bp:[0, 7, 15, 27, 48, 86, 200],
	
	// getSkillData - gets skill info from the skills data table
	//	skill: skill object for the skill in question
	//	lvl: level of the skill
	//	elem: which element of the skill to return
	// result: value of the skill element at the specified level
	// ---------------------------------
	getSkillData : function(skill, lvl, elem) {
		var sk = skills;
		var c = character;
		var result = skill.data.values[elem][lvl];
		
		// TODO: Glacial Spike gets a synergy bonus from Ice Blast?
		
		if (skill.name == "Cold Enchant" && elem > 0 && elem < 3) {		result *= ((1 + 0.25*sk[8].level) * (1+c.cDamage/100)) }
		if (skill.name == "Shiver Armor" && elem > 1 && elem < 4) {		result *= ((1 + 0.10*sk[1].level + 0.10*sk[8].level) * (1+c.cDamage/100)) }
		if (skill.name == "Chilling Armor" && elem > 1 && elem < 4) {	result *= ((1 + 0.10*sk[1].level + 0.10*sk[4].level) * (1+c.cDamage/100)) }
		if (skill.name == "Ice Bolt" && elem < 2) {						result *= ((1 + 0.20*sk[3].level + 0.20*sk[5].level) * (1+c.cDamage/100)) }
		if (skill.name == "Ice Blast" && elem < 2) {					result *= ((1 + 0.06*sk[0].level + 0.06*sk[5].level) * (1+c.cDamage/100)) }
		if (skill.name == "Frost Nova" && elem < 2) {					result *= ((1 + 0.16*sk[0].level + 0.16*sk[4].level) * (1+c.cDamage/100)) }
		if (skill.name == "Glacial Spike" && elem < 2) {				result *= ((1 + 0.05*sk[7].level + 0.05*sk[6].level) * (1+c.cDamage/100)) }
		if (skill.name == "Glacial Spike" && elem == 2) {				result = 2 * (1 + 0.05*sk[6].level) }
		if (skill.name == "Blizzard" && elem < 2) {						result *= ((1 + 0.09*sk[0].level + 0.09*sk[5].level) * (1+c.cDamage/100)) }
		if (skill.name == "Ice Barrage" && elem < 2) {					result *= ((1 + 0.07*sk[0].level + 0.07*sk[5].level) * (1+c.cDamage/100)) }
		if (skill.name == "Ice Barrage" && elem == 2) {					result = 3 + Math.min(2,Math.floor(skill.level/3)) }
		if (skill.name == "Frozen Orb" && elem < 2) {					result *= ((1 + 0.03*sk[0].level + 0.03*sk[3].level) * (1+c.cDamage/100)) }
		
		if (skill.name == "Static Field" && elem == 0) {				result = 5 + 0.2*sk[20].level }
		if (skill.name == "Telekinesis" && elem < 2) {					result *= ((1 + 0.14*sk[11].level + 0.14*sk[14].level) * (1+c.lDamage/100)) }
		if (skill.name == "Teleport" && elem == 0) {					result = -50 + sk[20].level*1 }
		if (skill.name == "Charged Bolt" && elem < 2) {					result *= ((1 + 0.04*sk[13].level + 0.04*sk[15].level) * (1+c.lDamage/100)) }
		if (skill.name == "Lightning" && elem < 2) {					result *= ((1 + 0.06*sk[11].level + 0.06*sk[16].level) * (1+c.lDamage/100)) }
		if (skill.name == "Nova" && elem < 2) {							result *= ((1 + 0.03*sk[11].level + 0.03*sk[13].level) * (1+c.lDamage/100)) }
		if (skill.name == "Chain Lightning" && elem > 0 && elem < 3) {	result *= ((1 + 0.05*sk[11].level + 0.05*sk[15].level) * (1+c.lDamage/100)) }
		if (skill.name == "Thunder Storm" && elem == 0) {				result = 2 - 0.1*Math.ceil(skill.level/2) }
		if (skill.name == "Thunder Storm" && elem > 1 && elem < 4) {	result *= ((1 + 0.04*sk[15].level + 0.04*sk[14].level) * (1+c.lDamage/100)) }
		
		if (skill.name == "Fire Bolt" && elem < 2) {					result *= ((1 + 0.20*sk[26].level + 0.20*sk[33].level) * (1+c.fDamage/100)) }
		if (skill.name == "Fire Ball" && elem == 0) {					result = 2.64 + 0.66*Math.floor(skill.level/5) }
		if (skill.name == "Fire Ball" && elem > 0 && elem < 3) {		result *= ((1 + 0.14*sk[22].level + 0.14*sk[33].level) * (1+c.fDamage/100)) }
		if (skill.name == "Combustion" && elem < 2) {					result *= ((1 + 0.18*sk[22].level + 0.18*sk[26].level) * (1+c.fDamage/100)) }
		if (skill.name == "Inferno" && elem < 2) {						result *= ((1 + 0.20*sk[27].level + 0.20*sk[24].level) * (1+c.fDamage/100)) }
		if (skill.name == "Blaze" && elem > 0 && elem < 3) {			result *= ((1 + 0.04*sk[23].level + 0.01*sk[27].level) * (1+c.fDamage/100)) }
		if (skill.name == "Fire Wall" && elem < 2) {					result *= ((1 + 0.04*sk[23].level + 0.01*sk[25].level) * (1+c.fDamage/100)) }
		if (skill.name == "Meteor" && elem < 2) {						result *= (1 + 0.05*sk[26].level + 0.05*sk[27].level + 0.05*sk[25].level) }
		if (skill.name == "Meteor" && elem > 1 && elem < 6) {			result *= ((1 + 0.05*sk[26].level + 0.05*sk[27].level + 0.05*sk[25].level) * (1+c.fDamage/100)) }
		if (skill.name == "Lesser Hydra" && elem < 2) {					result *= ((1 + 0.16*sk[22].level + 0.16*sk[31].level) * (1+c.fDamage/100)) }
		if (skill.name == "Hydra" && elem < 2) {						result *= ((1 + 0.06*sk[22].level + 0.06*sk[32].level) * (1+c.fDamage/100)) }
		if (skill.name == "Enchant Fire" && elem > 0 && elem < 3) {		result *= ((1 + 0.15*sk[23].level) * (1+c.fDamage/100)) }
		
	return result
	},
	
	// getBuffData - gets a list of stats corresponding to a persisting buff
	//	effect: array element object for the buff
	// result: indexed array including stats affected and their values
	// ---------------------------------
	getBuffData : function(skill) {
		var id = skill.name.split(' ').join('_');
		var lvl = skill.level + skill.extra_levels;
		var result = {};
		
		if (skill.name == "Cold Mastery") { result.cPierce = skill.data.values[1][lvl]; result.cDamage = skill.data.values[0][lvl]; }
		if (skill.name == "Lightning Mastery") { result.lDamage = skill.data.values[0][lvl]; }
		if (skill.name == "Fire Mastery") { result.fPierce = skill.data.values[1][lvl]; result.fDamage = skill.data.values[0][lvl]; }
		
		// most 'effects' unsupported
		
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
		
		// unsupported
		
		var result = {min:skillMin,max:skillMax,ar:skillAr};
		return result
	}
};

/*[ 0] Ice Bolt			*/ var d112 = {index:[0,""], values:[
		["cold min",3,5,7,9,11,13,15,17,21,26,30,35,39,44,48,53,62,71,80,89,98,107,125,143,161,179,197,215,242,269,296,323,350,377,404,431,458,485,512,539,566,593,620,647,674,701,728,755,782,809,836,863,890,917,944,971,998,1025,1052,1079,], 
		["cold max",5,8,11,14,17,20,23,26,33,40,47,54,61,68,75,82,99,117,134,152,169,187,213,239,265,291,317,343,377,412,446,481,515,550,584,619,653,688,722,757,791,826,860,895,929,964,998,1033,1067,1102,1136,1171,1205,1240,1274,1309,1343,1378,1412,1447,], 
		["Cold Length (seconds)",6,6.4,6.8,7.2,7.6,8,8.4,8.8,9.2,9.6,10,10.4,10.8,11.2,11.6,12,12.4,12.8,13.2,13.6,14,14.4,14.8,15.2,15.6,16,16.4,16.8,17.2,17.6,18,18.4,18.8,19.2,19.6,20,20.4,20.8,21.2,21.6,22,22.4,22.8,23.2,23.6,24,24.4,24.8,25.2,25.6,26,26.4,26.8,27.2,27.6,28,28.4,28.8,29.2,29.6,], 
		["Mana Cost",2,2.2,2.5,2.7,3,3.2,3.5,3.7,4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7,12,12.2,12.5,12.7,13,13.2,13.5,13.7,14,14.2,14.5,14.7,15,15.2,15.5,15.7,16,16.2,16.5,16.7,], 
]};
/*[ 1] Cold Enchant		*/ var d113 = {index:[0,""], values:[
		["Duration (seconds)",144,168,192,216,240,264,288,312,336,360,384,408,432,456,480,504,528,552,576,600,624,648,672,696,720,744,768,792,816,840,864,888,912,936,960,984,1008,1032,1056,1080,1104,1128,1152,1176,1200,1224,1248,1272,1296,1320,1344,1368,1392,1416,1440,1464,1488,1512,1536,1560,], 
		["cold min",3,4,6,7,9,10,12,13,16,19,22,25,28,31,34,37,43,48,54,59,65,70,78,85,93,100,108,115,125,134,144,153,163,172,182,191,201,210,220,229,239,248,258,267,277,286,296,305,315,324,334,343,353,362,372,381,391,400,410,419,], 
		["cold max",4,6,9,11,14,16,19,21,25,29,33,37,41,45,49,53,60,66,73,79,86,92,101,109,118,126,135,143,154,164,175,185,196,206,217,227,238,248,259,269,280,290,301,311,322,332,343,353,364,374,385,395,406,416,427,437,448,458,469,479,], 
		["Mana Cost",25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,], 
]};
/*[ 2] Frost Nova		*/ var d121 = {index:[0,""], values:[
		["cold min",1,2,3,4,5,6,7,8,10,13,15,18,20,23,25,28,39,50,61,72,83,94,109,124,139,154,169,184,199,214,229,244,259,274,289,304,319,334,349,364,379,394,409,424,439,454,469,484,499,514,529,544,559,574,589,604,619,634,649,664,], 
		["cold max",2,3,4,5,6,7,8,9,13,17,21,25,29,33,37,41,58,74,91,107,124,140,158,176,194,212,230,248,266,284,302,320,338,356,374,392,410,428,446,464,482,500,518,536,554,572,590,608,626,644,662,680,698,716,734,752,770,788,806,824,], 
		["Cold Length (seconds)",8,8.2,8.4,8.6,8.8,9,9.2,9.4,9.6,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.6,12.8,13,13.2,13.4,13.6,13.8,14,14.2,14.4,14.6,14.8,15,15.2,15.4,15.6,15.8,16,16.2,16.4,16.6,16.8,17,17.2,17.4,17.6,17.8,18,18.2,18.4,18.6,18.8,19,19.2,19.4,19.6,19.8,], 
		["Mana Cost",16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,], 
]};
/*[ 3] Ice Blast		*/ var d122 = {index:[0,""], values:[
		["cold min",5,11,17,23,29,35,41,47,59,71,83,95,107,119,131,143,164,185,206,227,248,269,297,325,353,381,409,439,472,507,], 
		["cold max",8,15,22,29,36,43,50,57,71,85,99,113,127,141,155,169,190,212,233,255,276,298,326,355,383,412,440,469,504,540,], 
		["Mana Cost",6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,], 
]};
/*[ 4] Shiver Armor		*/ var d133 = {index:[0,""], values:[
		["duration",180,183,186,189,192,195,198,201,204,207,210,213,216,219,222,225,228,231,234,237,240,243,246,249,252,255,258,261,264,267,270,273,276,279,282,285,288,291,294,297,300,303,306,309,312,315,318,321,324,327,330,333,336,339,342,345,348,351,354,357,], 
		["defense",45,51,57,63,69,75,81,87,93,99,105,111,117,123,129,135,141,147,153,159,165,171,177,183,189,195,201,207,213,219,225,231,237,243,249,255,261,267,273,279,285,291,297,303,309,315,321,327,333,339,345,351,357,363,369,375,381,387,393,399,], 
		["cold min",6,], 
		["cold max",8,], 
		["cold length",4,4.2,4.4,4.6,4.8,5,5.2,5.4,5.6,5.8,6,6.2,6.4,6.6,6.8,7,7.2,7.4,7.6,7.8,8,8.2,8.4,8.6,8.8,9,9.2,9.4,9.6,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.6,12.8,13,13.2,13.4,13.6,13.8,14,14.2,14.4,14.6,14.8,15,15.2,15.4,15.6,15.8,], 
]};
/*[ 5] Glacial Spike	*/ var d142 = {index:[0,""], values:[
		["cold min",20,], 
		["cold max",28,], 
		["freeze length"],
		["mana cost",30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,], 
]};
/*[ 6] Blizzard			*/ var d151 = {index:[0,""], values:[
		["cold min",15,], 
		["cold max",25,], 
		["mana cost",23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,], 
]};
/*[ 7] Ice Barrage		*/ var d152 = {index:[0,""], values:[
		["cold min",16,], 
		["cold max",23,], 
		["lances"],
		["mana cost",10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,], 
]};
/*[ 8] Chilling Armor	*/ var d153 = {index:[0,""], values:[
		["defense",45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320,325,330,335,340,], 
		["duration",240,243,246,249,252,255,258,261,264,267,270,273,276,279,282,285,288,291,294,297,300,303,306,309,312,315,318,321,324,327,330,333,336,339,342,345,348,351,354,357,360,363,366,369,372,375,378,381,384,387,390,393,396,399,402,405,408,411,414,417,], 
		["cold min",4,], 
		["cold max",6,], 
]};
/*[ 9] Frozen Orb		*/ var d161 = {index:[0,""], values:[
		["cold min",50,55,61,66,72,77,83,88,95,101,108,114,121,127,134,140,148,155,163,170,178,185,194,202,211,219,228,236,246,255,265,274,284,293,303,312,322,331,341,350,360,369,379,388,398,407,417,426,436,445,455,464,474,483,493,502,512,521,531,540,], 
		["cold max",55,61,67,73,79,85,91,97,104,111,118,125,132,139,146,153,161,169,177,185,193,201,210,219,228,237,246,255,265,275,285,295,305,315,325,335,345,355,365,375,385,395,405,415,425,435,445,455,465,475,485,495,505,515,525,535,545,555,565,575,], 
		["Cold Length (seconds)",8,8.2,8.4,8.6,8.8,9,9.2,9.4,9.6,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.6,12.8,13,13.2,13.4,13.6,13.8,14,14.2,14.4,14.6,14.8,15,15.2,15.4,15.6,15.8,16,16.2,16.4,16.6,16.8,17,17.2,17.4,17.6,17.8,18,18.2,18.4,18.6,18.8,19,19.2,19.4,19.6,19.8,], 
		["Mana Cost",14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,], 
]};
/*[10] Cold Mastery		*/ var d162 = {index:[0,""], values:[
		["Cold Damage +%",10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,], 
		["Enemy Cold Resistance -%",5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,], 
]};

/*[11] Charged Bolt		*/ var d212 = {index:[0,""], values:[
		["lightning min",2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,11,12,13,14,15,17,18,20,21,23,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,], 
		["lightning max",4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,13,14,15,16,17,19,20,22,23,25,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,], 
		["# of Bolts",3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,], 
		["Mana Cost",3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,], 
]};
/*[12] Static Field		*/ var d211 = {index:[0,""], values:[
		["duration"],
		["enemy lightning resist",-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-23,-24,-24,-25,-25,-26,-26,-27,-27,-28,-28,-29,-29,-30,-30,-31,-31,-32,-32,-33,-33,-34,-34,-35,-35,-36,-36,-37,-37,-38,-38,-39,-39,-40,-40,-41,-41,-42,], 
		["radius",2.6,2.6,3.3,3.3,4,4,4.6,4.6,5.3,5.3,6,6,6.6,6.6,7.3,7.3,8,8,8.6,8.6,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,9.3,], 
]};
/*[13] Telekinesis		*/ var d213 = {index:[0,""], values:[
		["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,], 
		["lightning max",7,10,13,16,19,22,25,28,34,40,46,52,58,64,70,76,88,100,112,124,136,148,160,172,184,196,208,220,232,244,256,268,280,292,304,316,328,340,352,364,376,388,400,412,424,436,448,460,472,484,496,508,520,532,544,556,568,580,592,604,], 
]};
/*[14] Nova				*/ var d231 = {index:[0,""], values:[
		["lightning min",1,], 
		["lightning max",22,], 
		["mana cost",8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,], 
]};
/*[15] Lightning		*/ var d232 = {index:[0,""], values:[
		["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,], 
		["lightning max",30,], 
		["mana cost",8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,], 
]};
/*[16] Chain Lightning	*/ var d252 = {index:[0,""], values:[
		["hits",5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,], 
		["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,], 
		["lightning max",40,], 
		["mana cost",8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,], 
]};
/*[17] Teleport			*/ var d243 = {index:[1,"% Damage"], values:[
		["spell damage penalty"],
		["mana cost",24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,], 
]};
/*[18]*/
/*[19] Energy Shield	*/ var d263 = {index:[0,""], values:[
		["Duration (seconds)",144,204,264,324,384,444,504,564,624,684,744,804,864,924,984,1044,1104,1164,1224,1284,1344,1404,1464,1524,1584,1644,1704,1764,1824,1884,1944,2004,2064,2124,2184,2244,2304,2364,2424,2484,2544,2604,2664,2724,2784,2844,2904,2964,3024,3084,3144,3204,3264,3324,3384,3444,3504,3564,3624,3684,], 
		["Absorbs % Damage",10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,], 
]};
/*[20] Lightning Mastery*/ var d262 = {index:[0,""], values:[
		["Lightning Damage +%",50,62,74,86,98,110,122,134,146,158,170,182,194,206,218,230,242,254,266,278,290,302,314,326,338,350,362,374,386,398,410,422,434,446,458,470,482,494,506,518,530,542,554,566,578,590,602,614,626,638,650,662,674,686,698,710,722,734,746,758,], 
]};
/*[21] Thunder Storm	*/ var d251 = {index:[0,""], values:[
		["Delay between hits"],
		["Duration (seconds)",32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256,264,272,280,288,296,304,312,320,328,336,344,352,360,368,376,384,392,400,408,416,424,432,440,448,456,464,472,480,488,496,504,], 
		["Lightning min",1,], 
		["Lightning max",100,], 
]};

/*[22] Fire Bolt		*/ var d312 = {index:[0,""], values:[
		["fire min",3,5,8,10,13,15,18,20,25,30,35,40,45,50,55,60,70,80,90,100,110,120,140,160,180,200,220,240,255,270,285,300,315,330,345,360,375,390,405,420,435,450,465,480,495,510,525,540,555,570,585,600,615,630,645,660,675,690,705,720,], 
		["fire max",6,9,12,15,18,21,24,27,34,42,49,57,64,72,79,87,105,124,142,161,179,198,225,253,280,308,335,363,381,400,418,437,455,474,492,511,529,548,566,585,603,622,640,659,677,696,714,733,751,770,788,807,825,844,862,881,899,918,936,955,], 
]};
/*[23] Warmth			*/ var d313 = {index:[0,""], values:[
		["mana recovery",30,42,54,66,78,90,102,114,126,138,150,162,174,186,198,210,222,234,246,258,270,282,294,306,318,330,342,354,366,378,390,402,414,426,438,450,462,474,486,498,510,522,534,546,558,570,582,594,606,618,630,642,654,666,678,690,702,714,726,738,], 
		["attack rating",20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,], 
]};
/*[24] Blaze			*/ var d321 = {index:[0,""], values:[
		["duration",4.6,5.6,6.6,7.6,8.6,9.6,10.6,11.6,12.6,13.6,14.6,15.6,16.6,17.6,18.6,19.6,20.6,21.6,22.6,23.6,24.6,25.6,26.6,27.6,28.6,29.6,30.6,31.6,32.6,33.6,34.6,35.6,36.6,37.6,38.6,39.6,40.6,41.6,42.6,43.6,44.6,45.6,46.6,47.6,48.6,49.6,50.6,51.6,52.6,53.6,54.6,55.6,56.6,57.6,58.6,59.6,60.6,61.6,62.6,63.6,], 
		["fire min",18,28,37,46,56,65,75,84,98,112,126,140,154,168,182,196,215,234,253,271,290,309,337,365,393,421,450,478,520,562,604,646,689,731,773,815,857,900,942,984,1026,1068,1111,1153,1195,1237,1279,1321,1364,1406,1448,1490,1532,1575,1617,1659,1701,1743,1785,1828,], 
		["fire max",37,46,56,65,75,84,93,103,117,131,145,159,173,187,201,215,234,253,271,290,309,328,356,384,412,440,468,496,539,581,623,665,707,750,792,834,876,918,961,1003,1045,1087,1129,1172,1214,1256,1298,1340,1382,1425,1467,1509,1551,1593,1635,1678,1720,1762,1804,1846,], 
		["mana cost",11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,], 
]};
/*[25] Inferno			*/ var d311 = {index:[0,""], values:[
		["fire min",7,16,25,34,43,52,61,70,88,106,124,142,160,178,196,214,250,286,322,358,394,430,483,537,591,645,699,753,807,861,915,969,1023,1076,1130,1184,1238,1292,1346,1400,1454,1508,1562,1616,1669,1723,1777,1831,1885,1939,1993,2047,2101,2155,2208,2262,2316,2370,2424,2478,], 
		["fire max",13,22,32,41,50,60,69,78,97,116,135,153,172,191,210,228,266,303,341,378,416,453,510,566,622,678,735,791,847,903,960,1016,1072,1128,1185,1241,1297,1353,1410,1466,1522,1578,1635,1691,1747,1803,1860,1916,1972,2028,2085,2141,2197,2253,2310,2366,2422,2478,2535,2591,], 
		["range",2,2,2.6,3.3,4,4,4.6,5.3,6,6,6.6,7.3,8,8,8.6,9.3,10,10,10.6,11.3,12,12,12.6,13.3,14,14,14.6,15.3,16,16,16.6,17.3,18,18,18.6,19.3,20,20,20.6,21.3,22,22,22.6,23.3,24,24,24.6,25.3,26,26,26.6,27.3,28,28,28.6,29.3,30,30,30.6,31.3,], 
		["mana cost",1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,], 
]};
/*[26] Fire Ball		*/ var d332 = {index:[1," yards"], values:[
		["radius"],
		["fire min"], 
		["fire max"], 
		["mana cost",5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,], 
]};
/*[27] Fire Wall		*/ var d331 = {index:[0,""], values:[
		["fire min",70,112,154,196,239,281,323,365,431,496,562,628,693,759,825,890,989,1087,1185,1284,1382,1481,1579,1678,1776,1875,1973,2071,2170,2268,2367,2465,2564,2662,2760,2859,2957,3056,3154,3253,3351,3449,3548,3646,3745,3843,3942,4040,4139,4237,4335,4434,4532,4631,4729,4828,4926,5025,5123,5221,], 
		["fire max",93,135,178,220,262,304,346,389,454,520,585,651,717,783,848,914,1012,1110,1209,1307,1406,1504,1603,1701,1800,1898,1996,2095,2193,2292,2390,2489,2587,2685,2784,2882,2981,3079,3178,3276,3375,3473,3571,3670,3768,3867,3965,4064,4162,4260,4359,4457,4556,4654,4753,4851,4950,5048,5146,5245,], 
		["wall length",4,6,7,8,10,11,12,14,15,16,18,19,20,22,23,24,26,27,28,30,31,32,34,35,36,38,39,40,42,43,44,46,47,48,50,51,52,54,55,56,58,59,60,62,63,64,66,67,68,70,71,72,74,75,76,78,79,80,82,83,], 
		["mana cost",22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,], 
]};
/*[28] Enchant Fire		*/ var d343 = {index:[0,""], values:[
		["duration",144,168,192,216,240,264,288,312,336,360,384,408,432,456,480,504,528,552,576,600,624,648,672,696,720,744,768,792,816,840,864,888,912,936,960,984,1008,1032,1056,1080,1104,1128,1152,1176,1200,1224,1248,1272,1296,1320,1344,1368,1392,1416,1440,1464,1488,1512,1536,1560,], 
		["fire min",8,], 
		["fire max",10,], 
		["attack rating",20,29,38,47,56,65,74,83,92,101,110,119,128,137,146,155,164,173,182,191,200,209,218,227,236,245,254,263,272,281,290,299,308,317,326,335,344,353,362,371,380,389,398,407,416,425,434,443,452,461,470,479,488,497,506,515,524,533,542,551,], 
		["mana cost",25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,], 
]};
/*[29] Meteor			*/ var d351 = {index:[0,""], values:[
		["damage min",20,], 
		["damage max",25,], 
		["fire min",60,], 
		["fire max",75,], 
		["burning min",35,], 
		["burning max",58,], 
		["mana cost",17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,], 
]};
/*[30] Fire Mastery		*/ var d362 = {index:[0,""], values:[
		["Fire Damage Increase %",20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196,200,204,208,212,216,220,224,228,232,236,240,244,248,252,256,], 
		["- Enemy Fire Resistance %",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,], 
]};
/*[31] Hydra			*/ var d363 = {index:[0,""], values:[
		["fire min",42,50,58,66,74,82,90,98,109,121,132,144,155,167,178,190,205,221,236,252,267,283,302,321,340,359,378,397,419,441,463,485,507,529,551,573,595,617,639,661,683,705,727,749,771,793,815,837,859,881,903,925,947,969,991,1013,1035,1057,1079,1101,], 
		["fire max",58,68,78,88,98,108,118,128,141,153,166,178,191,203,216,228,246,263,281,298,316,333,354,374,395,415,436,456,480,503,527,550,574,597,621,644,668,691,715,738,762,785,809,832,856,879,903,926,950,973,997,1020,1044,1067,1091,1114,1138,1161,1185,1208,], 
		["mana cost",20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,], 
]};
/*[32] Lesser Hydra		*/ var d333 = {index:[0,""], values:[
		["fire min",3,7,10,14,17,21,24,28,35,42,49,56,63,70,77,84,98,112,126,140,154,168,186,204,222,240,258,276,294,312,330,348,366,384,402,420,438,456,474,492,510,528,546,564,582,600,618,636,654,672,690,708,726,744,762,780,798,816,834,852,], 
		["fire max",6,10,14,18,22,26,30,34,42,50,58,66,74,82,90,98,114,130,146,162,178,194,214,234,254,274,294,314,334,354,374,394,414,434,454,474,494,514,534,554,574,594,614,634,654,674,694,714,734,754,774,794,814,834,854,874,894,914,934,954,], 
		["mana cost",10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,], 
]};
/*[33] Combustion		*/ var d352 = {index:[0,""], values:[
		["fire min",12,], 
		["fire max",28,], 
		["mana cost",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,], 
]};

var skills_pd2_sorceress = [
{data:d112, key:"112", code:36, name:"Ice Bolt", i:0, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 82px; left: 72px;", description:"Creates a magical bolt of ice<br>that damages and slows your enemies", syn_title:"<br>Ice Bolt Receives Bonuses From:<br>", syn_text:"Ice Blast: +20% Cold Damage per Level<br>Glacial Spike: +20% Cold Damage per Level", graytext:"", text:["Cold Damage: ","-","<br>Cold Length: "," seconds<br>Mana Cost: ",""]},
{data:d113, key:"113", code:37, name:"Cold Enchant", i:1, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, effect:0, bindable:0, style:"display: block; top: 82px; left: 142px;", description:"Enchants equipped weapon of targetd character or minion<br>Adds cold damage to melee weapons<br>Adds one-third cold damage to ranged weapons", syn_title:"<br>Cold Enchant Receives Bonuses From:<br>", syn_text:"Chilling Armor: +25% Cold Damage per Level", graytext:"", text:["Duration: "," seconds<br>Cold Damage: ","-","<br>Mana Cost: ",""]},
{data:d121, key:"121", code:38, name:"Frost Nova", i:2, req:[], reqlvl:6, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 150px; left: 2px;", description:"Creates an expanding ring of ice that damages<br>and slows all nearby enemies", syn_title:"<br>Frost Nova Receives Bonuses From:<br>", syn_text:"Ice Bolt: +16% Cold Damage per Level<br>Shiver Armor: +16% Cold Damage per Level", graytext:"", text:["Cold Damage: ","-","<br>Cold Length: "," seconds<br>Mana Cost: ",""]},
{data:d122, key:"122", code:39, name:"Ice Blast", i:3, req:[0], reqlvl:6, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 150px; left: 72px;", description:"Creates a magical sphere of ice that<br>damages and freezes your enemy", syn_title:"<br>Ice Blast Receives Bonuses From:<br>", syn_text:"Ice Bolt: +6% Cold Damage per Level<br>Glacial Spike: +6% Cold Damage per Level", graytext:"", text:["Cold Damage: ","-","<br>Freezes for 2 seconds<br>Mana Cost: ",""]},
{data:d133, key:"133", code:40, name:"Shiver Armor", i:4, req:[1,3,0], reqlvl:12, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 218px; left: 142px;", description:"Increases your defense rating<br>Freezes and damages enemies that hit you", syn_title:"<br>Shiver Armor Receives Bonuses From:<br>", syn_text:"Cold Enchant: +10% Cold Damage per Level<br>Chilling Armor: +10% Cold Damage per Level", graytext:"", text:["Duration: "," seconds<br>Defense Bonus: "," percent<br>Cold Damage: ","-","<br>Cold Length: "," seconds<br>Mana Cost: 11"]},
{data:d142, key:"142", code:41, name:"Glacial Spike", i:5, req:[3,0], reqlvl:18, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 286px; left: 72px;", description:"Creates a magical ice comet<br>that freezes or kills nearby enemies<br><br>Radius: 3.3 yards", syn_title:"<br>Glacial Spike Receives Bonuses From:<br>", syn_text:"Ice Barrage: +5% Cold Damage per Level<br>Blizzard: +5% Cold Damage per Level<br>Blizzard: +5% Freeze Length per Level", graytext:"", text:["Cold Damage: ","-","<br>Freezes for "," seconds<br>Mana Cost: ",""]},
{data:d151, key:"151", code:42, name:"Blizzard", i:6, req:[2,5,3,0], reqlvl:24, level:0, extra_levels:0, force_levels:0, bindable:1, style:"display: block; top: 354px; left: 2px;", description:"Summons massive shards of ice to destroy your enemies", syn_title:"<br>Blizzard Receives Bonuses From:<br>", syn_text:"Ice Bolt: +7% Cold Damage per Level<br>Glacial Spike: +7% Cold Damage per Level", graytext:"", text:["Radius: 4.6 yards<br>Cold Damage: ","-","<br>Duration: 2 seconds<br>Mana Cost: ",""]},
{data:d152, key:"152", code:43, name:"Ice Barrage", i:7, req:[5,3,0], reqlvl:24, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 354px; left: 72px;", description:"Creates a barrage of magical ice lances<br>that damage and slow nearby enemies<br><br>Radius: 2.6 yards", syn_title:"<br>Ice Barrage Receives Bonuses From:<br>", syn_text:"Ice Bolt: +7% Cold Damage per Level<br>Glacial Spike: +7% Cold Damage per Level", graytext:"", text:["Cold Damage: ","-","<br>"," Ice Lances<br>Mana Cost: ",""]},
{data:d153, key:"153", code:44, name:"Chilling Armor", i:8, req:[4,1,3,0], reqlvl:24, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 354px; left: 142px;", description:"Increases defense and discharges a blizzard spike<br>in retaliation against ranged attackers<br>Damages melee attackers if you are hit", syn_title:"<br>Chilling Armor Receives Bonuses From:<br>", syn_text:"Cold Enchant: +10% Cold Damage per Level<br>Shiver Armor: +10% Cold Damage per Level", graytext:"", text:["Defense Bonus: "," percent<br>Duration: "," seconds<br>Cold Damage: ","-","<br>Mana Cost: 17",""]},
{data:d161, key:"161", code:45, name:"Frozen Orb", i:9, req:[6,2,5,3,0], reqlvl:30, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 422px; left: 2px;", description:"Creates a magical globe that sprays a torrent of ice bolts<br>to lay waste to your enemies", syn_title:"<br>Frozen Orb Receives Bonuses From:<br>", syn_text:"Ice Bolt: +2% Cold Damage per Level<br>Ice Blast: +2% Cold Damage per Level", graytext:"", text:["Cold Damage: ","-","<br>Cold Length: "," seconds<br>Mana Cost: ",""]},
{data:d162, key:"162", code:46, name:"Cold Mastery", i:10, req:[], reqlvl:30, level:0, extra_levels:0, force_levels:0, effect:1, bindable:0, style:"display: block; top: 422px; left: 72px;", description:"Passive - Increases the damage of your cold skills<br>by piercing enemies' resistances to cold", syn_title:"", syn_text:"", graytext:"", text:["Cold Damage: +"," percent<br>Cold Pierce: +"," percent"]},

{data:d212, key:"212", code:47, name:"Charged Bolt", i:11, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 82px; left: 180px;", description:"Creates multiple, randomly directed<br>bolts of electrical energy", syn_title:"<br>Charged Bolt Receives Bonuses From:<br>", syn_text:"Telekinesis: +4% Lightning Damage per Level<br>Lightning: +4% Lightning Damage per Level", graytext:"", text:["Lightning Damage: ","-","<br>"," bolts<br>Mana Cost: ",""]},
{data:d211, key:"211", code:48, name:"Static Field", i:12, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 82px; left: 194px;", description:"Creates an electrical field that reduces life<br>of all nearby enemies<br>Lowers enemy lightning resistances for a short duration<br><br>Weakens enemies by 25 percent", syn_title:"<br>Static Field Receives Bonuses From:<br>", syn_text:"Lightning Mastery: +0.2 Seconds Duration per Level", graytext:"", text:["Duration: "," seconds<br>Enemy Lightning Resistances: "," percent<br>Radius: "," yards<br>Mana Cost: 9"]},
{data:d213, key:"213", code:49, name:"Telekinesis", i:13, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, bindable:1, style:"display: block; top: 82px; left: 264px;", description:"Uses the power of your mind to<br>pick up items, use objects,<br>and knock back enemies", syn_title:"<br>Telekinesis Receives Bonuses From:<br>", syn_text:"Charged Bolt: +14% Lightning Damage per Level<br>Nova: +14% Lightning Damage per Level", graytext:"", text:["Lightning Damage: ","-","<br>Mana Cost: 7",""]},
{data:d231, key:"231", code:50, name:"Nova", i:14, req:[11], reqlvl:12, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 218px; left: 164px;", description:"Creates an expanding ring of lightning<br>to shock nearby enemies", syn_title:"<br>Nova Receives Bonuses From:<br>", syn_text:"Charged Bolt: +3% Lightning Damage per Level<br>Telekinesis: +3% Lightning Damage per Level", graytext:"", text:["Lightning Damage: ","-","<br>Mana Cost: ",""]},
{data:d232, key:"232", code:51, name:"Lightning", i:15, req:[11], reqlvl:12, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 218px; left: 194px;", description:"Creates a powerful lightning bolt<br>to lay waste to your enemies", syn_title:"<br>Lightning Receives Bonuses From:<br>", syn_text:"Charged Bolt: +6% Lightning Damage per Level<br>Chain Lightning: +6% Lightning Damage per Level", graytext:"", text:["Lightning Damage: ","-","<br>Mana Cost: ",""]},
{data:d252, key:"252", code:52, name:"Chain Lightning", i:16, req:[15,11], reqlvl:24, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 354px; left: 200px;", description:"Creates a bolt of lightning that<br>arcs through several targets", syn_title:"<br>Chain Lightning Receives Bonuses From:<br>", syn_text:"Charged Bolt: +5% Lightning Damage per Level<br>Lightning: +5% Lightning Damage per Level", graytext:"", text:[""," hits<br>Lightning Damage: ","-","<br>Mana Cost: ",""]},
{data:d243, key:"243", code:53, name:"Teleport", i:17, req:[13], reqlvl:18, level:0, extra_levels:0, force_levels:0, bindable:1, style:"display: block; top: 286px; left: 200px;", description:"Instantly move to a destination within your line of sight<br>and reduces the spell damage you deal for 1 second", syn_title:"", syn_text:"", graytext:"", text:["","Mana Cost: ",""]},
/*TODO: remove*/{data:d263, key:"263", code:54, name:"None", i:18, req:[], reqlvl:100, level:0, extra_levels:0, force_levels:0, bindable:0, style:"display: none;", description:"", syn_title:"", syn_text:"", graytext:"", text:[""]},
{data:d263, key:"263", code:55, name:"Energy Shield", i:19, req:[16,17,13,15,11], reqlvl:30, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 422px; left: 254px;", description:"Creates a magical shield that consumes mana<br>instead of health when you take damage", syn_title:"<br>Energy Shield Receives Bonuses From:<br>", syn_text:"Telekinesis", graytext:"", text:["Duration: "," seconds<br>Absorbs "," percent<br>Mana Cost: 5",""]},
{data:d262, key:"262", code:56, name:"Lightning Mastery", i:20, req:[], reqlvl:30, level:0, extra_levels:0, force_levels:0, effect:1, bindable:0, style:"display: block; top: 422px; left: 204px;", description:"Passive - Increases all damage caused by your lightning spells", syn_title:"", syn_text:"", graytext:"", text:["Lightning Damage: +"," percent",""]},
{data:d251, key:"251", code:57, name:"Thunder Storm", i:21, req:[15,14,11], reqlvl:24, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 354px; left: 174px;", description:"Summons a deadly thunderstorm that strikes<br>your enemies with bolts of lightning", syn_title:"<br>Thunder Storm Receives Bonuses From:<br>", syn_text:"Lightning: +4% Lightning Damage per Level<br>Nova: +4% Lightning Damage per Level", graytext:"", text:["Delay: "," seconds<br>Duration: "," seconds<br>Lightning Damage: ","-","<br>Mana Cost: 19"]},

{data:d312, key:"312", code:58, name:"Fire Bolt", i:22, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 82px; left: 376px;", description:"Creates a magical flaming missile<br><br>Mana Cost: 2.5", syn_title:"<br>Fire Bolt Receives Bonuses From:<br>", syn_text:"Fire Ball: +20% Fire Damage per Level<br>Combustion: +20% Fire Damage per Level", graytext:"", text:["Fire Damage: ","-",""]},
{data:d313, key:"313", code:59, name:"Warmth", i:23, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, effect:0, bindable:0, style:"display: block; top: 82px; left: 326px;", description:"Passive - Increases the rate at which you recover mana<br>and grants passive attack rating", syn_title:"", syn_text:"", graytext:"", text:[""," percent<br>+"," Attack Rating"]},
{data:d321, key:"321", code:60, name:"Blaze", i:24, req:[25], reqlvl:6, level:0, extra_levels:0, force_levels:0, effect:0, bindable:1, style:"display: block; top: 150px; left: 295px;", description:"Creates a wall of fire<br>in your wake to scorch your enemies", syn_title:"<br>Blaze Receives Bonuses From:<br>", syn_text:"Warmth: +4% Fire Damage per Level<br>Fire Wall: +1% Fire Damage per Level", graytext:"", text:["Fire Duration: "," seconds<br>Average Fire Damage: ","-"," per second<br>Mana Cost: ",""]},
{data:d311, key:"311", code:61, name:"Inferno", i:25, req:[], reqlvl:1, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 82px; left: 286px;", description:"Creates a continuous jet of flame<br>to scorch your enemies<br><br>Minimum Mana Required to Cast: 4", syn_title:"<br>Inferno Receives Bonuses From:<br>", syn_text:"Fire Wall: +20% Fire Damage per Level<br>Blaze: +20% Fire Damage per Level", graytext:"", text:["Average Fire Damage: ","-"," per second<br>Range: "," yards<br>Mana Cost: "," per second"]},
{data:d332, key:"332", code:62, name:"Fire Ball", i:26, req:[22], reqlvl:12, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 218px; left: 336px;", description:"Creates an explosive sphere of fiery death<br>to engulf your enemies", syn_title:"<br>Fire Ball Receives Bonuses From:<br>", syn_text:"Fire Bolt: +14% Fire Damage per Level<br>Combustion: +14% Fire Damage per Level", graytext:"", text:["Radius: ","Fire Damage: ","-","<br>Mana Cost: ",""]},
{data:d331, key:"331", code:63, name:"Fire Wall", i:27, req:[25,24], reqlvl:12, level:0, extra_levels:0, force_levels:0, bindable:1, style:"display: block; top: 218px; left: 266px;", description:"Creates a wall of flame that<br>blocks or burns your enemies", syn_title:"<br>Fire Wall Receives Bonuses From:<br>", syn_text:"Warmth: +4% Fire Damage per Level<br>Inferno: +1% Fire Damage per Level", graytext:"", text:["Fire Duration: 3.6 seconds<br>Average Fire Damage: ","-"," per second<br>"," yards<br>Mana Cost: ",""]},
{data:d343, key:"343", code:64, name:"Enchant Fire", i:28, req:[23,26,22,32], reqlvl:18, level:0, extra_levels:0, force_levels:0, effect:0, bindable:0, style:"display: block; top: 286px; left: 306px;", description:"Enchants equipped weapon of targeted character or minion<br>Adds fire damage to melee weapons<br>Adds one-third fire damage to ranged weapons", syn_title:"<br>Enchant Fire Receives Bonuses From:<br>", syn_text:"Warmth: +15% Fire Damage per Level", graytext:"", text:["Duration: ","<br>Fire Damage: ","-","<br>Attack Bonus: +"," percent<br>Mana Cost: ",""]},
{data:d351, key:"351", code:65, name:"Meteor", i:29, req:[26,27,22,25,24], reqlvl:24, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 354px; left: 306px;", description:"Summons a meteor from the heavens<br>to crush and incinerate your enemies", syn_title:"<br>Meteor Receives Bonuses From:<br>", syn_text:"Fire Ball: +5% Damage per Level<br>Fire Wall: +5% Damage per Level<br>Inferno: +5% Damage per Level", graytext:"", text:["Damage: ","-","<br>Fire Damage: ","-","<br>Average Fire Damage: ","-"," per second<br>Mana Cost: ",""]},
{data:d362, key:"362", code:66, name:"Fire Mastery", i:30, req:[], reqlvl:30, level:0, extra_levels:0, force_levels:0, effect:1, bindable:0, style:"display: block; top: 422px; left: 306px;", description:"Passive - Increases all damage caused by your fire skills", syn_title:"", syn_text:"", graytext:"", text:["Fire Damage: +"," percent<br>Fire Pierce: +"," percent",""]},
{data:d363, key:"363", code:67, name:"Hydra", i:31, req:[28,23,26,22,32], reqlvl:30, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 422px; left: 356px;", description:"Summons a multi-headed beast of flame that casts<br>fireball to reduce your enemies to ashes", syn_title:"<br>Hydra Receives Bonuses From:<br>", syn_text:"Fire Bolt: +6% Fire Damage per Level<br>Lesser Hydra: +6% Fire Damage per Level", graytext:"", text:["Duration: 10 seconds<br>Hydra Fire Damage: ","-","<br>Mana Cost: ",""]},
{data:d333, key:"333", code:305, name:"Lesser Hydra", i:32, req:[23], reqlvl:12, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 218px; left: 356px;", description:"Summons a multi-headed beast of flame that casts<br>firebolt to reduce your enemies to ashes", syn_title:"<br>Hydra Receives Bonuses From:<br>", syn_text:"Fire Bolt: +16% Fire Damage per Level<br>Hydra: +16% Fire Damage per Level", graytext:"", text:["Duration: 10 seconds<br>Hydra Fire Damage: ","-","<br>Mana Cost: ",""]},
{data:d352, key:"352", code:306, name:"Combustion", i:33, req:[26,22], reqlvl:24, level:0, extra_levels:0, force_levels:0, bindable:2, style:"display: block; top: 354px; left: 276px;", description:"Creates an expanding ring of fire balls to engulf your enemies", syn_title:"<br>Combustion Receives Bonuses From:<br>", syn_text:"Fire Bolt: +18% Fire Damage per Level<br>Fire Ball: +18% Fire Damage per Level", graytext:"", text:["Fire Damage: ","-","<br>Mana Cost: ",""]},
];
