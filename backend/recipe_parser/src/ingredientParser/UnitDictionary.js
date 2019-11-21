const volumeUnits = {
  drop:['drops', 'dr', 'dr.','gtt', 'gtt.'],
  smidgen: ['smidgens','smdgs','smdg.'],
  pinch:['pinches','pn', 'pn.'],
  dash:['dashes','ds','ds.'],
  saltspoon: ['saltspoons','scruple','scruples','ssp', 'ssp.'],
  coffeespoon: ['coffeespoons','csp','csp.'],
  'fluid dram':['fluid drams', 'fl dr', 'fl.dr.'],
  teaspoon: ['teaspoons','tsp', 'tspn', 't', 't.'],
  tablespoon: ['tablespoons','tbs', 'tbsp', 'tbspn', 'T', 'T.'],
  'fluid ounce': ['fluid ounces', 'fl oz', 'fl.oz.', 'fl. oz.'],
  wineglass: ['wineglasses','wgfs','wgf.','wgf'],
  gill: ['gills', 'teacup', 'teacups','tcf.','tcf'], 
  cup: ['cups', 'c', 'c.','C'], 
  pint: ['pints','pt', 'pts', 'pt.'],
  quart: ['quarts','qt', 'qt.', 'qts'],
  pottle:['pottles','pot.'],
  gallon: ['gallons', 'gal'],
  milliliter: ['milliliters','millilitre', 'millilitres', 'ml', 'ml.', 'cc','mL','mL.'],
  liter: ['liters','litre','litres','l', 'l.', 'L'],
  deciliter: ['deciliters','decilitre', 'decilitres', 'dL', 'dl'],
};

const massUnits = {
  pound: ['pounds','lb', 'lb.', 'lbs'],
  ounce: ['ounces','oz', 'oz.'],
  milligram: ['milligrams','mg', 'mg.'],
  gram: ['grams','g', 'g.'],
  kilogram: ['kilograms', 'kg', 'kg.'],
}

const lengthUnits = {
  millimeter: ['millimeters','millimetre','millimetres', 'mm', 'mm.'],
  centimeter: ['centimeters', 'centimetre','centimetres','cm', 'cm.'],
  meter: ['meters','metre', 'metres', 'm', 'm.'],
  inch: ['inches', 'in', 'in.']
}

const plantUnits = {
  sprig : ['sprigs'],
  leaf: ['leaves'],
  stalk: ['stalks'],
  bunch: ['bunches'],
  ear: ['ears'],
  stick: ['sticks'],
  clove: ['cloves']
}

const packagedFoodUnits = {
  package:['packages', 'pkg', 'pkgs'],
  tray: ['trays'],
  bag: ['bags'],
  box: ['boxes'],
  can: ['cans'],
  sachet:['sachets'],
  bottle:['bottles'],
}

const miscellaneous = {
  slice: ['slices'],
  mug: ['mugs'],
  loaf: ['loafs'],
  jar: ['jars'],
  cube: ['cubes'],
  ball: ['balls'],
}

const estimations = ['small, medium','large', 'handful', 'handfuls', 'balls', 'ball','whole','piece','pieces','tins']
  
const unitDictionary = {
  ...volumeUnits,
  ...massUnits,
  ...lengthUnits,
  ...plantUnits,
  ...packagedFoodUnits,
  ...miscellaneous
}

module.exports = unitDictionary;