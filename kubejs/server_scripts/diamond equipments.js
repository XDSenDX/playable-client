ServerEvents.recipes((e) => {
  e.remove({ id: "epicfight:diamond_greatsword" }) /// remove diamond greatsword original recipe
  e.remove({ id: "epicfight:diamond_spear" }) /// remove diamond spear original recipe
  e.remove({ id: "epicfight:diamond_tachi" }) /// remove diamond tachi original recipe
  e.remove({ id: "epicfight:diamond_longsword" }) /// remove diamond longsword original recipe
  e.remove({ id: "magistuarmory:diamond_stylet" }) /// remove diamond stylet original recipe
  e.remove({ id: "magistuarmory:diamond_shortsword" }) /// remove diamond shortsword original recipe
  e.remove({ id: "magistuarmory:diamond_katzbalger" }) /// remove diamond katzbalger original recipe
  e.remove({ id: "magistuarmory:diamond_ahlspiess" }) /// remove diamond ahlspiess original recipe
  e.remove({ id: 'magistuarmory:diamond_chivalrylance' }) /// remove diamond lance original recipe
  e.remove({ id: "magistuarmory:diamond_bastardsword" }) /// remove diamond bastard original recipe
  e.remove({ id: "magistuarmory:diamond_estoc" }) /// remove diamond estoc original recipe
  e.remove({ id: "magistuarmory:diamond_claymore" }) /// remove diamond claymore original recipe
  e.remove({ id: "magistuarmory:diamond_zweihander" }) /// remove diamond zweihander original recipe
  e.remove({ id: "magistuarmory:diamond_flamebladedsword" }) /// remove diamond flamebladed original recipe
  e.remove({ id: "magistuarmory:diamond_lochaberaxe" }) /// remove diamond lochaberaxe original recipe
  e.remove({ id: "magistuarmory:diamond_concavehalberd" }) /// remove diamond concavehalberd original recipe
  e.remove({ id: "magistuarmory:diamond_heavymace" }) /// remove diamond heavy mace original recipe
  e.remove({ id: "magistuarmory:diamond_heavywarhammer" }) /// remove diamond heavy war hammer original recipe
  e.remove({ id: "magistuarmory:diamond_lucernhammer" }) /// remove diamond lucerne hammer original recipe
  e.remove({ id: "magistuarmory:diamond_morgenstern" }) /// remove morning star original recipe
  e.remove({ id: "magistuarmory:diamond_chainmorgenstern" }) /// remove diamond flail original recipe
  e.remove({ id: "magistuarmory:diamond_guisarme" }) /// remove diamond guisarme original recipe
 

  e.remove({ id: "magistuarmory:diamond_morgenstern" }) /// remove morning star original recipe
  e.remove({ id: "magistuarmory:diamond_chainmorgenstern" }) /// remove diamond flail original recipe
  e.remove({ id: "magistuarmory:diamond_guisarme" }) /// remove diamond guisarme original recipe
});
ServerEvents.recipes(event => { 
event.shaped('epicfight:diamond_greatsword', [ ///diamond greatsword recipe
    '  B', 
    'CB ',
	'AC '
  ], {
    A: 'realisticforging:finisheddiamondguard', 
    B: 'realisticforging:finisheddiamondswordblade',  
	C: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('epicfight:diamond_spear', [ ///diamond spear recipe
    ' DC', 
    ' BD',
	'A  '
  ], {
    A: 'minecraft:diamond_nugget', 
    B: 'magistuarmory:pole',
	C: 'realisticforging:finisheddiamondswordblade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('epicfight:diamond_tachi', [ ///diamond tachi recipe
    '  C', 
    'DC ',
	'AD '
  ], {
    A: 'realisticforging:finisheddiamondguard', 
	C: 'realisticforging:finisheddiamondswordblade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('epicfight:diamond_longsword', [ ///diamond longsword recipe
    '  C', 
    'DB ',
	'AD '
  ], {
    A: 'realisticforging:finisheddiamondguard', 
	B: 'realisticforging:ironsheet',
	C: 'realisticforging:finisheddiamondswordblade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_stylet', [ ///diamond stiletto recipe
    '  C', 
    'DB ',
	'AD '
  ], {
    A: 'magistuarmory:hilt', 
	B: 'realisticforging:finisheddiamondguard',
	C: 'realisticforging:finisheddiamondswordblade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_shortsword', [ ///diamond short sword recipe
    '  C', 
    ' B ',
	'A  '
  ], {
    A: 'magistuarmory:hilt', 
	B: 'realisticforging:finisheddiamondguard',
	C: 'realisticforging:finisheddiamondswordblade'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_katzbalger', [ ///diamond katzbalger recipe
    ' C ', 
    'DBD',
	' A '
  ], {
    A: 'magistuarmory:hilt', 
	B: 'realisticforging:finisheddiamondguard',
	C: 'realisticforging:finisheddiamondswordblade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { ///diamond pike recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_pike' }, 
  'minecraft:diamond',            
  'realisticforging:finisheddiamondswordblade'         

)
});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_ahlspiess', [ ///diamond ahlspiess recipe
    '  C', 
    'DB ',
	'AD '
  ], {
    A: 'magistuarmory:hilt', 
	B: 'realisticforging:finisheddiamondguard',
	C: 'magistuarmory:diamond_stylet',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_chivalrylance', [ ///diamond lance recipe
    'DDC', 
    'DBD',
	'ADD'
  ], {
    A: 'magistuarmory:hilt', 
	B: 'magistuarmory:pole',
	C: 'realisticforging:finisheddiamondswordblade',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_bastardsword', [ ///diamond bastard recipe
    '  B', 
    ' A ',
	'   '
  ], {
    A: 'magistuarmory:diamond_shortsword', 
	B: 'realisticforging:finisheddiamondswordblade'

  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_estoc', [ ///diamond estoc recipe
    '  B', 
    ' A ',
	'C  '
  ], {
    A: 'magistuarmory:diamond_shortsword', 
	B: 'realisticforging:finisheddiamondswordblade',
	C: 'realisticforging:finisheddiamondguard'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_claymore', [ ///diamond claymore recipe
    '  B', 
    'DA ',
	'CD '
  ], {
    A: 'realisticforging:ironsheet', 
	B: 'magistuarmory:diamond_shortsword',
	C: 'realisticforging:finisheddiamondguard',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_zweihander', [ ///diamond zweihander recipe
    '  B', 
    'DA ',
	'CD '
  ], {
    A: 'magistuarmory:diamond_shortsword', 
	B: 'realisticforging:finisheddiamondswordblade',
	C: 'magistuarmory:hilt',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_flamebladedsword', [ ///diamond flamebladed recipe
    '  B', 
    'DA ',
	'CD '
  ], {
    A: 'magistuarmory:diamond_shortsword', 
	B: 'realisticforging:hotironswordblade',
	C: 'magistuarmory:hilt',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_lochaberaxe', [ ///diamond lochaberaxe recipe
    '  B', 
    'DC ',
	'CD '
  ], {
 
	B: 'realisticforging:diamondaxeblade',
	C: 'magistuarmory:pole',
	D: 'magistuarmory:leather_strip'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_concavehalberd', [ ///diamond concavehalberd recipe
    'EC ', 
    'DAD',
	' A '
  ], {
	A: 'magistuarmory:pole',
	C: 'epicfight:diamond_dagger',
	D: 'magistuarmory:leather_strip',
	E: 'realisticforging:diamondaxeblade'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_heavymace', [ ///diamond heavy mace recipe
    'EAE', 
    'DAD',
	' A '
  ], {
	A: 'magistuarmory:pole',
	D: 'magistuarmory:leather_strip',
	E: 'realisticforging:diamondaxeblade'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_heavywarhammer', [ ///diamond heavy war hammer recipe
    'DB ', 
    'EBE',
	' A '
  ], {
	A: 'magistuarmory:pole',
	E: 'magistuarmory:leather_strip',
	D: 'realisticforging:diamondaxeblade',
	B: 'minecraft:stick'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_lucernhammer', [ ///diamond lucerne hammer recipe
    'EDE', 
    'EBE',
	' A '
  ], {
	A: 'magistuarmory:pole',
	E: 'magistuarmory:leather_strip',
	D: 'epicfight:diamond_dagger',
	B: 'realisticforging:diamondpickaxehead'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_morgenstern', [ ///diamond morningstar recipe
    'EDE', 
    'FBF',
	' A '
  ], {
	A: 'magistuarmory:hilt',
	F: 'magistuarmory:leather_strip',
	D: 'realisticforging:diamondshards',
	B: 'minecraft:stick',
	E: 'realisticforging:ironscraps'
  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_chainmorgenstern', [ ///diamond flail recipe
    'FFF', 
    'BCE',
	'AEG'
  ], {
	A: 'magistuarmory:hilt',
	F: 'magistuarmory:leather_strip',
	C: 'minecraft:chain',
	B: 'minecraft:stick',
	E: 'realisticforging:ironscrap',
	G: 'realisticforging:diamondshards'

  }
)

});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:diamond_guisarme', [ ///diamond guisarme recipe
    'FFB', 
    'FAF',
	'AFF'
  ], {
	A: 'magistuarmory:pole',
	F: 'magistuarmory:leather_strip',
	
	B: 'magistuarmory:diamond_shortsword'	
	

  }
)

});

