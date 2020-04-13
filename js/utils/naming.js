import {Names} from './naming/names.js'
import {Metals} from './naming/metals.js'
import {Terrain} from './naming/terrain.js'

export class Naming {

    static get generatePlayerName() {
        return this.generatePlayerNameFromSeed("");
    };

    static generatePlayerNameFromSeed(baseSeed) {
        return this.prefix() + " " +
                this.generateFirstNaame(baseSeed) + " " +
                this.generateLastNaame() + ", " +
                this.suffix() + " " +
                this.suffixTitleModifier() + " " +
                this.metal() + " " +
                this.landType();
    };

    static capitolizeFirstLetter(stringToCap) {
        return   stringToCap.charAt(0).toUpperCase() + stringToCap.slice(1)
    }

    static generateFirstNaame(baseSeed) {
        return this.capitolizeFirstLetter(this.consonent() + this.vowel() + this.vowel() + baseSeed + this.consonent() + this.vowel() + this.consonent());
    };
    
    static generateLastNaame() {
        return this.capitolizeFirstLetter(this.vowel() + this.consonent() + this.vowel() + this.consonent() + this.vowel() + this.vowel() + this.consonent());
    };

    static consonent() {
        return Names.consonents[Math.floor(Math.random()*Names.consonents.length)];
    };

    static vowel() {
         return Names.vowels[Math.floor(Math.random()*Names.vowels.length)];
    };

    static prefix() {
         return Names.prefixes[Math.floor(Math.random()*Names.prefixes.length)];
    };

    static suffixTitleModifier() {
        return Names.titlePrefixes[Math.floor(Math.random()*Names.titlePrefixes.length)];
    };

    static suffix() {
         return Names.suffixes[Math.floor(Math.random()*Names.suffixes.length)];
    };

    static metal() {
         return Metals.metals[Math.floor(Math.random()*Metals.metals.length)];
    };

    static landType() {
         return Terrain.terrain[Math.floor(Math.random()*Terrain.terrain.length)];
    };
}