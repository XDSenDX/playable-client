ServerEvents.recipes((e) => {
  e.remove({ id: "epicfight:iron_greatsword" }) /// remove iron greatsword original recipe
  e.remove({ id: "epicfight:iron_spear" }) /// remove iron spear original recipe
  e.remove({ id: "epicfight:iron_tachi" }) /// remove iron tachi original recipe
  e.remove({ id: "epicfight:iron_longsword" }) /// remove iron longsword original recipe
  e.remove({ id: "magistuarmory:iron_stylet" }) /// remove iron stylet original recipe
  e.remove({ id: "magistuarmory:iron_shortsword" }) /// remove iron shortsword original recipe
  e.remove({ id: "magistuarmory:iron_katzbalger" }) /// remove iron katzbalger original recipe
  e.remove({ id: "magistuarmory:iron_ahlspiess" }) /// remove iron ahlspiess original recipe
  e.remove({ id: 'magistuarmory:iron_chivalrylance' }) /// remove iron lance original recipe
  e.remove({ id: "magistuarmory:iron_bastardsword" }) /// remove iron bastard original recipe
  e.remove({ id: "magistuarmory:iron_estoc" }) /// remove iron estoc original recipe
  e.remove({ id: "magistuarmory:iron_claymore" }) /// remove iron claymore original recipe
  e.remove({ id: "magistuarmory:iron_zweihander" }) /// remove iron zweihander original recipe
  e.remove({ id: "magistuarmory:iron_flamebladedsword" }) /// remove iron flamebladed original recipe
  e.remove({ id: "magistuarmory:iron_lochaberaxe" }) /// remove iron lochaberaxe original recipe
  e.remove({ id: "magistuarmory:iron_concavehalberd" }) /// remove iron concavehalberd original recipe
  e.remove({ id: "magistuarmory:iron_heavymace" }) /// remove iron heavy mace original recipe
  e.remove({ id: "magistuarmory:iron_heavywarhammer" }) /// remove iron heavy war hammer original recipe
  e.remove({ id: "magistuarmory:iron_lucernhammer" }) /// remove iron lucerne hammer original recipe
  e.remove({ id: "magistuarmory:iron_morgenstern" }) /// remove morning star original recipe
  e.remove({ id: "magistuarmory:iron_chainmorgenstern" }) /// remove iron flail original recipe
  e.remove({ id: "magistuarmory:iron_guisarme" }) /// remove iron guisarme original recipe
 

  e.remove({ id: "magistuarmory:iron_morgenstern" }) /// remove morning star original recipe
  e.remove({ id: "magistuarmory:iron_chainmorgenstern" }) /// remove iron flail original recipe
  e.remove({ id: "magistuarmory:iron_guisarme" }) /// remove iron guisarme original recipe
});
ServerEvents.recipes(event => { 
event.shaped('epicfight:iron_greatsword', [ ///iron greatsword recipe
    '  B', 
    'CB ',
	'AC '
  ], {
    A: 'realisticforging:finished_iron_sword_guard', 
    B: 'realisticforging:iron_sword_blade',  
	C: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('epicfight:iron_spear', [ ///iron spear recipe
    ' DC', 
    ' BD',
	'A  '
  ], {
    A: 'minecraft:iron_nugget', 
    B: 'magistuarmory:pole',
	C: 'realisticforging:iron_sword_blade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('epicfight:iron_tachi', [ ///iron tachi recipe
    '  C', 
    'DC ',
	'AD '
  ], {
    A: 'realisticforging:finished_iron_sword_guard', 
	C: 'realisticforging:iron_sword_blade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('epicfight:iron_longsword', [ ///iron longsword recipe
    '  C', 
    'DB ',
	'AD '
  ], {
    A: 'realisticforging:finished_iron_sword_guard', 
	B: 'realisticforging:ironsheet',
	C: 'realisticforging:iron_sword_blade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_stylet', [ ///iron stiletto recipe
    '  C', 
    'DB ',
	'AD '
  ], {
    A: 'magistuarmory:hilt', 
	B: 'realisticforging:finished_iron_sword_guard',
	C: 'realisticforging:iron_sword_blade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_shortsword', [ ///iron short sword recipe
    '  C', 
    ' B ',
	'A  '
  ], {
    A: 'magistuarmory:hilt', 
	B: 'realisticforging:finished_iron_sword_guard',
	C: 'realisticforging:iron_sword_blade'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_katzbalger', [ ///iron katzbalger recipe
    ' C ', 
    'DBD',
	' A '
  ], {
    A: 'magistuarmory:hilt', 
	B: 'realisticforging:finished_iron_sword_guard',
	C: 'realisticforging:iron_sword_blade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { ///iron pike recipe
event.replaceInput(
  { id: 'magistuarmory:iron_pike' }, 
  'minecraft:iron_ingot',            
  'realisticforging:iron_sword_blade'         

)
});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_ahlspiess', [ ///iron ahlspiess recipe
    '  C', 
    'DB ',
	'AD '
  ], {
    A: 'magistuarmory:hilt', 
	B: 'realisticforging:finished_iron_sword_guard',
	C: 'magistuarmory:iron_stylet',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_chivalrylance', [ ///iron lance recipe
    'DDC', 
    'DBD',
	'ADD'
  ], {
    A: 'magistuarmory:hilt', 
	B: 'magistuarmory:pole',
	C: 'realisticforging:iron_sword_blade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_bastardsword', [ ///iron bastard recipe
    '  B', 
    ' A ',
	'   '
  ], {
    A: 'magistuarmory:iron_shortsword', 
	B: 'realisticforging:iron_sword_blade'

  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_estoc', [ ///iron estoc recipe
    '  B', 
    ' A ',
	'C  '
  ], {
    A: 'magistuarmory:iron_shortsword', 
	B: 'realisticforging:iron_sword_blade',
	C: 'realisticforging:finished_iron_sword_guard'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_claymore', [ ///iron claymore recipe
    '  B', 
    'DA ',
	'CD '
  ], {
    A: 'realisticforging:ironsheet', 
	B: 'magistuarmory:iron_shortsword',
	C: 'realisticforging:finished_iron_sword_guard',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_zweihander', [ ///iron zweihander recipe
    '  B', 
    'DA ',
	'CD '
  ], {
    A: 'magistuarmory:iron_shortsword', 
	B: 'realisticforging:iron_sword_blade',
	C: 'magistuarmory:hilt',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_flamebladedsword', [ ///iron flamebladed recipe
    '  B', 
    'DA ',
	'CD '
  ], {
    A: 'magistuarmory:iron_shortsword', 
	B: 'realisticforging:hotironswordblade',
	C: 'magistuarmory:hilt',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_lochaberaxe', [ ///iron lochaberaxe recipe
    '  B', 
    'DC ',
	'CD '
  ], {
 
	B: 'realisticforging:axeironblade',
	C: 'magistuarmory:pole',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_concavehalberd', [ ///iron concavehalberd recipe
    'EC ', 
    'DAD',
	' A '
  ], {
	A: 'magistuarmory:pole',
	C: 'epicfight:iron_dagger',
	D: 'magistuarmory:leather_strip',
	E: 'realisticforging:axeironblade'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_heavymace', [ ///iron heavy mace recipe
    'EAE', 
    'DAD',
	' A '
  ], {
	A: 'magistuarmory:pole',
	D: 'magistuarmory:leather_strip',
	E: 'realisticforging:axeironblade'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_heavywarhammer', [ ///iron heavy war hammer recipe
    'DB ', 
    'EBE',
	' A '
  ], {
	A: 'magistuarmory:pole',
	E: 'magistuarmory:leather_strip',
	D: 'realisticforging:axeironblade',
	B: 'minecraft:stick'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_lucernhammer', [ ///iron lucerne hammer recipe
    'EDE', 
    'EBE',
	' A '
  ], {
	A: 'magistuarmory:pole',
	E: 'magistuarmory:leather_strip',
	D: 'epicfight:iron_dagger',
	B: 'realisticforging:ironpickaxehead'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_morgenstern', [ ///iron morningstar recipe
    'EDE', 
    'FBF',
	' A '
  ], {
	A: 'magistuarmory:hilt',
	F: 'magistuarmory:leather_strip',
	D: 'realisticforging:ironsheet',
	B: 'minecraft:stick',
	E: 'realisticforging:ironscraps'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_chainmorgenstern', [ ///iron flail recipe
    'FFF', 
    'BCE',
	'AEG'
  ], {
	A: 'magistuarmory:hilt',
	F: 'magistuarmory:leather_strip',
	C: 'minecraft:chain',
	B: 'minecraft:stick',
	E: 'realisticforging:ironscraps',
	G: 'realisticforging:ironsheet'

  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:iron_guisarme', [ ///iron guisarme recipe
    'FFB', 
    'FAF',
	'AFF'
  ], {
	A: 'magistuarmory:pole',
	F: 'magistuarmory:leather_strip',
	
	B: 'magistuarmory:iron_shortsword'	
	

  }
)

});

ServerEvents.recipes(event => { ///iron heater recipe
event.replaceInput(
  { id: 'magistuarmory:iron_heatershield' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'         

)
});
ServerEvents.recipes(event => { ///iron targe recipe
event.replaceInput(
  { id: 'magistuarmory:iron_target' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'         

),
event.replaceInput(
  { id: 'magistuarmory:iron_target' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});

ServerEvents.recipes(event => { ///iron buckler recipe
event.replaceInput(
  { id: 'magistuarmory:iron_buckler' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'         

),
event.replaceInput(
  { id: 'magistuarmory:iron_buckler' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
ServerEvents.recipes(event => { ///wooden heater recipe

event.replaceInput(
  { id: 'magistuarmory:wood_heatershield' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});

ServerEvents.recipes(event => { ///iron rondache recipe
event.replaceInput(
  { id: 'magistuarmory:iron_rondache' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_roundshield' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
ServerEvents.recipes(event => { ///iron tartsche recipe
event.replaceInput(
  { id: 'magistuarmory:iron_tartsche' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_tartsche' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
ServerEvents.recipes(event => { ///iron elliptical recipe
event.replaceInput(
  { id: 'magistuarmory:iron_ellipticalshield' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_ellipticalshield' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
ServerEvents.recipes(event => { ///iron round recipe

event.replaceInput(
  { id: 'magistuarmory:iron_roundshield' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'        

)
});

ServerEvents.recipes(event => { ///iron pavese recipe
event.replaceInput(
  { id: 'magistuarmory:iron_pavese' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_pavese' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});

ServerEvents.recipes(event => { ///iron kiteshield recipe
event.replaceInput(
  { id: 'magistuarmory:iron_kiteshield' }, 
  'minecraft:iron_ingot',            
  'realisticforging:ironsheet'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_kiteshield' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