ServerEvents.recipes(event => { ///diamond heater recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_heatershield' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'         

)
});
ServerEvents.recipes(event => { ///diamond targe recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_target' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'         

),
event.replaceInput(
  { id: 'magistuarmory:diamond_target' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});

ServerEvents.recipes(event => { ///diamond buckler recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_buckler' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'         

),
event.replaceInput(
  { id: 'magistuarmory:diamond_buckler' }, 
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

ServerEvents.recipes(event => { ///diamond rondache recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_rondache' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_roundshield' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
ServerEvents.recipes(event => { ///diamond tartsche recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_tartsche' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_tartsche' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
ServerEvents.recipes(event => { ///diamond elliptical recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_ellipticalshield' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_ellipticalshield' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
ServerEvents.recipes(event => { ///diamond round recipe

event.replaceInput(
  { id: 'magistuarmory:diamond_roundshield' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'        

)
});

ServerEvents.recipes(event => { ///diamond pavese recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_pavese' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_pavese' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});

ServerEvents.recipes(event => { ///diamond kiteshield recipe
event.replaceInput(
  { id: 'magistuarmory:diamond_kiteshield' }, 
  'minecraft:diamond',            
  'realisticforging:diamondshards'         

),
event.replaceInput(
  { id: 'magistuarmory:wood_kiteshield' }, 
  'magistuarmory:steel_ingot',            
  'magistuarmory:steel_plate'         

)
});
