'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg']; // Défini la constante pour les formats d'image acceptés
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb Taille maximale des images autorisées
const dropZone = document.querySelector('#js-drop-to'); // Selectionne la drop zone sur le html pour savoir ou drag&drop
const filesList = document.querySelector('#js-file-list'); // Selectionne la ou la liste des fichiers vont s'afficher après le drop

dropZone.addEventListener('dragover', (e) => onDragOver(e)); // Quand on drag un fichier sur le DIV de drop
dropZone.addEventListener('drop', (e) => onDrop(e)); // Quand on drop le fichier
dropZone.addEventListener('dragover', () => changeDropZoneState(true)); // Quand on drag un fichier sur le DIV de drop
dropZone.addEventListener('dragleave', () => changeDropZoneState(false)); // Quand on lache le drag du fichier sur le DIV de drop

// Fonction pour annuler le comportement par défaut du navigateur
function onDragOver(event) {
  event.stopPropagation();
  event.preventDefault();
}

// Fonction pour annuler le comportement par défaut du navigateur puis stocker le fichier draggé dans une liste
function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  filesList.innerHTML = ''; // Initialisation de la liste des fichiers
  const filesUploaded = Array.from(e.dataTransfer.files); // Création d'une constante des fichiers uploadés ayant pour valeur un tableau contenant les fichiers draggés
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index)); // Pour chaque fichiers draggés, on appelle la fonction pour voir si il y a erreur
  changeDropZoneState(false); // On change l'état de la class CSS qui surligne en bleu à FALSE (On l'enlève)
}

// Fonction pour styliser le html quand un fichier est draggé sur le DIV
function changeDropZoneState(isDragging) {
  isDragging ?  // Est-ce qu'on drag un fichier sur le div ?
    dropZone.classList.add('js-is-dragged-over') : // Si oui, on ajoute la class CSS qui surligne en bleu
    dropZone.classList.remove('js-is-dragged-over'); // Si non, on l'enlève
}

// Fonction pour afficher erreur si il y a
function handleUploadedFile(file, index) {
  const error = getUploadError(file); // Obtenir une error si l'upload fail
  error ? // (IF) Une erreur ?
    console.warn(`"${file.name}" Upload Error: ${error}`) : // Alors on va warn dans la console
    filesList.appendChild(createListEl(file, index)); // Sinon si il n'y a pas d'erreur, on appelle la fonction pour créer une liste d'éléments
}

// Fonction pour créer une liste d'éléments LI avec les fichiers draggés dans une class
function createListEl(file, index) {
  const el = document.createElement('li'); // On crée la liste <li>
  el.setAttribute('id', 'file-list-item-'+index); // On met l'ID des items ajoutés à  Nitems+1 
  el.className = 'list-group-item file-list-item'; // Le nom de la class sur la page HTML

  // add image
  const elPreview = document.createElement('img'); // On crée un element HTML <img>
  elPreview.classList.add('file-list-item-preview'); // On ajoute la class CSS à l'element <img>
  el.appendChild(elPreview); // On upload l'image dans le body de la page
  renderImage(file, 'file-list-item-'+index); // On appelle la fonction pour modéliser l'image

  // add name
  const elName = document.createElement('p'); // On crée un paragraphe
  elName.classList.add('file-list-item-name'); // On ajoute la class CSS à l'element <p>
  elName.innerText = file.name; // On met comme texte le nom de l'image
  el.appendChild(elName); // On upload le text dans le body de la page

  return el; // On retourne la liste
}

// Fonction pour modéliser l'image sur la page HTML
function renderImage(file, elId) {
  const reader = new FileReader(); // On initialise le liseur de fichier
  reader.onload = (e) => { // Quand le fichier est chargé
    const img = document.querySelector(`#${elId} img`); // On créé une constante qu'on selectionne à partir de son ID
    img.setAttribute('src', e.target.result); // On lui ajoute l'attribut du lien de son image
  }
  reader.readAsDataURL(file); // On lis le fichier comme si c'était des données
}

// Fonction pour afficher les erreurs si le fichier ne respecte pas les constantes requises
function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) { // Si la taille du fichier est > à la constante définie (30Kb)
    return 'Your image is too big'; // On dis que l'image est trop grosse
  } else if (!ACCEPTED_FORMATS.includes(file.type)) { // Sinon si le format de l'image n'est pas accepté :
    return 'Image of this format is not accepted'; // On dis que le format n'est pas accepté
  } else { // Sinon
    return; // R.
  }
}