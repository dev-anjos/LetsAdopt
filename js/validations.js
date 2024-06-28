export default class FormValidator {

    validateNameAnimal(name) {
        return name.trim() !== '';
    }

    validateAnimalSpecies(species) {
       
        return species.trim() !== '';
    }

    validateAnimalBreed(breed) {
       
        return breed.trim() !== '';
    }

    validateAnimalAge(age) {
        
        return age.trim() !== '';
    }
};



