import {Strings} from './strings.js'
import {Names} from '../objects/naming/names.js'
import {Metals} from '../objects/naming/metals.js'
import {Terrain} from '../objects/naming/terrain.js'

export class Naming {

    generatePlayerName() {
        return generatePlayerNameFromSeed("");
    };

    generatePlayerNameFromSeed(baseSeed) {
        return prefix() + 
                generateFirstNaame(baseSeed) +
                generateLastNaame() +
                suffix() +
                suffixTitleModifier() +
                metal() +
                landType();
    };

    generateFirstNaame(baseSeed) {
        return capitolizeFirstLetter(consonent() + vowel() + vowel() + baseSeed + consonent() + vowel() + consonent());
    };
    
    generateLastNaame() {
        return capitolizeFirstLetter(vowel() + consonent() + vowel() + consonent() + vowel() + vowel() + consonent());
    };


    consonent() {
        return Strings.getRandomStringFromArray(Names.consonent);
    };

    vowel() {
        return Strings.getRandomStringFromArray(Names.vowel);
    };

    prefix() {
        return Strings.getRandomStringFromArray(Names.prefix);
    };

    suffixTitleModifier() {

        return Strings.getRandomStringFromArray(Names.suffixTitleModifier);
    };

    suffix() {
        return Strings.getRandomStringFromArray(Names.suffix);
    };

    metal() {
        return Strings.getRandomStringFromArray(Metals.metal);
    };

    landType() {
        return Strings.getRandomStringFromArray(Terrain.Terrain);
    };
}