
var fileInfo = {character:{class_name:""},skills:[],equipped:{charms:[]},corruptsEquipped:{},mercEquipped:{},socketed:{helm:[],armor:[],weapon:[],offhand:[]},effects:{},selectedSkill:["",""],mercenary:"",settings:{},ironGolem:""};
var fileText = "";

class Character {
	absorb_elemental; //Number
	absorb_es_deplete; //Number
	absorb_es_redirect; //Number
	absorb_melee; //Number
	all_attributes; //Number
	all_res; //Number
	all_skills; //Number
	all_skills_ember; //Number
	all_skills_per_level; //Number
	amountSummoned; //Number
	ar; //Number
	ar_bonus; //Number
	ar_bonus_per_level; //Number
	ar_const; //Number
	ar_per_dexterity; //Number
	ar_per_level; //Number
	ar_per_socketed; //Number
	ar_shrine_bonus; //Number
	ar_skillup; //Number
	ar_skillup2; //Number
	ar_vs_demons; //Number
	ar_vs_demons_per_level; //Number
	ar_vs_undead; //Number
	ar_vs_undead_per_level; //Number
	armor; //string
	attraction; //Number
	aura; //string
	aura_lvl; //Number
	autorepair; //Number
	autoreplenish; //Number
	avoid; //Number
	baseSpeed; //Number
	base_damage_max; //Number
	base_damage_min; //Number
	base_defense; //Number
	base_max_alternate; //Number
	base_min_alternate; //Number
	blind_on_hit; //Number
	block; //Number
	block_const; //Number
	block_skillup; //Number
	blunt_ar; //Number
	blunt_cstrike; //Number
	blunt_damage; //Number
	bonus_corpse_explosion; //Number
	bonus_sanctuary_rate; //Number
	cAbsorb; //Number
	cAbsorb_flat; //Number
	cAbsorb_flat_per_level; //Number
	cDamage; //Number
	cDamage_max; //Number
	cDamage_max_per_level; //Number
	cDamage_min; //Number
	cDamage_per_ice; //Number
	cDamage_per_socketed; //Number
	cPierce; //Number
	cRes; //Number
	cRes_max; //Number
	cRes_max_base; //Number
	cRes_penalty; //Number
	cRes_per_level; //Number
	cRes_skillup; //Number
	cbf; //Number
	cblow; //Number
	cdr; //Number
	cdr_on_striking; //Number
	charge_bonus_accuracy; //Number
	charge_bonus_explosion; //Number
	charge_bonus_fork; //Number
	charge_bonus_icicles; //Number
	charge_bonus_leech; //Number
	charge_bonus_meteor; //Number
	charge_bonus_reduce; //Number
	charge_bonus_static; //Number
	charge_cobra; //Number
	charge_ember; //Number
	charge_ice; //Number
	charge_thunder; //Number
	charge_tiger; //Number
	class_name; //string
	claw_ar; //Number
	claw_cstrike; //Number
	claw_damage; //Number
	confused; //Number
	counterattack; //Number
	cskill; //string
	cstrike; //Number
	cstrike_skillup; //Number
	ctc; //string
	ctc_temp1; //Number
	ctc_temp2; //Number
	curse_length_reduced; //Number
	damage_bonus; //Number
	damage_max; //Number
	damage_min; //Number
	damage_reduced; //Number
	damage_to_mana; //Number
	damage_vs_demons; //Number
	damage_vs_demons_per_level; //Number
	damage_vs_undead; //Number
	damage_vs_undead_per_level; //Number
	def_high; //Number
	def_low; //Number
	defense; //Number
	defense_bonus; //Number
	defense_per_level; //Number
	defense_skillup; //Number
	dexterity; //Number
	dexterity_added; //Number
	dexterity_per_level; //Number
	difficulty; //Number
	dimmedVision; //Number
	discount; //Number
	dodge; //Number
	downgrade; //string
	dstrike; //Number
	dstrike_per_level; //Number
	durability; //Number
	durability_extra; //Number
	duration; //Number
	e_damage; //Number
	e_def; //Number
	e_def_per_level; //Number
	e_max_damage_per_level; //Number
	edged_ar; //Number
	edged_cstrike; //Number
	edged_damage; //Number
	enemy_allRes; //Number
	enemy_attack; //Number
	enemy_cRes; //Number
	enemy_damage; //Number
	enemy_defense; //Number
	enemy_defense_flat; //Number
	enemy_fRes; //Number
	enemy_frw; //Number
	enemy_ias; //Number
	enemy_lRes; //Number
	enemy_pRes; //Number
	enemy_physRes; //Number
	energy; //Number
	energy_added; //Number
	ethereal; //Number
	evade; //Number
	experience; //Number
	explosive_attack; //Number
	extraFireGolem; //Number
	extraGrizzly; //Number
	extraHydra; //Number
	extraValkyrie; //Number
	extra_Bone_Spears; //Number
	extra_arrows_Cold_Arrow; //Number
	extra_arrows_Fire_Arrow; //Number
	extra_arrows_Ice_Arrow; //Number
	extra_arrows_Magic_Arrow; //Number
	extra_conversion_Magic_Arrow; //Number
	extra_mainhand_attack; //Number
	fAbsorb; //Number
	fAbsorb_flat; //Number
	fAbsorb_flat_per_level; //Number
	fDamage; //Number
	fDamage_max; //Number
	fDamage_max_per_level; //Number
	fDamage_min; //Number
	fPierce; //Number
	fRes; //Number
	fRes_max; //Number
	fRes_max_base; //Number
	fRes_penalty; //Number
	fRes_per_level; //Number
	fRes_skillup; //Number
	fade; //Number
	fbr; //Number
	fbr_bp; //array
	fbr_frames; //Number
	fcr; //Number
	fcr_bp; //array
	fcr_frames; //Number
	fcr_per_level; //Number
	fhr; //Number
	fhr_bp; //array
	fhr_frames; //Number
	flamme; //Number
	flee_distance; //Number
	flee_on_hit; //Number
	fleeing; //Number
	freezes_target; //Number
	frenzy_duration; //Number
	frw; //Number
	frw_skillup; //Number
	gf; //Number
	gf_per_level; //Number
	glow; //Number
	group; //string
	half_Battle_Orders; //Number
	half_freeze; //Number
	hammer_bonus; //Number
	hammer_on_hit; //Number
	heal_stam; //Number
	heal_stam_per_level; //Number
	ias; //Number
	ias_per_8_dexterity; //Number
	ias_skill; //Number
	ibc; //Number
	indestructible; //Number
	itd; //Number
	item_defense; //Number
	kick_damage_per_level; //Number
	kick_min; //Number
	knockback; //Number
	lAbsorb; //Number
	lAbsorb_flat; //Number
	lDamage; //Number
	lDamage_max; //Number
	lDamage_max_per_2_energy; //Number
	lDamage_max_per_level; //Number
	lDamage_min; //Number
	lPierce; //Number
	lRes; //Number
	lRes_max; //Number
	lRes_max_base; //Number
	lRes_penalty; //Number
	lRes_per_level; //Number
	lRes_skillup; //Number
	level; //Number
	levelup_life; //Number
	levelup_mana; //Number
	levelup_stamina; //Number
	life; //Number
	life_leech; //Number
	life_per_demon_kill; //Number
	life_per_hit; //Number
	life_per_kill; //Number
	life_per_level; //Number
	life_per_ranged_hit; //Number
	life_per_vitality; //Number
	life_regen; //Number
	life_replenish; //Number
	light_radius; //Number
	mAbsorb_flat; //Number
	mDamage; //Number
	mDamage_max; //Number
	mDamage_min; //Number
	mDamage_per_frenzy_charge; //Number
	mDamage_reduced; //Number
	mRes; //Number
	mRes_max; //Number
	mRes_max_base; //Number
	mRes_penalty; //Number
	magic_attack; //Number
	mana; //Number
	mana_leech; //Number
	mana_per_energy; //Number
	mana_per_hit; //Number
	mana_per_kill; //Number
	mana_per_level; //Number
	mana_per_ranged_hit; //Number
	mana_regen; //float
	max_damage_per_level; //Number
	max_energy; //Number
	max_life; //Number
	max_mana; //Number
	max_sockets; //Number
	max_stamina; //Number
	melee_defense; //Number
	melee_splash; //Number
	mf; //Number
	mf_per_level; //Number
	min_damage_per_level; //Number
	missile_defense; //Number
	monster_defense_per_hit; //Number
	nonmetal; //Number
	not; //string
	only; //string
	oskill_Ball_Lightning; //Number
	oskill_Bash; //Number
	oskill_Battle_Command; //Number
	oskill_Battle_Cry; //Number
	oskill_Battle_Orders; //Number
	oskill_Berserk; //Number
	oskill_Cold_Mastery; //Number
	oskill_Desecrate; //Number
	oskill_Edged_Weapon_Mastery; //Number
	oskill_Feral_Rage; //Number
	oskill_Fire_Ball; //Number
	oskill_Fire_Mastery; //Number
	oskill_Fire_Wall; //Number
	oskill_Flame_Dash; //Number
	oskill_Frigerate; //Number
	oskill_Guided_Arrow; //Number
	oskill_Heart_of_Wolverine; //Number
	oskill_Hydra; //Number
	oskill_Inner_Sight; //Number
	oskill_Lethal_Strike; //Number
	oskill_Lycanthropy; //Number
	oskill_Magic_Arrow; //Number
	oskill_Meteor; //Number
	oskill_Multiple_Shot; //Number
	oskill_Shiver_Armor; //Number
	oskill_Summon_Dire_Wolf; //Number
	oskill_Teleport; //Number
	oskill_Valkyrie; //Number
	oskill_Vengeance; //Number
	oskill_Warp; //Number
	oskill_Werebear; //Number
	oskill_Werewolf; //Number
	oskill_Whirlwind; //Number
	oskill_Zeal; //Number
	owounds; //Number
	owounds_dps; //Number
	owounds_dps_per_level; //Number
	owounds_duration; //Number
	pDamage; //Number
	pDamage_all; //Number
	pDamage_duration; //Number
	pDamage_duration_override; //Number
	pDamage_max; //Number
	pDamage_min; //Number
	pPierce; //Number
	pRes; //Number
	pRes_max; //Number
	pRes_max_base; //Number
	pRes_penalty; //Number
	pRes_per_level; //Number
	pRes_skillup; //Number
	pdr; //Number
	peace; //Number
	phys_Lightning_Surge; //Number
	pierce; //Number
	pierce_skillup; //Number
	pmh; //Number
	pod_changes; //Number
	poison_length_reduced; //Number
	pole_ar; //Number
	pole_cstrike; //Number
	pole_damage; //Number
	pulverize; //Number
	quests_completed; //boolean
	radius; //Number
	radius_FreezingArrow; //Number
	range; //Number
	rarity; //string
	reanimate; //Number
	redeem_amount; //Number
	redeem_chance; //Number
	req; //Number
	req_dexterity; //Number
	req_level; //Number
	req_strength; //Number
	reset_cooldown_on_kill; //Number
	reset_on_kill; //Number
	resistance_skillup; //Number
	running; //boolean
	set_Ald; //Number
	set_Angelic; //Number
	set_Arcanna; //Number
	set_Arctic; //Number
	set_BK; //Number
	set_Berserker; //Number
	set_Brethren; //Number
	set_Cathan; //Number
	set_Civerb; //Number
	set_Cleglaw; //Number
	set_Cow; //Number
	set_Death; //Number
	set_Disciple; //Number
	set_Gris; //Number
	set_Hsarus; //Number
	set_Hwanin; //Number
	set_IK; //Number
	set_Infernal; //Number
	set_Iratha; //Number
	set_Isenhart; //Number
	set_Mav; //Number
	set_Milabrega; //Number
	set_Naj; //Number
	set_Nat; //Number
	set_Orphan; //Number
	set_Sander; //Number
	set_Sazabi; //Number
	set_Sigon; //Number
	set_TO; //Number
	set_TR; //Number
	set_Tancred; //Number
	set_Vidala; //Number
	set_bonuses; //string
	shield; //string
	size; //string
	skill_Amplify_Damage; //Number
	skill_Arctic_Blast; //Number
	skill_Armageddon; //Number
	skill_Attract; //Number
	skill_Avoid; //Number
	skill_Axe_Mastery; //Number
	skill_Bash; //Number
	skill_Battle_Command; //Number
	skill_Battle_Cry; //Number
	skill_Battle_Orders; //Number
	skill_Berserk; //Number
	skill_Blade_Fury; //Number
	skill_Blade_Sentinel; //Number
	skill_Blade_Shield; //Number
	skill_Blade_Throw; //Number
	skill_Blades_of_Ice; //Number
	skill_Blaze; //Number
	skill_Blessed_Aim; //Number
	skill_Blessed_Hammer; //Number
	skill_Blizzard; //Number
	skill_Blood_Golem; //Number
	skill_Blood_Warp; //Number
	skill_Blunt_Weapon_Mastery; //Number
	skill_Bone_Armor; //Number
	skill_Bone_Offering; //Number
	skill_Bone_Prison; //Number
	skill_Bone_Spear; //Number
	skill_Bone_Spirit; //Number
	skill_Bone_Wall; //Number
	skill_Burst_of_Speed; //Number
	skill_Carrion_Vine; //Number
	skill_Chain_Lightning; //Number
	skill_Chain_Lightning_Sentry; //Number
	skill_Charge; //Number
	skill_Charged_Bolt; //Number
	skill_Charged_Bolt_Sentry; //Number
	skill_Charged_Strike; //Number
	skill_Chilling_Armor; //Number
	skill_Claw_Mastery; //Number
	skill_Claw_and_Dagger_Mastery; //Number
	skill_Claws_of_Thunder; //Number
	skill_Clay_Golem; //Number
	skill_Cleansing; //Number
	skill_Cleave; //Number
	skill_Cloak_of_Shadows; //Number
	skill_Cobra_Strike; //Number
	skill_Cold_Arrow; //Number
	skill_Cold_Enchant; //Number
	skill_Cold_Mastery; //Number
	skill_Combat_Reflexes; //Number
	skill_Combustion; //Number
	skill_Concentrate; //Number
	skill_Concentration; //Number
	skill_Confuse; //Number
	skill_Conversion; //Number
	skill_Conviction; //Number
	skill_Convocation; //Number
	skill_Corpse_Explosion; //Number
	skill_Counter_Attack; //Number
	skill_Critical_Strike; //Number
	skill_Curse_Mastery; //Number
	skill_Cyclone_Armor; //Number
	skill_Dark_Pact; //Number
	skill_Dashing_Strike; //Number
	skill_Deadly_Poison; //Number
	skill_Death_Sentry; //Number
	skill_Decoy; //Number
	skill_Decrepify; //Number
	skill_Deep_Wounds; //Number
	skill_Defiance; //Number
	skill_Desecrate; //Number
	skill_Dim_Vision; //Number
	skill_Discharge; //Number
	skill_Dodge; //Number
	skill_Double_Swing; //Number
	skill_Double_Throw; //Number
	skill_Dragon_Claw; //Number
	skill_Dragon_Flight; //Number
	skill_Dragon_Tail; //Number
	skill_Dragon_Talon; //Number
	skill_Dual_Strike; //Number
	skill_Edged_Weapon_Mastery; //Number
	skill_Emberstorm; //Number
	skill_Enchant; //Number
	skill_Enchant_Fire; //Number
	skill_Energy_Shield; //Number
	skill_Enflame; //Number
	skill_Ethereal_Throw; //Number
	skill_Evade; //Number
	skill_Exploding_Arrow; //Number
	skill_Fade; //Number
	skill_Fanaticism; //Number
	skill_Fend; //Number
	skill_Feral_Rage; //Number
	skill_Find_Item; //Number
	skill_Find_Potion; //Number
	skill_Fire_Arrow; //Number
	skill_Fire_Ball; //Number
	skill_Fire_Blast; //Number
	skill_Fire_Bolt; //Number
	skill_Fire_Claws; //Number
	skill_Fire_Golem; //Number
	skill_Fire_Mastery; //Number
	skill_Fire_Wall; //Number
	skill_Firestorm; //Number
	skill_Fissure; //Number
	skill_Fist_of_the_Heavens; //Number
	skill_Fists_of_Ember; //Number
	skill_Fists_of_Fire; //Number
	skill_Fists_of_Ice; //Number
	skill_Fists_of_Thunder; //Number
	skill_Flame_Dash; //Number
	skill_Flesh_Offering; //Number
	skill_Freezing_Arrow; //Number
	skill_Freezing_Pulse; //Number
	skill_Frenzy; //Number
	skill_Frigerate; //Number
	skill_Frost_Nova; //Number
	skill_Frozen_Armor; //Number
	skill_Frozen_Orb; //Number
	skill_Fury; //Number
	skill_General_Mastery; //Number
	skill_Glacial_Spike; //Number
	skill_Golem_Mastery; //Number
	skill_Grim_Ward; //Number
	skill_Guided_Arrow; //Number
	skill_Gust; //Number
	skill_Heart_of_Wolverine; //Number
	skill_Hemorrhage; //Number
	skill_Holy_Bolt; //Number
	skill_Holy_Fire; //Number
	skill_Holy_Freeze; //Number
	skill_Holy_Light; //Number
	skill_Holy_Nova; //Number
	skill_Holy_Shield; //Number
	skill_Holy_Shock; //Number
	skill_Howl; //Number
	skill_Hunger; //Number
	skill_Hurricane; //Number
	skill_Hydra; //Number
	skill_Ice_Arrow; //Number
	skill_Ice_Barrage; //Number
	skill_Ice_Blast; //Number
	skill_Ice_Bolt; //Number
	skill_Immolate; //Number
	skill_Immolation_Arrow; //Number
	skill_Impale; //Number
	skill_Increased_Speed; //Number
	skill_Increased_Stamina; //Number
	skill_Inferno; //Number
	skill_Inner_Sight; //Number
	skill_Iron_Golem; //Number
	skill_Iron_Maiden; //Number
	skill_Iron_Skin; //Number
	skill_Jab; //Number
	skill_Javelin_and_Spear_Mastery; //Number
	skill_Joust; //Number
	skill_Leap; //Number
	skill_Leap_Attack; //Number
	skill_Lesser_Hydra; //Number
	skill_Lethal_Strike; //Number
	skill_Life_Tap; //Number
	skill_Lightning; //Number
	skill_Lightning_Bolt; //Number
	skill_Lightning_Fury; //Number
	skill_Lightning_Mastery; //Number
	skill_Lightning_Sentry; //Number
	skill_Lightning_Strike; //Number
	skill_Lightning_Surge; //Number
	skill_Lower_Resist; //Number
	skill_Lycanthropy; //Number
	skill_Mace_Mastery; //Number
	skill_Magic_Arrow; //Number
	skill_Maul; //Number
	skill_Meditation; //Number
	skill_Meteor; //Number
	skill_Might; //Number
	skill_Mind_Barrier; //Number
	skill_Mind_Blast; //Number
	skill_Molten_Boulder; //Number
	skill_Molten_Strike; //Number
	skill_Multiple_Shot; //Number
	skill_Natural_Resistance; //Number
	skill_Nova; //Number
	skill_Oak_Sage; //Number
	skill_One_Handed_Weapon_Mastery; //Number
	skill_Penetrate; //Number
	skill_Phase_Run; //Number
	skill_Phoenix_Strike; //Number
	skill_Pierce; //Number
	skill_Plague_Javelin; //Number
	skill_Poison_Creeper; //Number
	skill_Poison_Dagger; //Number
	skill_Poison_Explosion; //Number
	skill_Poison_Javelin; //Number
	skill_Poison_Nova; //Number
	skill_Poison_Strike; //Number
	skill_Pole_Weapon_Mastery; //Number
	skill_Polearm_Mastery; //Number
	skill_Polearm_and_Spear_Mastery; //Number
	skill_Power_Strike; //Number
	skill_Power_Throw; //Number
	skill_Prayer; //Number
	skill_Precision; //Number
	skill_Psychic_Hammer; //Number
	skill_Pulverize; //Number
	skill_Puncture; //Number
	skill_Rabies; //Number
	skill_Raise_Skeletal_Mage; //Number
	skill_Raise_Skeleton; //Number
	skill_Raise_Skeleton_Archer; //Number
	skill_Raise_Skeleton_Warrior; //Number
	skill_Raven; //Number
	skill_Redemption; //Number
	skill_Resist_Cold; //Number
	skill_Resist_Fire; //Number
	skill_Resist_Lightning; //Number
	skill_Revive; //Number
	skill_Sacrifice; //Number
	skill_Salvation; //Number
	skill_Sanctuary; //Number
	skill_Shadow_Master; //Number
	skill_Shadow_Warrior; //Number
	skill_Shiver_Armor; //Number
	skill_Shock_Wave; //Number
	skill_Shock_Web; //Number
	skill_Shout; //Number
	skill_Skeleton_Mastery; //Number
	skill_Slow_Missiles; //Number
	skill_Slow_Movement; //Number
	skill_Smite; //Number
	skill_Solar_Creeper; //Number
	skill_Spear_Mastery; //Number
	skill_Spirit_of_Barbs; //Number
	skill_Static_Field; //Number
	skill_Static_Strike; //Number
	skill_Strafe; //Number
	skill_Stun; //Number
	skill_Summon_Dire_Wolf; //Number
	skill_Summon_Grizzly; //Number
	skill_Summon_Mastery; //Number
	skill_Summon_Resist; //Number
	skill_Summon_Spirit_Wolf; //Number
	skill_Sword_Mastery; //Number
	skill_Taunt; //Number
	skill_Teeth; //Number
	skill_Telekinesis; //Number
	skill_Teleport; //Number
	skill_Terror; //Number
	skill_Thorns; //Number
	skill_Throwing_Mastery; //Number
	skill_Thrown_Weapon_Mastery; //Number
	skill_Thunder_Storm; //Number
	skill_Tiger_Strike; //Number
	skill_Tornado; //Number
	skill_Twister; //Number
	skill_Two_Handed_Weapon_Mastery; //Number
	skill_Valkyrie; //Number
	skill_Vengeance; //Number
	skill_Venom; //Number
	skill_Vigor; //Number
	skill_Volcano; //Number
	skill_Wake_of_Fire; //Number
	skill_Wake_of_Inferno; //Number
	skill_War_Cry; //Number
	skill_Warmth; //Number
	skill_Weaken; //Number
	skill_Weapon_Block; //Number
	skill_Werebear; //Number
	skill_Werewolf; //Number
	skill_Whirlwind; //Number
	skill_Zeal; //Number
	skill_layout; //string
	skillpoints; //Number
	skills_amazon; //Number
	skills_assassin; //Number
	skills_barbarian; //Number
	skills_bows; //Number
	skills_class; //Number
	skills_cold; //Number
	skills_cold_all; //Number
	skills_combat_barbarian; //Number
	skills_combat_paladin; //Number
	skills_curses; //Number
	skills_defensive; //Number
	skills_druid; //Number
	skills_elemental; //Number
	skills_fire; //Number
	skills_fire_all; //Number
	skills_javelins; //Number
	skills_lightning; //Number
	skills_lightning_all; //Number
	skills_magic_all; //Number
	skills_martial; //Number
	skills_masteries; //Number
	skills_necromancer; //Number
	skills_offensive; //Number
	skills_paladin; //Number
	skills_passives; //Number
	skills_poisonBone; //Number
	skills_poison_all; //Number
	skills_shadow; //Number
	skills_shapeshifting; //Number
	skills_sorceress; //Number
	skills_summoning_druid; //Number
	skills_summoning_necromancer; //Number
	skills_traps; //Number
	skills_tree1; //Number
	skills_tree2; //Number
	skills_tree3; //Number
	skills_warcries; //Number
	slow_enemies; //Number
	slow_ranged_attacks; //Number
	slower_stam_drain; //Number
	slows_target; //Number
	smite_max; //Number
	smite_min; //Number
	sockets; //Number
	special; //Number
	stack_size; //Number
	stamina; //Number
	stamina_per_level; //Number
	stamina_per_vitality; //Number
	stamina_skillup; //Number
	starting_dexterity; //Number
	starting_energy; //Number
	starting_strength; //Number
	starting_vitality; //Number
	statpoints; //Number
	strength; //Number
	strength_added; //Number
	strength_per_level; //Number
	summon_damage; //Number
	summon_damage_bonus; //Number
	summon_defense; //Number
	sup; //Number
	target_defense; //Number
	thorns; //Number
	thorns_lightning; //Number
	thorns_per_level; //Number
	thorns_reflect; //Number
	throw_max; //Number
	throw_min; //Number
	thrown_ar; //Number
	thrown_cstrike; //Number
	thrown_damage; //Number
	thrown_pierce; //Number
	tier; //Number
	twoHanded; //Number
	twoHands; //Number
	type; //string
	upgrade; //string
	velocity; //Number
	velocity_skillup; //Number
	vitality; //Number
	vitality_added; //Number
	vitality_per_level; //Number
	weapon; //string
	weapon_frames; //object
}

