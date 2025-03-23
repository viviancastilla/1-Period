function getAnimalDescription(favoriteAnimal){
    switch (favoriteAnimal){
        case 'fox':
            return "Foxes are sly and smart!";
        case 'dog':
            return "Dogs are loyal friends";
        case 'cat':
            return "Cats are curious and independent";
        default:
            return "All animals are awesome!";
    }
}

console.log(getAnimalDescription('bunny'));