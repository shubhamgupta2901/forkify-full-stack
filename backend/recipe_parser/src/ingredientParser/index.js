const convert = require('./convert');
const {units, pluralUnits} = require('./units');
const UnitDictionary = require('./UnitDictionary');
const getUnit = (input)=>{
  if (units[input] || pluralUnits[input]) {
    return [input];
  }
  for (const unit of Object.keys(units)) {
    for (const shorthand of units[unit]) {
      if (input === shorthand) {
        return [unit, input];
      }
    }
  }
  for (const pluralUnit of Object.keys(pluralUnits)) {
    if (input === pluralUnits[pluralUnit]) {
      return [pluralUnit, input];
    }
  }
  return [];
}

const getUnitFromIngredient = (ingredient)=>{
    const ingredientLine = ingredient.trim();
    const splitIngredientArr = ingredientLine.split(' ');
    
    for(let i = 0; i<splitIngredientArr.length; i++){
        let element = splitIngredientArr[i];
        if(UnitDictionary[element.toLowerCase()]){
            return [element.toLowerCase(), ingredientLine];
        }
            
        for (const [key, value] of Object.entries(UnitDictionary)) {
            if(value.includes(element.toLowerCase())){
                return [key, ingredient];
            }    
        }   
    }
    return [undefined,ingredient];
}

const parse = (recipeString) =>{
    //trim and remove paranthesis along with the words
  const ingredientLine = recipeString.trim().replace(/ *\([^)]*\) */g, " ");
  let [quantity, noQuantity] = convert.findQuantityAndConvertIfUnicode(ingredientLine);

  quantity = convert.convertFromFraction(quantity);

  let extraInfo;
  if (convert.getFirstMatch(noQuantity, /\(([^\)]+)\)/)) {
    extraInfo = convert.getFirstMatch(noQuantity, /\(([^\)]+)\)/);
    noQuantity = noQuantity.replace(extraInfo, '').trim();
  }

  const [unit, shorthand] = getUnit(noQuantity.split(' ')[0]);
  const ingredient = !!shorthand ? noQuantity.replace(shorthand, '').trim() : noQuantity.replace(unit, '').trim();

  return {
    quantity,
    unit: !!unit ? unit : null,
    ingredient: ingredient,
    extraInfo: extraInfo ? extraInfo : null,
  };
}

module.exports = { parse , getUnitFromIngredient};
