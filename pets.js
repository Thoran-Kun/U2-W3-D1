class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  sameOwner = function (otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true
    } else {
      return false
    }
  }
}

// targetto i nomi degli animali e dei rispettivi proprietari
const petNameInput = document.getElementById("petName")
const ownerNameInput = document.getElementById("ownerName")
const speciesInput = document.getElementById("speciesPet")
const breedInput = document.getElementById("breedPet")

// recupero i dati inseriti nel form ed evito il refresh della pagina
const form = document.getElementById("formPet")

const pets = [] // array che contiene tutti gli animali che creeremo
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const petName = petNameInput.value
  const ownerName = ownerNameInput.value
  const species = speciesInput.value
  const breed = breedInput.value
  //   creiamo una classe di animali con rispettivi proprietari
  const Pet = new Pet(petName, ownerName, species, breed)

  let sameOwnerPet = pets.find((p) => Pet.sameOwner(p))
  if (sameOwnerPet) {
    console.log(
      `il proprietario ${ownerName} ha già una altro animale: ${sameOwnerPet.petName}`
    )
  } else {
    console.log("aggiunto nuovo proprietario!")
  }

  //Aggingo il nuovo animale all'elenco
  pets.push(newPet)
})
