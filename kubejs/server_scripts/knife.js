ServerEvents.recipes(event => {                            ///blade
  
event.stonecutting('butcher:skinningknifeblade','minecraft:iron_ingot',), 
event.stonecutting('butcher:ironcleaverblade','minecraft:iron_ingot'),
event.stonecutting('butcher:plierjaw','minecraft:iron_ingot')
});

ServerEvents.recipes(event => { 
event.shaped('butcher:butchers_knife', [ ///iron cleaver recipe
    '  B', 
    'AAA',
	'   '
  ], {
    A: 'minecraft:stick', 
    B: 'butcher:ironcleaverblade' 

  }
)
});	
ServerEvents.recipes(event => { 

event.shaped('butcher:skinning_knife', [ ///iron skinning knife recipe
    '  B', 
    'AAA',
	'   '
  ], {
    A: 'minecraft:stick', 
    B: 'butcher:skinningknifeblade' 

  }
)
});	

ServerEvents.recipes(event => {
event.shaped('butcher:pliers', [ ///iron plierjaw recipe
    ' B ', 
    ' C ',
	'A A'
  ], {
    A: 'minecraft:stick', 
    B: 'butcher:plierjaw',
	C: 'minecraft:iron_nugget'

  }
)
});	
ServerEvents.recipes((e) => {
 
 

  e.remove({ id: "butcher:skinning_knife_recipe" }) /// remove morning star original recipe
  e.remove({ id: "butcher:butchers_knife_recipe" }) /// remove iron flail original recipe
  e.remove({ id: "butcher:pliers_recipe" }) /// remove iron guisarme original recipe
});