var _character = new Character();



var character = {};




var skill_bonuses = {stamina_skillup:0, frw_skillup:0, defense_skillup:0, resistance_skillup:0, cstrike_skillup:0, ar_skillup:0, ar_skillup2:0, pierce_skillup:0, fRes_skillup:0, cRes_skillup:0, lRes_skillup:0, pRes_skillup:0, block_skillup:0, velocity_skillup:0, edged_damage:0, edged_ar:0, edged_cstrike:0, pole_damage:0, pole_ar:0, pole_cstrike:0, blunt_damage:0, blunt_ar:0, blunt_cstrike:0, thrown_damage:0, thrown_ar:0, thrown_pierce:0, claw_damage:0, claw_ar:0, claw_cstrike:0};
var base_stats = {level:1, skillpoints:0, statpoints:0, quests_completed:-1, running:-1, difficulty:3, strength_added:0, dexterity_added:0, vitality_added:0, energy_added:0, fRes_penalty:100, cRes_penalty:100, lRes_penalty:100, pRes_penalty:100, mRes_penalty:100, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0, fRes_max_base:75, cRes_max_base:75, lRes_max_base:75, pRes_max_base:75, mRes_max_base:75, set_bonuses:[0,0,{},{},{},{},{}]}

var effects = {};
var duplicateEffects = {};
var skillList = []; var skillOptions = [];
var selectedSkill = [" ­ ­ ­ ­ Skill 1", " ­ ­ ­ ­ Skill 2"];

var offhandSetup = "";		// temporary variable
var tempSetup = 0;			// temporary variable
var mercenary = {name:"",level:1,base_aura:"",base_aura_level:1};
var offhandType = "none";
var lastCharm = "";			// last charm on mouse-over
var lastSocketable = "";	// last gem/rune/jewel on mouse-over
var lastSelected = "";
var settings = {coupling:1, autocast:1, parameters:0}
var monsterID = 2;
var MAX = 20;				// Highest Skill Hardpoints
var LIMIT = 60;				// Highest Skill Data
var RES_CAP = 95;
var game_version = 2;
var loaded = 0;				// This is used to check whether the javascript on page load finished before modifying the page url to include character data.

var socketed = {	// Gems/Runes/Jewels Socketed in Equipment
	helm:{sockets:0, socketsFilled:0, totals:{}, items:[{id:"",name:""},{id:"",name:""},{id:"",name:""}]},
	armor:{sockets:0, socketsFilled:0, totals:{}, items:[{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""}]},
	weapon:{sockets:0, socketsFilled:0, totals:{}, items:[{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""}]},
	offhand:{sockets:0, socketsFilled:0, totals:{}, items:[{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""}]},
};

var inv = [		// Charm Inventory
{onpickup:"?",pickup_x:0,pickup_y:0,empty:1,charms:[],in:["",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
{x:1,y:1,empty:1,load:"",id:"h11"},{x:1,y:1,empty:1,load:"",id:"h21"},{x:1,y:1,empty:1,load:"",id:"h31"},{x:1,y:1,empty:1,load:"",id:"h41"},{x:1,y:1,empty:1,load:"",id:"h51"},{x:1,y:1,empty:1,load:"",id:"h61"},{x:1,y:1,empty:1,load:"",id:"h71"},{x:1,y:1,empty:1,load:"",id:"h81"},{x:1,y:1,empty:1,load:"",id:"h91"},{x:1,y:1,empty:1,load:"",id:"h01"},
{x:1,y:1,empty:1,load:"",id:"h12"},{x:1,y:1,empty:1,load:"",id:"h22"},{x:1,y:1,empty:1,load:"",id:"h32"},{x:1,y:1,empty:1,load:"",id:"h42"},{x:1,y:1,empty:1,load:"",id:"h52"},{x:1,y:1,empty:1,load:"",id:"h62"},{x:1,y:1,empty:1,load:"",id:"h72"},{x:1,y:1,empty:1,load:"",id:"h82"},{x:1,y:1,empty:1,load:"",id:"h92"},{x:1,y:1,empty:1,load:"",id:"h02"},
{x:1,y:1,empty:1,load:"",id:"h13"},{x:1,y:1,empty:1,load:"",id:"h23"},{x:1,y:1,empty:1,load:"",id:"h33"},{x:1,y:1,empty:1,load:"",id:"h43"},{x:1,y:1,empty:1,load:"",id:"h53"},{x:1,y:1,empty:1,load:"",id:"h63"},{x:1,y:1,empty:1,load:"",id:"h73"},{x:1,y:1,empty:1,load:"",id:"h83"},{x:1,y:1,empty:1,load:"",id:"h93"},{x:1,y:1,empty:1,load:"",id:"h03"},
{x:1,y:1,empty:1,load:"",id:"h14"},{x:1,y:1,empty:1,load:"",id:"h24"},{x:1,y:1,empty:1,load:"",id:"h34"},{x:1,y:1,empty:1,load:"",id:"h44"},{x:1,y:1,empty:1,load:"",id:"h54"},{x:1,y:1,empty:1,load:"",id:"h64"},{x:1,y:1,empty:1,load:"",id:"h74"},{x:1,y:1,empty:1,load:"",id:"h84"},{x:1,y:1,empty:1,load:"",id:"h94"},{x:1,y:1,empty:1,load:"",id:"h04"}
];

var colors = {
	White:"#dddddd",
	Gray:"#707070",
	Blue:"#6666bb",	
	Yellow:"#cccc77",
	Gold:"#9b885e",
	Green:"#00f000",
	DarkGreen:"#255d16",
	Tan:"#9b8c6d",
	Black:"Black",
	Orange:"#c48736",
	Purple:"#9b2aea",
	Red:"#cc6666",
	Indigo:"#9980ff"
};

var equipped = { helm:{name:"none",tier:0}, armor:{name:"none",tier:0}, gloves:{name:"none",tier:0}, boots:{name:"none",tier:0}, belt:{name:"none",tier:0}, amulet:{name:"none",tier:0}, ring1:{name:"none",tier:0}, ring2:{name:"none",tier:0}, weapon:{name:"none",tier:0,twoHanded:0,type:""}, offhand:{name:"none",tier:0,type:""}, charms:{name:"none"} };
var mercEquipped = { helm:{name:"none"}, armor:{name:"none"}, weapon:{name:"none"}, offhand:{name:"none"} };
var corruptsEquipped = { helm:{name:"none"}, armor:{name:"none"}, gloves:{name:"none"}, boots:{name:"none"}, belt:{name:"none"}, amulet:{name:"none"}, ring1:{name:"none"}, ring2:{name:"none"}, weapon:{name:"none"}, offhand:{name:"none"} };
var golemItem = {name:"none"};

var oskills = ["oskill_Warp","oskill_Ball_Lightning","oskill_Inner_Sight","oskill_Lethal_Strike","oskill_Valkyrie","oskill_Magic_Arrow","oskill_Guided_Arrow","oskill_Multiple_Shot","oskill_Battle_Command","oskill_Battle_Orders","oskill_Battle_Cry","oskill_Bash","oskill_Edged_Weapon_Mastery","oskill_Lycanthropy","oskill_Werebear","oskill_Werewolf","oskill_Feral_Rage","oskill_Flame_Dash","oskill_Summon_Dire_Wolf","oskill_Desecrate","oskill_Zeal","oskill_Vengeance","oskill_Frigerate","oskill_Shiver_Armor","oskill_Cold_Mastery","oskill_Hydra","oskill_Fire_Ball","oskill_Fire_Wall","oskill_Meteor","oskill_Fire_Mastery","oskill_Whirlwind","oskill_Heart_of_Wolverine"];
var oskills_info = {
	oskill_Warp:{name:"Warp",native_class:"none",i:0}, oskill_Ball_Lightning:{name:"Ball Lightning",native_class:"none",i:1},
	oskill_Inner_Sight:{name:"Inner Sight",native_class:"amazon",i:10}, oskill_Lethal_Strike:{name:"Lethal Strike",native_class:"amazon",i:11}, oskill_Valkyrie:{name:"Valkyrie",native_class:"amazon",i:18}, oskill_Magic_Arrow:{name:"Magic Arrow",native_class:"amazon",i:21}, oskill_Guided_Arrow:{name:"Guided Arrow",native_class:"amazon",i:25}, oskill_Multiple_Shot:{name:"Multiple Shot",native_class:"amazon",i:22},
	oskill_Battle_Command:{name:"Battle Command",native_class:"barbarian",i:9}, oskill_Battle_Orders:{name:"Battle Orders",native_class:"barbarian",i:6}, oskill_Battle_Cry:{name:"Battle Cry",native_class:"barbarian",i:5}, oskill_Bash:{name:"Bash",native_class:"barbarian",i:24}, oskill_Edged_Weapon_Mastery:{name:"Edged Weapon Mastery",native_class:"barbarian",i:10},
	oskill_Lycanthropy:{name:"Lycanthropy",native_class:"druid",i:12}, oskill_Werebear:{name:"Werebear",native_class:"druid",i:13}, oskill_Werewolf:{name:"Werewolf",native_class:"druid",i:11}, oskill_Feral_Rage:{name:"Feral Rage",native_class:"druid",i:14}, oskill_Flame_Dash:{name:"Flame Dash",native_class:"druid",i:2}, oskill_Summon_Dire_Wolf:{name:"Summon Dire Wolf",native_class:"druid",i:27}, 
	oskill_Desecrate:{name:"Desecrate",native_class:"necromancer",i:15}, 
	oskill_Zeal:{name:"Zeal",native_class:"paladin",i:23}, oskill_Vengeance:{name:"Vengeance",native_class:"paladin",i:25}, 
	oskill_Frigerate:{name:"Frigerate",native_class:"sorceress",i:1}, oskill_Shiver_Armor:{name:"Shiver Armor",native_class:"sorceress",i:4}, oskill_Cold_Mastery:{name:"Cold Mastery",native_class:"sorceress",i:10}, oskill_Hydra:{name:"Hydra",native_class:"sorceress",i:31}, oskill_Fire_Ball:{name:"Fire Ball",native_class:"sorceress",i:26}, oskill_Fire_Wall:{name:"Fire Wall",native_class:"sorceress",i:27}, oskill_Meteor:{name:"Meteor",native_class:"sorceress",i:29}, oskill_Fire_Mastery:{name:"Fire Mastery",native_class:"sorceress",i:30}, 
	oskill_Whirlwind:{name:"Whirlwind",native_class:"barbarian",i:27}, 
	oskill_Heart_of_Wolverine:{name:"Heart of Wolverine",native_class:"druid",i:23}, 
};

var effect_cskills = {Inner_Sight:{native_class:"amazon",i:10}, Phase_Run:{native_class:"amazon",i:12}, Cloak_of_Shadows:{native_class:"assassin",i:14}, Venom:{native_class:"assassin",i:18}, Cyclone_Armor:{native_class:"druid",i:5}, Heart_of_Wolverine:{native_class:"druid",i:23}, Oak_Sage:{native_class:"druid",i:26}, Spirit_of_Barbs:{native_class:"druid",i:29}, Blood_Golem:{native_class:"necromancer",i:6}, Iron_Golem:{native_class:"necromancer",i:8}, Deadly_Poison:{native_class:"necromancer",i:11}, Enflame:{native_class:"sorceress",i:28}};
var effect_ctcskills = {Venom:{native_class:"assassin",i:18}, Fade:{native_class:"assassin",i:15}, Cyclone_Armor:{native_class:"druid",i:5}, Chilling_Armor:{native_class:"sorceress",i:8}, Blaze:{native_class:"sorceress",i:24}, Enflame:{native_class:"sorceress",i:28}, Flesh_Offering:{native_class:"necromancer",i:4}};

var non_items = [
{name:"Miscellaneous"},
{i:1, name:"Shrine: Skill", all_skills:2, duration:96, recharge:240, effect:"Skill"},
{i:2, name:"Shrine: Combat", damage_bonus:200, ar_shrine_bonus:200, duration:96, recharge:240, effect:"Combat"},	// AR bonus can stack with other Combat shrines (unimplemented)
{i:3, name:"Shrine: Armor", defense_bonus:100, duration:96, recharge:240, effect:"Armor"},
{i:4, name:"Shrine: Mana Regeneration", mana_regen:400, duration:96, recharge:240, effect:"Mana_Regeneration"},
{i:5, name:"Shrine: Fire Resist", fRes:75, duration:144, recharge:240, effect:"Resist_Fire"},
{i:6, name:"Shrine: Cold Resist", cRes:75, duration:144, recharge:240, effect:"Resist_Cold"},
{i:7, name:"Shrine: Lightning Resist", lRes:75, duration:144, recharge:240, effect:"Resist_Lightning"},
{i:8, name:"Shrine: Poison Resist", pRes:75, duration:144, recharge:240, effect:"Resist_Poison"},
{i:9, name:"Potion: Thawing", cRes:50, duration:30, effect:"Thawing"},												// stackable duration (unimplemented)
{i:10, name:"Potion: Antitode", pRes:50, duration:30, effect:"Antidote"},											// stackable duration (unimplemented)
];

var mercenaries = [
{name:"Mercenary"},
{i:1, name:"Rogue Scout ­ ­ ­ ­ ­ (Inner Sight)", aura:"Inner Sight"},
{i:2, name:"Desert Guard ­ ­ ­ ­ (Blessed Aim)", aura:"Blessed Aim"},
{i:3, name:"Desert Guard ­ ­ ­ ­ (Defiance)", aura:"Defiance"},
{i:4, name:"Desert Guard ­ ­ ­ ­ (Prayer)", aura:"Prayer"},
{i:5, name:"Iron Wolf ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ (Meditation)", aura:"Meditation"},
{i:6, name:"Iron Wolf ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ (Cleansing)", aura:"Cleansing"},
{i:7, name:"Iron Wolf ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ (Precision)", aura:"Precision"},
{i:8, name:"Barbarian ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ (Might)", aura:"Might"},
];

var auras_extra = [
	{name:"Thorns", values:[["thorns",250,290,330,370,410,450,490,530,570,610,650,690,730,770,810,850,890,930,970,1010,1050,1090,1130,1170,1210,1250,1290,1330,1370,1410,1450,1490,1530,1570,1610,1650,1690,1730,1770,1810,1850,1890,1930,1970,2010,2050,2090,2130,2170,2210,2250,2290,2330,2370,2410,2450,2490,2530]]},
	{name:"Inner Sight", values:[]},	// automatically copied from amazon.js
	{name:"Righteous Fire", values:[["percent of life as fire damage",45]]},
	{name:"Lifted Spirit", values:[["damage multiplier",10]]},
];
